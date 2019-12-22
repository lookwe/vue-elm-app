// types 同统一方法名 方面一起修改维护
const types = {
    SET_LOCATION: 'SET_LOCATION',
    SET_ADDRESS: 'SET_ADDRESS'
};

// state 存放APP里的数据
const state = {
    location: {},
    address: ''
};

//提供原始可直接修改 Vuex存储的数据 对内提供的操作数据方法
const mutations = {
    [types.SET_LOCATION](state, location) {
        if (location) {
            state.location = location
        }else {
            state.location = null
        }
    },
    [types.SET_ADDRESS](state, address) {
        if (address) {
            state.address = address
        }else {
            state.address = ""
        }
    }
};

//支持异步的代理修改Vuex值 对外提供开发方法。 就是调用提供的内部方法 commit是自带参数
const actions = {
    setLocation({ commit }, location) {
        console.log(commit);
        commit(types.SET_LOCATION, location)
    },
    setAddress: ({ commit }, address) => {
        commit(types.SET_ADDRESS, address);
    }
};

export default {
    state,
    mutations,
    actions
}