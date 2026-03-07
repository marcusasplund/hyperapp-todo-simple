import { app } from 'hyperapp'
import { getStateFromStorage } from './utils/local-storage'
import { View } from './views/index'
import 'milligram'
import './styles/app.css'

const defaultState = {
  items: [],
  value: '',
  placeholder: 'Add new todo'
}

const getInitialState = () => ({
  ...defaultState,
  ...(getStateFromStorage() || {})
})

app({
  init: getInitialState(),
  view: View,
  node: document.getElementById('todo')
})
