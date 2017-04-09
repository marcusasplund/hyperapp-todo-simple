/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const ModelDisplay = (props) =>
  <pre>
    <code>
      {JSON.stringify(props.model, null, 2)}
    </code>
  </pre>
