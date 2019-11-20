/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { TodoItem } from './todo-item'

export const TodoList = ({ items }) => (
  <div>
    {
      items && items.length > 0 &&
      items.filter(item => !item.done)
        .map(item => <TodoItem key={item.id} item={item} />)
    }
  </div>
)
