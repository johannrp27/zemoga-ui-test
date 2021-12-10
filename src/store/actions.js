import axios from 'axios';

const BASE_URL = 'http://localhost:8083/api/v1/poll';

export default {

  async GET_CANDIDATES({ commit }) {
    try {
      const { data } = await axios.get(`${BASE_URL}/get`);
      console.log(data);
      commit('SET_CANDIDATES', data);
      return data;
    } catch (e) {
      return e;
    }
  },

  async VOTE_CANDIDATE(context, payload) {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}/vote/${payload.id}`,
        { vote: payload.vote },
      );
      console.log(data);
      context.dispatch('GET_CANDIDATES');
      return data;
    } catch (e) {
      return e;
    }
  },

};
