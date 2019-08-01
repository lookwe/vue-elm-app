<template>
    <div class="text_group">
        <!-- 组件容器 -->
        <div :class="['input_group',{ 'is-invalid': error }]">
            <input
                :type="type"
                :name="name"
                :value="value"
                :placeholder="placeholder"
                @input="$emit('input', $event.target.value)"
            >
            <!-- 输入框后面的标签 -->
            <button v-if="btnConfig.btnTitle" :disabled="btnConfig.disabled" @click="$emit('inputBtnClick')">{{ btnConfig.btnTitle }}</button>
        </div>
        <!-- 错误提示 -->
        <div v-if="error" class="invalid-feedback">{{ error }}</div>
    </div>
</template>

<script>
    export default {
        name: "inputGroup",
        props: {
            type: {
                type:String,
                default: "text"
            },
            value: String,
            name: String,
            placeholder: String,
            error: String,
            btnConfig:{
                //是否必填
                required: false,
                type: Object,
                default: () => {
                    return {
                        btnTitle: "",
                        disabled: false,
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .input_group {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .input_group input {
        height: 100%;
        width: 60%;
        outline: none;
        border:none;
    }
    .input_group button {
        border: none;
        outline: none;
        background: #fff;
    }
    .input_group button[disabled] {
        color: #aaa;
    }
    .is-invalid {
        border: 1px solid #C53929;
    }
    .invalid-feedback {
        color: #C53929;
        padding-top: 5px;
    }
</style>

