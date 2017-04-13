/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {HeaderView} from './header-view'
import {TodoList} from './todo-list'
import {TodoInput} from './todo-input'
import {TodoListDone} from './todo-list-done'
import {StateDisplay} from './state-display'

export const TodoMain = ({state, actions}) =>
  <div class='container'>
    <HeaderView />
    <TodoList state={state} actions={actions} />
    <TodoInput state={state} actions={actions} />
    <TodoListDone state={state} actions={actions} />
    <StateDisplay state={state} />
  </div>
