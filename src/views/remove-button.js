import {h} from 'hyperapp'

export const removeButton = (actions, id) =>
  <button class='button button-small button-outline' data-uuid={id} onclick={e => actions.remove(e)}>x
  </button>
