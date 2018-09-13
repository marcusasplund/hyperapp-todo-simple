import { addTodo } from './add-todo'
import { removeTodo } from './remove-todo'
import { toggleTodo } from './toggle-todo'
import { editTodo } from './edit-todo'

export const actions = {
  add: () => state => ({
    input: '',
    todos: addTodo(state)
  }),
  input: (value) => state => ({
    input: value
  }),
  remove: (e) => state => ({
    todos: removeTodo(state, e)
  }),
  toggle: (e) => state => ({
    todos: toggleTodo(state, e)
  }),
  edit: (e) => state => ({
    todos: editTodo(state, e)
  }),
  editEnter: (e) => state => {
    e.preventDefault()
    e.target.blur()
  }
}
