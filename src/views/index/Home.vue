<template>
  <div class="home">主页</div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    getLocation() {
      const seif = this;
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
          console.log(data);
        }

        function onError (data) {
          //获取不到是 通过IP查出定位
          seif.getLngAndLatLocation()
        }
      })
    },
    getLngAndLatLocation() {
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
                  console.log(data);
                }
              })
            })
          }
        })
      })
    }

  },
  created() {
    this.getLocation()
  }
}
</script>

<style>

</style>
