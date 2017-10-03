import {getStateFromStorage} from '../utils/local-storage'

export const state = getStateFromStorage() || {
  input: '',
  placeholder: 'Add new todo',
  todos: []
}
