import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'

const EditTodo = (state, event) => {
  const items = state.items.map(item =>
    event.target.dataset.uuid === item.id
      ? { ...item, editing: !item.editing }
      : item
  )

  const newState = { ...state, items }
  storeStateInStorage(newState)
  return newState
}

export const EditButton = ({ id }) =>
  h('button', {
    'aria-label': 'Edit',
    class: 'button button-small button-outline edit',
    'data-uuid': id,
    onclick: EditTodo
  })
