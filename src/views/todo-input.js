/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { preventDefault, targetValue } from '@hyperapp/events'
import { storeStateInStorage } from '../utils/local-storage'
import { generateUUID } from '../utils/generate-uuid'

const newItem = value => ({
  value,
  editing: false,
  done: false,
  id: generateUUID()
})

const NewValue = (state, value) => {
  const newState = { ...state, value }
  storeStateInStorage(newState)
  return newState
}

const Add = state => {
  if (state.value.length === 0) {
    return state
  } else {
    const newState = {
      ...state,
      value: '',
      items: state.items.concat(newItem(state.value))
    }
    storeStateInStorage(newState)
    return newState
  }
}

export const TodoInput = ({ state }) => (
  <form
    onSubmit={preventDefault(Add)}
  >
    <input
      type='text'
      placeholder={state.placeholder}
      aria-label={state.placeholder}
      value={state.value}
      onInput={[NewValue, targetValue]}
    />
    <button>
      {`New #${state.items.length + 1}`}
    </button>
  </form>)
