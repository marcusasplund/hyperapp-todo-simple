/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const ToggleButton = ({id, actions}) =>
  <button
    class='button button-small button-outline'
    data-uuid={id}
    onclick={e => actions.toggle(e)}>✓
  </button>
