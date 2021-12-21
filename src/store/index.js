import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    selectedPost: {},
  },
  mutations: {
    UPDATE_BLOGPOSTS(state, data) {
      state.posts = data;
    },
    SELECT_POST(state, data) {
      state.selectedPost = data;
    },
  },
  actions: {},
  getters: {
    post(state) {
      return state.posts;
    },
    selectedPost(state) {
      return state.selectedPost;
    },
  },
  modules: {},
});
