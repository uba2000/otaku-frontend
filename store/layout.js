export const state = () => ({
  showMobileNav: false
})

export const getters = {
  getIsMobileNav: state => state.showMobileNav
}

export const mutations = {
  setIsMobileNav(state) {
    state.showMobileNav = !state.showMobileNav
  }
}

export const actions = {
  toggleMobileNav({ commit }) {
    commit("setIsMobileNav")
  }
}