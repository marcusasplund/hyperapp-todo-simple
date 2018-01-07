/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const RemoveButton = ({id, actions}) => (
  <button
    aria-label='Remove'
    class='button button-small button-outline'
    data-uuid={id}
    onclick={actions.remove}>x
  </button>
)
