import {h} from 'hyperapp'
import {removeButton} from '../views/remove-button'
import {toggleButton} from '../views/toggle-button'

export const todoItem = (todo, actions) =>
  <div class='item row'>
    <div class='column column-15'>
      {removeButton(actions, todo.id)}
      {toggleButton(actions, todo.id)}
    </div>
    <div
      class={todo.done ? 'done column column-85' : 'column column-85'}
      contenteditable
      data-uuid={todo.id}
      oninput={e => (todo.value = e.target.textContent)}
      onblur={e => actions.edit(e)}>
      {todo.value}
    </div>
  </div>
