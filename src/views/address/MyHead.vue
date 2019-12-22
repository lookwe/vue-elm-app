<template>
    <!-- 全局公告头部提示页面组件 -->
    <div class="header">
        <!-- 左侧返回 -->
        <div class="header-button is-left" v-show="isLeft">
            <i class="fa fa-chevron-left" @click="$router.go(-1)"></i>
        </div>
        <!-- 中间标题 -->
        <h1 class="header-title">{{ title }}</h1>

        <!-- 左侧添加收获地址 -->
        <div class="header-button is-right" v-if="isRight">
            新增地址
        </div>
    </div>
</template>

<script>
    export default {
        name: "myHead",
        props: {
            title: String,
            isLeft: {
                type: Boolean,
                default: false,
                required: false
            },
            isRight: {
                type: Boolean,
                default: false,
                required: false
            }
        },
    }
</script>

<style scoped>
    .header {
        align-items: center;
        background-color: #009eef;
        box-sizing: border-box;
        color: #fff;
        display: flex;
        font-size: 16px;
        height: 45px;
        line-height: 1;
        padding: 0 10px;
        text-align: center;
        white-space: nowrap;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
    }

    .header-button button {
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: inherit;
        display: inline-block;
        padding: 0;
        font-size: inherit;
        outline: none;
    }
    .header-title {
        flex: 1;
    }
    .is-left {
        text-align: left;
    }
    .is-right {
        text-align: right;
    }

</style>