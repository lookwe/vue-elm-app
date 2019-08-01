<template>
    <div class="login">
        <div class="logo">
            <img src="../assets/images/logo.jpg" alt="logo">
        </div>

        <pro-input
             type="number"
             v-model="phone"
             placeholder="请输入电话"
             :btn-config="btnConfig"
             :error="errors.phone"
             @inputBtnClick="getVerifyCode"
        ></pro-input>

        <pro-input
                type="number"
                v-model="verifyCode"
                placeholder="输入验证码"
                :error="errors.verifyCode"
        ></pro-input>

        <!-- 用户服务协议 -->
        <div class="login_des">
            <p>
                新用户登录即自动注册，表示已同意
                <span>《用户服务协议》</span>
            </p>
        </div>

        <!-- 登录按钮 -->
        <div class="login_btn">
            <button :disabled="isClick" @click="handleLogin">登录</button>
        </div>

    </div>
</template>

<script>
    import { getAPIVerifyCode, login } from '../api/login'
    import proInput from '../components/input/InputGroup'
    export default {
        name: "Login",
        data() {
            return {
                btnConfig: {
                    disabled: false,
                    btnTitle: "获取验证码"
                },
                phone: "",
                verifyCode: "",
                errors:{
                    phone: "",
                    verifyCode: ""
                }
            }
        },
        components: { proInput },
        methods: {
            getVerifyCode() {
                if(this.validatePhone()) {
                    this.codeSuspend();
                    let params = {
                        tpl_id: "175920",
                        key: "d6aba21711d4c40eebfe00edd71b1a0a",
                        tpl_value: '%23code%23%3D654654',
                        phone: this.phone
                    };
                    getAPIVerifyCode(params).then(res => {
                        console.log(res);
                    }).catch(e => {
                        console.log(e);
                    })
                }else {
                    console.log(222);
                }
            },

            codeSuspend() {
                let time = 60;
                let timer = setInterval(() => {
                    if(time === 0) {
                        this.btnConfig = { disabled: false, btnTitle: "获取验证码" };
                        clearInterval(timer)
                    }else {
                        this.btnConfig = { disabled: true, btnTitle:time+ "秒回获取" };
                        time--;
                    }
                },1000)
            },

            //验证手机号码
            validatePhone() {
                if(!this.phone) {
                    this.errors.phone = "手机号不能为空";
                    return false
                }else if(!/^1[345678]\d{9}$/.test(this.phone)){
                    this.errors.phone = "手机格式不正确";
                    return false
                }else {
                    this.errors.phone = "";
                    return true
                }
            },

            handleLogin() {
                this.errors = {};
                login({phone: this.phone, code: this.verifyCode,}).then(res => {
                    if (res.msg.includes('成功')) {
                        localStorage.setItem('pro_toKen', 'true');
                        this.$router.push("/");
                    }
                }).catch(e => {
                    console.log(e);
                    this.errors = {
                        verifyCode: e.response.data.msg
                    }
                })
            }
        },
        //计算监听里面的值  只要值不变则不执行里面代码 取上一次结果返回， 如果值发生变化则重新计算返回
        computed: {
            isClick() {
                return (!this.phone || !this.verifyCode)
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        background: #fff;
    }
    .logo {
        text-align: center;
    }
    .logo img {
        width: 150px;
    }
    .text_group,
    .login_des
    {
        margin-top: 20px;
    }
    .login_des {
        color: #aaa;
        line-height: 22px;
        font-size: .9rem;
    }
    .login_des span {
        color: #4d90fe;
    }
    .login_btn button {
        width: 100%;
        height: 40px;
        background-color: #48ca38;
        border-radius: 4px;
        color: white;
        font-size: 14px;
        border: none;
        outline: none;
    }
    .login_btn button[disabled] {
        background-color: #8bda81;
    }
</style>