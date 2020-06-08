/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { TodoItem } from './todo-item'

export const TodoList = ({ items }) => (
  <ul>
    {
      items && items.length > 0 &&
        <h3>todo</h3>
    }
    {
      items && items.length > 0 &&
      items.filter(item => !item.done)
        .map(item => <TodoItem key={item.id} item={item} />)
    }
  </ul>
)
