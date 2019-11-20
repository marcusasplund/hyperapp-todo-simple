/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'
import { RemoveButton } from './remove-button'
import { ToggleButton } from './toggle-button'

const EditTodo = (state, e) => {
  const items = state.items.map(t => e.target.dataset.uuid === t.id ? Object.assign({}, t, {
    value: e.target.textContent
  }) : t)
  const newState = { ...state, ...{ items: items } }
  storeStateInStorage(newState)
  return newState
}

export const TodoItem = ({ item }) => (
  <div class='item row'>
    <div class='left'>
      <RemoveButton id={item.id} />
      <ToggleButton id={item.id} />
    </div>
    <div
      class={item.done ? 'done right' : 'right'}
      // Prevent extra <div> elements inserted in contenteditable
      onClick={(state, event) => {
        if (!item.done) {
          event.target.contentEditable = true
          event.target.focus()
        }
        return state
      }}
      onKeyDown={(state, event) => {
        if (event.keyCode === 13) {
          event.target.contentEditable = false
        }
        return state
      }}
      data-uuid={item.id}
      onInput={EditTodo}
    >
      {item.value}
    </div>
  </div>
)
