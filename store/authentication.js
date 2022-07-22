const state = () => ({
  showLoader: Boolean,
  profile:{}

});

const mutations = {
  ["AUTHENTICATE"](state) {
    state.showLoader = true;
  },
  ["AUTHENTICATE_FAILED"](state) {
    state.showLoader = false;
  },
  ["AUTHENTICATE_ERROR"](state) {
    state.showLoader = false;
  },
  ["AUTHENTICATE_SUCCESS"](state, payload) {
    state.showLoader = false;
    state.profile = payload;
  },

}
const actions = {
  async _authenticate({ commit }, requestbody) {
    commit("AUTHENTICATE");
    await this.$api.$get('authentication', requestbody)
      .then(response => {
        commit("AUTHENTICATE_SUCCESS", response);
      }).catch(error => {
        commit("AUTHENTICATE_ERROR");
        console.log(error);
      });

  },

  async logout({ commit }) {},
}
const getters = {
  
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}