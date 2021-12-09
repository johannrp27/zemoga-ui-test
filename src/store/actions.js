import data from './data.json';

const BASE_URL = data;

export default {

  GET_CANDIDATES({ commit }) {
    const candidates = BASE_URL.data;
    commit('SET_CANDIDATES', candidates);
    return candidates;
  },

};
