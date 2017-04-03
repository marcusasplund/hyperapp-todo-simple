import {h} from 'hyperapp'

export const todoInput = (model, actions) =>
  <div class='row'>
    <input
      type='text'
      onkeyup={e => e.keyCode === 13 && e.target.value !== '' ? actions.add() : null}
      oninput={e => actions.input({value: e.target.value})}
      value={model.input}
      placeholder={model.placeholder} />
  </div>
