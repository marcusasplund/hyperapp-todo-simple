/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { storeStateInStorage } from '../utils/local-storage'

export const StateDisplay = ({ state }) => (
  <pre>
    <code onupdate={storeStateInStorage(state)}>
      {JSON.stringify(state, null, 2)}
    </code>
  </pre>
)
