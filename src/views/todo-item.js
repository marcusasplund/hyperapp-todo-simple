/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {RemoveButton} from './remove-button'
import {ToggleButton} from './toggle-button'

export const TodoItem = (props) =>
  <div class='item row'>
    <div class='column column-15'>
      <RemoveButton actions={props.actions} id={props.todo.id} />
      <ToggleButton actions={props.actions} id={props.todo.id} />
    </div>
    <div
      class={props.todo.done ? 'done column column-85' : 'column column-85'}
      contenteditable
      data-uuid={props.todo.id}
      onkeyup={e => e.keyCode === 13 ? props.actions.editEnter(e) : null}
      oninput={e => (props.todo.value = e.target.textContent)}
      onblur={e => props.actions.edit(e)}>
      {props.todo.value}
    </div>
  </div>
