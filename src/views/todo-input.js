import { h, text } from 'hyperapp'
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
  if (state.value.length === 0) return state

  const newState = {
    ...state,
    value: '',
    items: state.items.concat(newItem(state.value))
  }

  storeStateInStorage(newState)
  return newState
}

const AddFromSubmit = (state, event) => {
  event.preventDefault()
  return Add(state)
}

const NewValueFromInput = (state, event) => NewValue(state, event.target.value)

export const TodoInput = ({ state }) => {
  const items = Array.isArray(state.items) ? state.items : []

  return h('form', { onsubmit: AddFromSubmit }, [
    h('input', {
      type: 'text',
      placeholder: state.placeholder,
      'aria-label': state.placeholder,
      value: state.value,
      oninput: NewValueFromInput
    }),
    h('button', { disabled: !state.value }, text(`New #${items.length + 1}`))
  ])
}
