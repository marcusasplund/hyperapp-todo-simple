import {app} from 'hyperapp'
import {actions} from './actions/'
import {state} from './state/'
import {view} from './views/'
import {registerWorker} from './utils/register-worker'

app({
  actions,
  state,
  view
},
  document.getElementById('todo')
)

registerWorker()
