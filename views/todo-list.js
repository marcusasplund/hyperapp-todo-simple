import {h} from 'hyperapp'
import {todoItem} from '../views/todo-item'

export const todoList = (model, actions) =>
  <div id='todo-list'>
    {
      model.todos
        .filter(todo => !todo.done)
        .map(todo => todoItem(todo, actions))
    }
  </div>
