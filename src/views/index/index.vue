<template>
    <!-- 登录之后首次展示页面 -->
    <div class="index">
        <div class="main">
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

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
.index>.main {
    overflow: hidden;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateX(140px);
}

.v-enter-active,
.v-leave-active {
    transition: all .5s ease;
}



</style>