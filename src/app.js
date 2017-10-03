import {app} from 'hyperapp'
import {actions} from './actions/'
import {state} from './state/'
import {root} from './root/'
import {view} from './views/'
import {events} from './events/'
import {registerWorker} from './utils/register-worker'

app({
  actions,
  state,
  root,
  view,
  events
})

registerWorker()
