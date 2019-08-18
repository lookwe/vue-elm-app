<template>
    <div class="index">
        <router-view></router-view>
        <tab-ber :dataTabs="dataTabs"></tab-ber>
    </div>
</template>

<script>
    import tabBer from '../../components/Tabbar'
    export default {
        name: "index",
        components: { tabBer },
        data: () => {
            return {
                dataTabs: [
                    { title: "首页", icon: "home", path: "/home" },
                    { title: "发现", icon: "compass", path: "/discover" },
                    { title: "订单", icon: "file-text-o", path: "/order" },
                    { title: "我的", icon: "user", path: "/me" }
                ]
            }
        }
    }
</script>

<style scoped>
.index {
    width: 100%;
    height: calc(100% - 45px);
}
</style>