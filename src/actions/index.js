import {addTodo} from './add-todo'
import {removeTodo} from './remove-todo'
import {toggleTodo} from './toggle-todo'
import {editTodo} from './edit-todo'

export const actions = {
  add: state => ({
    input: '',
    todos: addTodo(state)
  }),
  input: (state, {value}) => ({
    input: value
  }),
  remove: (state, e) => ({
    todos: removeTodo(state, e)
  }),
  toggle: (state, e) => ({
    todos: toggleTodo(state, e)
  }),
  edit: (state, e) => ({
    todos: editTodo(state, e)
  }),
  editEnter: (state, e) => {
    e.target.blur()
  }
}
