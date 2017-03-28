import {h} from 'hyperapp'

export const toggleButton = (actions, id) =>
  <button class='button button-small button-outline' data-uuid={id} onclick={e => actions.toggle(e)}>✓
  </button>
