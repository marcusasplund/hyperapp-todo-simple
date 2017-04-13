import {getTodosFromStorage} from '../utils/local-storage'

export const state = {
  input: '',
  placeholder: 'Add new todo',
  todos: getTodosFromStorage() || []
}
