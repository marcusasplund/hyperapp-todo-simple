import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'

const ToggleTodo = (state, event) => {
  const items = state.items.map(item =>
    event.target.dataset.uuid === item.id
      ? { ...item, done: !item.done, editing: false }
      : item
  )

  const newState = { ...state, items }
  storeStateInStorage(newState)
  return newState
}

export const ToggleButton = ({ id }) =>
  h('button', {
    'aria-label': 'Toggle',
    class: 'button button-small button-outline check',
    'data-uuid': id,
    onclick: ToggleTodo
  })
