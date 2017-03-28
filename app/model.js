import {getTodosFromStorage} from '../utils/local-storage'

const model = {
  input: '',
  placeholder: 'Add new todo',
  todos: getTodosFromStorage() || []
}

export {model}
