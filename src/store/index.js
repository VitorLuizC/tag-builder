import Vue from 'vue'
import Vuex from 'vuex'
import createId from 'uuid/v1'
import * as types from './types.js'

Vue.use(Vuex)

const generateDefaultTag = () => ({
  id: '',
  link: '',
  date: '',
  UTMI: '',
  UTM: {
    source: '',
    medium: '',
    campaign: ''
  }
})

export default new Vuex.Store({
  state: {
    tag: generateDefaultTag(),
    tags: []
  },
  getters: {
    [types.TAG_DATA](state) {
      return state.tag
    },
    [types.TAGS_DATA](state) {
      return state.tags
    }
  },
  mutations: {
    [types.TAG_CHANGE](state, payload) {
      state.tag = payload
    },
    [types.TAGS_CHANGE](state, payload) {
      state.tags = payload
    }
  },
  actions: {
    [types.TAGS_INSERT]({ commit, getters }, payload) {
      const tags = getters[types.TAGS_DATA]

      const tag = {
        ...getters[types.TAG_DATA],
        id: createId()
      }

      commit(types.TAGS_CHANGE, [ ...tags, tag ])
      commit(types.TAG_CHANGE, generateDefaultTag())
    },
    [types.TAGS_DELETE]({ commit, getters }, payload) {
      const tags = getters[types.TAGS_DATA]

      commit(types.TAGS_CHANGE, tags.filter(tag => tag.id !== payload))
    },
    [types.TAGS_UPDATE]({ commit, getters }, payload) {
      const tags = getters[types.TAGS_DATA]

      commit(types.TAG_CHANGE, tags.find(tag => tag.id === payload))
      commit(types.TAGS_CHANGE, tags.filter(tag => tag.id !== payload))
    }
  }
})
