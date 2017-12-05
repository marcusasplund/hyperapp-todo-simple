import {addTodo} from './add-todo'
import {removeTodo} from './remove-todo'
import {toggleTodo} from './toggle-todo'
import {editTodo} from './edit-todo'

export const actions = {
  add: todos => state => addTodo(state),
  input: value => state => ({
    input: value
  }),
  remove: e => state => actions => ({
    todos: removeTodo(state, e)
  }),
  toggle: e => state => actions => ({
    todos: toggleTodo(state, e)
  }),
  edit: e => state => actions => ({
    todos: editTodo(state, e)
  }),
  editEnter: e => state => actions => {
    e.preventDefault()
    e.target.blur()
  }
}
