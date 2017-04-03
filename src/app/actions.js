import {addTodo} from '../actions/add-todo'
import {removeTodo} from '../actions/remove-todo'
import {toggleTodo} from '../actions/toggle-todo'
import {editTodo} from '../actions/edit-todo'

export const actions = {
  add: model => ({
    input: '',
    todos: addTodo(model)
  }),
  input: (model, {value}) => ({
    input: value
  }),
  remove: (model, e) => ({
    todos: removeTodo(model, e)
  }),
  toggle: (model, e) => ({
    todos: toggleTodo(model, e)
  }),
  edit: (model, e) => ({
    todos: editTodo(model, e)
  }),
  editEnter: (model, e) => {
    e.target.blur()
  }
}
