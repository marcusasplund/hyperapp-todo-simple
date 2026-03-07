import { h, memo, text } from 'hyperapp'
import { TodoItem } from './todo-item'

export const TodoListDone = ({ items }) => {
  const doneItems = (items || []).filter(item => item.done)

  return h('ul', {}, [
    items && items.length > 0 ? h('h3', {}, text('done')) : null,
    ...doneItems.map(item => memo(TodoItem, { item, key: item.id }))
  ])
}
