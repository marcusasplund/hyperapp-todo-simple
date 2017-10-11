/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const TodoInput = ({state, actions}) =>
  <div class='row'>
    <input
      type='text'
      aria-label={state.placeholder}
      onkeyup={e => e.keyCode === 13 && e.target.value !== '' ? actions.add() : null}
      oninput={actions.input}
      value={state.input}
      placeholder={state.placeholder} />
  </div>
