import {getTodosFromStorage} from '../utils/local-storage'

export const model = {
  input: '',
  placeholder: 'Add new todo',
  todos: getTodosFromStorage() || []
}
