/** @jsx h */
import { app } from 'hyperapp'
import { getStateFromStorage } from './utils/local-storage'
import { View } from './views/'
import './styles/app.scss'

const getInitialState = () => getStateFromStorage() || ({ items: [], value: '', placeholder: 'Add new todo' })

app({
  init: getInitialState(),
  view: View,
  node: document.getElementById('todo')
})
