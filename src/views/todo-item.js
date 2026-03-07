import { h, memo, text } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'
import { RemoveButton } from './remove-button'
import { ToggleButton } from './toggle-button'
import { EditButton } from './edit-button'

const EditedTodo = (state, event) => {
  const items = state.items.map(item =>
    event.target.dataset.uuid === item.id
      ? { ...item, editing: false, value: event.target.value }
      : item
  )

  const newState = { ...state, items }
  storeStateInStorage(newState)
  return newState
}

const EditingItem = ({ item }) =>
  h('input', {
    'data-uuid': item.id,
    onblur: EditedTodo,
    value: item.value,
    onkeydown: (state, event) => {
      if (event.keyCode === 13) {
        return EditedTodo(state, event)
      }

      return state
    }
  })

const Item = ({ item }) =>
  h(
    'span',
    {
      class: item.done ? 'done right' : 'right',
      'data-uuid': item.id
    },
    text(item.value)
  )

export const TodoItem = ({ item }) =>
  h('li', {}, [
    memo(RemoveButton, { id: item.id }),
    memo(ToggleButton, { id: item.id }),
    memo(EditButton, { id: item.id }),
    item.editing ? memo(EditingItem, { item }) : memo(Item, { item })
  ])
