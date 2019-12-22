<template>
  <div class="home">
    <div class="header">
      <div class="address_map" v-show="addressView" @click="$router.push({name: 'address'})">
        <i class="fa fa-map-marker"></i>
        <span>{{ address }}</span>
        <i class="fa fa-sort-desc"></i>
      </div>

      <div class="shop_search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {

        addressView: false
    }
  },
  methods: {
    getLocation() {
      const self = this;
      AMap.plugin('AMap.Geolocation', function() {
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);
        AMap.event.addListener(geolocation, 'error', onError);

        function onComplete (data) {
          // data是具体的定位信息 精准的定位
          console.log('精准的定位');
          console.log(data);
          self.$store.dispatch("setLocation", data);
          self.$store.dispatch("setAddress", data.formattedAddress);
        }

        function onError (data) {
          //获取不到是 通过IP查出定位
          self.getLngAndLatLocation()
        }
      })
    },
    //IP定位
    getLngAndLatLocation() {
      const self = this;
      AMap.plugin('AMap.CitySearch', function () {
        let citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            console.log(result);

            //通过查询出来的IP和精度维度进行 逆向地理编码方法
            AMap.plugin('AMap.Geocoder', function() {
              let geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode
              });

              let lnglat = result.rectangle.split(";")[0].split(",");
              geocoder.getAddress(lnglat, function(status, data) {
                if (status === 'complete' && data.info === 'OK') {
                  // data为对应的地理位置详细信息
                  console.log("IP定位");
                  self.$store.dispatch("setLocation", {
                    addressComponent: {
                      city: result.city,
                      province: result.province
                    },
                    formattedAddress: data.regeocode.formattedAddress
                  });
                  self.$store.dispatch("setAddress", data.regeocode.formattedAddress);
                }
              })
            })
          }
        })
      })
    }
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return this.$store.getters.location.addressComponent.city || this.$store.getters.location.addressComponent.province || false;
    },
      gettersLocation() {
        return this.$store.getters.location
      }
  },
  watch: {
    gettersLocation(val) {
        let { addressComponent } = val || {};
        if (addressComponent.city || addressComponent.province) {
            this.addressView = true
        }else {
            this.addressView = false
        }
    }
  },
  created() {
    this.getLocation()
  }
}
</script>

<style>
  .home {
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
  }
  .header {
    background-color: #009eef;
    padding: 16px;
  }
  .header .address_map {
    color: #fff;
    font-weight: bold;
  }
  .address_map i {
    margin: 0 3px;
    font-size: 18px;
  }
  .address_map span {
    display: inline-block;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .header .shop_search {
    margin-top: 10px;
    background-color: #fff;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    color: #aaa;
  }
</style>
