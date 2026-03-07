import { h, text } from 'hyperapp'

export const StateDisplay = ({ state }) =>
  h('pre', {}, h('code', {}, text(JSON.stringify(state, null, 2))))
