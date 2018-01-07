/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const TodoInput = ({state, actions}) => (
  <div class='row'>
    <input
      type='text'
      aria-label={state.placeholder}
      onkeyup={({target: {value}, keyCode}) => keyCode === 13 && value !== '' ? actions.add() : null}
      oninput={({target: {value}}) => actions.input(value)}
      value={state.input}
      placeholder={state.placeholder} />
  </div>
)
