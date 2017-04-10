/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {TodoMain} from '../views/todo-main'

export const view = (model, actions) =>
  <TodoMain model={model} actions={actions} />
