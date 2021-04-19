import { GET_MY_ACCOUNT } from '~/schema/queries/user'
import env from '~/env'

export const state = () => ({
  user: {},
  bookmarks: {
    booksID: []
  }
})

export const getters = {
  user: (state) => state.user,
  auth: (state) => !(!state.user || Object.keys(state.user).length === 0)
}

// mutations
export const mutations = {
  SET_USER(state, data) {
    state.user = data
    if (data.bookmarks) {
      state.bookmarks = data.bookmarks
    }
  }
}

export const actions = {
  async getMyAccount({ commit, dispatch }) {
    try {
      const {
        data: { getMyAccount }
      } = await this.app.apolloProvider.defaultClient.query({
        query: GET_MY_ACCOUNT
      })
      dispatch('setUser', getMyAccount)
    } catch (e) {
      // reload để thực hiện các thay đổi
      dispatch('logOut')
    }
  },
  setUser({ commit }, user) {
    commit('SET_USER', user)
  },
  async logOut({ commit }) {
    await this.app.$apolloHelpers.onLogout()
    if (process.browser) {
      window.location.href = env.LOGOUT_URL + '?returnUrl=' + document.URL
    }
  }
}
