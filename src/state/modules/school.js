import axios from 'axios'

const baseURL = `https://home277-dev-ed.my.salesforce.com`
const ApiVersion = 'v49.0'

export const state = {}
export const getters = {}
export const mutations = {}

export const actions = {
  async triggerFlow({ commit }, { API, data }) {
    try {
      const res = await axios({
        method: 'post',
        url: `${baseURL}/services/data/${ApiVersion}/actions/custom/flow/${API}`,
        data,
      })
      const result = res.data
      return result
    } catch (error) {
      throw errorHandler(error)
    }
  },
}

async function errorHandler(error) {
  return error.message ? error.message : error
}
