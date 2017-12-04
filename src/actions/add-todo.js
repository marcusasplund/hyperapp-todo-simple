import {generateUUID} from '../utils/generate-uuid'

export const addTodo = state => state.todos.push({
  done: false,
  id: generateUUID(),
  value: state.input
})
