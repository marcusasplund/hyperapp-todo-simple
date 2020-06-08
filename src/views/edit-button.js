/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'

const EditTodo = (state, e) => {
  const items = state.items.map(item => e.target.dataset.uuid === item.id ? {
    ...item,
    ...{
      editing: !item.editing
    }
  } : item)
  const newState = { ...state, ...{ items: items } }
  storeStateInStorage(newState)
  return newState
}

export const EditButton = ({ id }) => (
  <button
    aria-label='Edit'
    class='button button-small button-outline edit'
    data-uuid={id}
    onClick={EditTodo}
  />
)
