import {app} from 'hyperapp'
import {actions} from './actions/'
import {state} from './state/'
import {view} from './views/'

window.main = app(state, actions, view, document.getElementById('todo'))
