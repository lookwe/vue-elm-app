<template>
    <div class="me" @click="toPd" v-color="'#80D63F'">我的
     {{ msg | toTest('123','456') }}
        <br>
        {{ text1 | capitalize }}
        <hr>

        <!-- 下面是单个元素。如需要给for循环出来的元素都设置动画需要使用  transition-group 包裹for循环的元素-->
        <!-- appear 设置元素初始进入动画 -->
        <!-- tag 设置在页面渲染成什么标签 为了符合w3c规定  默认span -->
        <transition
                appear
                tag="div"
                @before-enter="beforeEn"
                @enter="enter"
                @after-enter="afterEn"
        >
            <div class="codel" v-show="flay">

            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: 'Me',
        filters: {
            toTest(val,agm,agm2) {
                return val + agm + agm2
            }
        },
        data() {
            return {
                msg: "天泽无限少年",
                text1: "huang",
                flay: false,
            }
        },

        methods: {
            toPd() {
                this.flay = !this.flay;
            },

            beforeEn(el) {
                /*
                * translate 设置位置
                *  第一参数 纵坐标 (竖线=y轴) ____
                *  第二参数 横坐标 (横线=x轴)  \
                *
                * */
                el.style.transform = "translate(0, 0)";
            },

            enter(el, deon) {
                el.offsetWidth;
                el.style.transform = "translate(150px, 30rem)";
                el.style.transition = "all 1s ease";
                deon()
            },

            afterEn(el) {
                el.style.opacity = 0.5;
                this.flay = !this.flay;
            }

        }
    }
</script>

<style scoped>
.codel {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: firebrick;
}
</style>
