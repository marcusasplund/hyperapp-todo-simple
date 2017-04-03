import {app} from 'hyperapp'
import {actions} from './actions'
import {model} from './model'
import {root} from './root'
import {view} from './view'
import {hooks} from './hooks'

app({
  actions,
  model,
  root,
  view,
  hooks
})
