/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { TodoItem } from './todo-item'

export const TodoListDone = ({ items }) => (
  <ul>
    {
      items && items.length > 0 &&
        <h3>done</h3>
    }
    {
      items && items.length > 0 &&
      items.filter(item => item.done)
        .map(item => <TodoItem key={item.id} item={item} />)
    }
  </ul>

)
