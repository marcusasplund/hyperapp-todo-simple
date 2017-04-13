import {generateUUID} from '../utils/generate-uuid'

export const addTodo = (state) => state.todos.concat({
  done: false,
  id: generateUUID(),
  value: state.input
})
