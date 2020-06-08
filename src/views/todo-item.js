/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'
import { RemoveButton } from './remove-button'
import { ToggleButton } from './toggle-button'
import { EditButton } from './edit-button'

const EditedTodo = (state, e) => {
  const items = state.items.map(item => e.target.dataset.uuid === item.id ? {
    ...item,
    ...{
      editing: false,
      value: e.target.value
    }
  } : item)
  const newState = { ...state, ...{ items: items } }
  storeStateInStorage(newState)
  return newState
}

const EditingItem = ({ item }) => (
  <input
    data-uuid={item.id}
    onBlur={EditedTodo}
    value={item.value}
    onKeyDown={(state, event) => {
      if (event.keyCode === 13) {
        return EditedTodo(state, event)
      }
      return state
    }}
  />
)

const Item = ({ item }) => (
  <span
    class={item.done ? 'done right' : 'right'}
    data-uuid={item.id}
  >
    {item.value}
  </span>
)

export const TodoItem = ({ item }) => (
  <li>
    <RemoveButton id={item.id} />
    <ToggleButton id={item.id} />
    <EditButton id={item.id} />
    {
      item.editing
        ? <EditingItem item={item} />
        : <Item item={item} />
    }
  </li>
)
