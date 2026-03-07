import { h, memo, text } from 'hyperapp'
import { TodoItem } from './todo-item'

export const TodoList = ({ items }) => {
  const todoItems = (items || []).filter(item => !item.done)

  return h('ul', {}, [
    items && items.length > 0 ? h('h3', {}, text('todo')) : null,
    ...todoItems.map(item => memo(TodoItem, { item, key: item.id }))
  ])
}
