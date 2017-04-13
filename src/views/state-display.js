/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const StateDisplay = ({state}) =>
  <pre>
    <code>
      {JSON.stringify(state, null, 2)}
    </code>
  </pre>
