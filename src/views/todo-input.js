/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const TodoInput = (props) =>
  <div class='row'>
    <input
      type='text'
      onkeyup={e => e.keyCode === 13 && e.target.value !== '' ? props.actions.add() : null}
      oninput={e => props.actions.input({value: e.target.value})}
      value={props.model.input}
      placeholder={props.model.placeholder} />
  </div>
