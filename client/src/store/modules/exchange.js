import axios from 'axios'

export const exchange = {
  state: {
    rates: [],
  },
  mutations: {
    SET_RATES (state, payload) {
      const data = payload
      if (data.length) {
        delete data[0].id
        delete data[0].currentCurrency
      }
      state.rates = data
    },
    CHANGE_RATE (state, payload) {
      Object.keys(state.rates[0]).map((item) => {
        return state.rates[0][item] !== '' ? state.rates[0][item] > 0  ? parseFloat(state.rates[0][item] * payload).toFixed(2) : parseFloat(state.rates[0][item]).toFixed(2) : ''
      })
    }
  },
  actions: {
    async getRatesAction (context,payload) {
      try {
        const response = await axios.get(`/api/rates?filter=${payload}`)
        console.log(response.data)
        context.commit('SET_RATES', response.data)
        return response.data
      } catch (e) {
        console.log(e)
      }
    },
  },

  getters: {
    getRates: state => state.rates,
  }
}
