const state = {
  chatStatus: false,
  currentSession: null,
  sessions: []
}

const getters = {
  sessions (state) {
    return state.sessions
  },
  currentSession (state) {
    return state.currentSession
  },
  chatStatus (state) {
    return state.chatStatus
  }
}

const mutations = {
  setCurrentSession (state, session) {
    state.currentSession = session
  },
  setChatStatus (state, status) {
    state.chatStatus = status
  }
}

export default {
  state,
  getters,
  mutations
}
