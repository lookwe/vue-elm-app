import Vue from 'vue'
//如需要经常使用转换或者处理文本情况 即可在全局定义过滤 当全局和私有重名那私有优先


/**
 * capitalize 首字母大写
 *
 */
Vue.filter("capitalize", function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1)
});