/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const modelDisplay = (model) =>
  <pre>
    <code>
      {JSON.stringify(model, null, 2)}
    </code>
  </pre>
