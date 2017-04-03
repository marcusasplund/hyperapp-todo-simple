import {h} from 'hyperapp'
import {todoInput} from '../views/todo-input'
import {todoList} from '../views/todo-list'
import {todoListDone} from '../views/todo-list-done'
import {modelDisplay} from '../views/model-display'

export const todoMain = (model, actions) =>
  <div class='container'>
    <h2>todo</h2>
    <p><em><small>tap text to edit todo</small></em> <a href='https://github.com/marcusasplund/hyperapp-todo-simple/'><small>source</small></a></p>
    {todoList(model, actions)}
    {todoInput(model, actions)}
    {todoListDone(model, actions)}
    {modelDisplay(model)}
  </div>
