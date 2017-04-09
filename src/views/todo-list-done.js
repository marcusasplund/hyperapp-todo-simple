/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {TodoItem} from './todo-item'

export const TodoListDone = (props) =>
  <div id='todo-list-done'>
    {
      props.model.todos
        .filter(todo => todo.done)
        .map(todo => <TodoItem todo={todo} actions={props.actions} />)
    }
  </div>
