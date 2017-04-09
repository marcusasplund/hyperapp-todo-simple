/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const RemoveButton = (props) =>
  <button
    class='button button-small button-outline'
    data-uuid={props.id}
    onclick={e => props.actions.remove(e)}>x
  </button>
