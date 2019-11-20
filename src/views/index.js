/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { HeaderView } from './header-view'
import { TodoList } from './todo-list'
import { TodoInput } from './todo-input'
import { TodoListDone } from './todo-list-done'
import { StateDisplay } from './state-display'

export const View = state =>
  <div class='container'>
    <HeaderView />
    <TodoInput state={state} />
    <TodoList items={state.items} />
    <hr />
    <TodoListDone items={state.items} />
    <StateDisplay state={state} />
  </div>
