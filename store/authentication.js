const state = () => ({
  showLoader: Boolean,
  profile:{},
  client:null

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

  ["GET_CLIENT"](state) {
    state.showLoader = true;
  },
  ["GET_CLIENT_FAILED"](state) {
    state.showLoader = false;
  },
  ["GET_CLIENT_ERROR"](state) {
    state.showLoader = false;
  },
  ["GET_CLIENT_SUCCESS"](state, payload) {
    state.showLoader = false;
    state.client = payload.pageItems[0];
    this.$router.push('/');
  },

}
const actions = {
  async _authenticate({ commit,dispatch }, requestbody) {
    commit("AUTHENTICATE");
    await this.$api.$post('authentication', requestbody)
      .then(response => {
        commit("AUTHENTICATE_SUCCESS", response);
        dispatch("selfserviceclient",null,{root: true})
      }).catch(error => {
        console.log(error);
        commit("AUTHENTICATE_ERROR");
      });
  },
  async selfserviceclient({ commit }) {
    commit("GET_CLIENT");
    await this.$api.$get('clients')
      .then(response => {
        commit("GET_CLIENT_SUCCESS", response);
      }).catch(error => {
        console.log(error);
        commit("GET_CLIENT_ERROR");
      });

  },

  async _logoutsession({ commit }) {
    window.localStorage.clear();
    localStorage.removeItem('*');
    sessionStorage.clear();
    this.$router.push('/signin');
  },
}
const getters = {
  accessToken: function (state) {
    return state.profile.base64EncodedAuthenticationKey;
  },
  clientId:function(state){
    return state.client.id;
  },
  isAuthhenticated: function (state) {
    return state.profile.base64EncodedAuthenticationKey != null;
  },
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}