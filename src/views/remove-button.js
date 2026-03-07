import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'

const RemoveTodo = (state, event) => {
  const items = state.items.filter(item => event.target.dataset.uuid !== item.id)
  const newState = { ...state, items }
  storeStateInStorage(newState)
  return newState
}

export const RemoveButton = ({ id }) =>
  h('button', {
    'aria-label': 'Remove',
    class: 'button button-small button-outline delete',
    'data-uuid': id,
    onclick: RemoveTodo
  })
