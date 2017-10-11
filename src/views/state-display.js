/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {storeStateInStorage} from '../utils/local-storage'

export const StateDisplay = ({state}) =>
  <pre onupdate={storeStateInStorage(state)}>
    <code>
      {JSON.stringify(state, null, 2)}
    </code>
  </pre>
