import {addTodo} from './add-todo'
import {removeTodo} from './remove-todo'
import {toggleTodo} from './toggle-todo'
import {editTodo} from './edit-todo'

export const actions = {
  add: state => ({
    input: '',
    todos: addTodo(state)
  }),
  input: (state, actions, e) => ({
    input: e.target.value
  }),
  remove: (state, actions, e) => ({
    todos: removeTodo(state, e)
  }),
  toggle: (state, actions, e) => ({
    todos: toggleTodo(state, e)
  }),
  edit: (state, actions, e) => ({
    todos: editTodo(state, e)
  }),
  editEnter: (state, actions, e) => {
    e.target.blur()
  }
}
