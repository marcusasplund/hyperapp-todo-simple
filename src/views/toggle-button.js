/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const ToggleButton = (props) =>
  <button
    class='button button-small button-outline'
    data-uuid={props.id}
    onclick={e => props.actions.toggle(e)}>✓
  </button>
