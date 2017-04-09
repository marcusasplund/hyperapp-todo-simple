/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {HeaderView} from './header-view'
import {TodoList} from './todo-list'
import {TodoInput} from './todo-input'
import {TodoListDone} from './todo-list-done'
import {ModelDisplay} from './model-display'

export const todoMain = (model, actions) =>
  <div class='container'>
    <HeaderView />
    <TodoList model={model} actions={actions} />
    <TodoInput model={model} actions={actions} />
    <TodoListDone model={model} actions={actions} />
    <ModelDisplay model={model} />
  </div>
