<template>
    <div class="me" v-color="'#80D63F'">我的
     {{ msg | toTest('123','456') }}
        <br>
        {{ text1 | capitalize }}
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
                text1: "huang"
            }
        },
    }
</script>

<style scoped>

</style>
