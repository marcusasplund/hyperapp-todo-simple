/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const ToggleButton = ({id, actions}) => (
  <button
    aria-label='Toggle'
    class='button button-small button-outline'
    data-uuid={id}
    onclick={actions.toggle}>✓
  </button>
)
