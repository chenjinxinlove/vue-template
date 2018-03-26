import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {test}) {
  commit(types.SET_TEST, test)
}