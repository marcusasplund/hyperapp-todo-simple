/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'

const RemoveTodo = (state, e) => {
  const items = state.items.filter(t => e.target.dataset.uuid !== t.id)
  const newState = { ...state, ...{ items: items } }
  storeStateInStorage(newState)
  return newState
}

export const RemoveButton = ({ id }) => (
  <button
    aria-label='Remove'
    class='button button-small button-outline'
    data-uuid={id}
    onClick={RemoveTodo}
  >x
  </button>
)
