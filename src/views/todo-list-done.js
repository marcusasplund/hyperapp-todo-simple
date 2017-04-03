import {h} from 'hyperapp'
import {todoItem} from '../views/todo-item'

export const todoListDone = (model, actions) =>
  <div id='todo-list-done'>
    {
      model.todos
        .filter(todo => todo.done)
        .map(todo => todoItem(todo, actions))
    }
  </div>
