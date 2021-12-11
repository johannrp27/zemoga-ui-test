import axios from 'axios';

/*
  Uncomment next line if you want to serve over network to check
  the web on your phone instead Google DevTools Responsive

  Start the Backend server with the same IP Adress as well.
*/

// const BASE_URL = 'http://192.168.1.12:8089/api/v1/poll';
const BASE_URL = 'http://localhost:8089/api/v1/poll';

export default {

  async GET_CANDIDATES({ commit }) {
    try {
      const { data } = await axios.get(`${BASE_URL}/get`);
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
      context.dispatch('GET_CANDIDATES');
      return data;
    } catch (e) {
      return e;
    }
  },

};
