/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'

const ToggleTodo = (state, e) => {
  const items = state.items.map(t => e.target.dataset.uuid === t.id ? { ...t, ...{ done: !t.done } } : t)
  const newState = { ...state, ...{ items: items } }
  storeStateInStorage(newState)
  return newState
}

export const ToggleButton = ({ id }) => (
  <button
    aria-label='Toggle'
    class='button button-small button-outline'
    data-uuid={id}
    onClick={ToggleTodo}
  >✓
  </button>
)
