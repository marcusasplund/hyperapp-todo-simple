/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {RemoveButton} from './remove-button'
import {ToggleButton} from './toggle-button'

export const TodoItem = ({actions, todo}) => (
  <div class='item row'>
    <div class='left'>
      <RemoveButton actions={actions} id={todo.id} />
      <ToggleButton actions={actions} id={todo.id} />
    </div>
    <div
      class={todo.done ? 'done right' : 'right'}
      // Prevent extra <div> elements inserted in contenteditable
      onclick={e => {
        if (!todo.done) {
          e.target.contentEditable = true
          e.target.focus()
        }
      }
    }
      onkeydown={e => {
        if (e.keyCode === 13) {
          e.target.contentEditable = false
          actions.editEnter(e)
        }
      }
    }
      data-uuid={todo.id}
      oninput={e => (todo.value = e.target.textContent || '')}
      onblur={e => actions.edit(e)}>
      {todo.value}
    </div>
  </div>
)
