<template>
    <div class="address">
        <!-- is-right 是否显示新增地址 -->
        <address-head :is-left="true" :is-right="true" title="添加收货地址"></address-head>

        <div class="city_search address-publc">
            <div class="search">
            <span class="city" @click="$router.push('/city')">
              {{ aCity2 }}
              <i class="fa fa-angle-down"></i>
            </span>
                <i class="fa fa-search"></i>
                <input type="text" v-model="searchVal" placeholder="小区/写字楼/学校等">
            </div>
        </div>

        <div class="address-content address-publc">
            <span class="address-content-title">当前位置</span>
            <div style="margin-top: 20px;clear:both;overflow: hidden">
                    <span class="float-l">
                        <i class="fa fa-location-arrow color-lan"></i> 模特大赛98层大厦
                    </span>

                <span class="color-lan float-r">
                        重新定位
                    </span>
            </div>
        </div>


        <div class="address-content address-publc">
            <span class="address-content-title">收货地址</span>
            <div style="height: 200px">

            </div>
        </div>

        <!--<div class="area">
            <ul class="area_list" v-for="(item,index) in areaList" :key="index">
                <li @click="selectAddress(item)">
                    <h4>{{item.name}}</h4>
                    <p>{{item.district}}{{item.address}}</p>
                </li>
            </ul>
        </div>-->
    </div>
</template>

<script>
    import addressHead from './MyHead'

    export default {
        name: "myAddress",
        components: {
            addressHead
        },
        data() {
            return {
                aCity: "深圳", //目前城市
                searchVal: '', //search
                areaList: [],
            }
        },
        methods: {
            selectAddress() {

            }
        },
        computed: {
            aCity2() {
                return this.$store.getters.location.addressComponent.city || this.$store.getters.location.addressComponent.province || "深圳"
            }
        },

    }
</script>

<style scoped>

    .address {
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
        padding-top: 45px;
    }

    .address-publc {
        background-color: #fff; color: #333;
    }
    .address-content {
        margin-bottom: 10px;
        padding: 15px 20px;
    }
    .address-content-title {
        font-size: .9rem;color: #999
    }

    .city_search {
        padding: 10px 20px;
        border-bottom: 1px solid #eee;
    }

    .search {
        background-color: #eee;
        height: 40px;
        border-radius: 10px;
        box-sizing: border-box;
        line-height: 40px;
    }

    .search .city {
        padding: 0 10px;
    }

    .city i {
        margin-right: 10px;
    }

    .search input {
        margin-left: 5px;
        background-color: #eee;
        outline: none;
        border: none;
    }

    .area {
        margin-top: 16px;
        background: #fff;
    }

    .area li {
        border-bottom: 1px solid #eee;
        padding: 8px 16px;
        color: #aaa;
    }

    .area li h4 {
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
    }

    .float-l {
        float: left;
    }
    .float-r {
        float: right;
    }
    .color-lan {
        color: #009eef;
    }
</style>