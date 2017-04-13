import {app} from 'hyperapp'
import {actions} from './actions'
import {state} from './state'
import {root} from './root'
import {view} from './view'
import {events} from './events'

app({
  actions,
  state,
  root,
  view,
  events
})
