import { h, memo } from 'hyperapp'
import { HeaderView } from './header-view'
import { TodoList } from './todo-list'
import { TodoInput } from './todo-input'
import { TodoListDone } from './todo-list-done'
import { StateDisplay } from './state-display'

export const View = state =>
  h('div', { class: 'container' }, [
    memo(HeaderView, {}),
    memo(TodoInput, { state }),
    memo(TodoList, { items: state.items }),
    h('hr', {}),
    memo(TodoListDone, { items: state.items }),
    memo(StateDisplay, { state })
  ])
