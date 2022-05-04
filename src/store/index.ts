import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  getters: {
    getData(state) {
      return state.count;
    }
  },
  mutations: {
    inc(state, props) {
      state.count += props.step;
    },
    dec(state, props) {
      state.count -= props.step;
    }
  },
  actions: {
    decAction(context, props) {
      context.commit('dec', props);
    }
  },
  modules: {}
});
