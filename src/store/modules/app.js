// types
const types = {
    SET_LOCATION: 'SET_LOCATION',
    SET_ADDRESS: 'SET_ADDRESS'
};

// state
const state = {
    location: {},
    address: ''
};

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
            state.location = address
        }else {
            state.address = ""
        }
    }
};

const actions = {
    setLocation({ commit }, location) {
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