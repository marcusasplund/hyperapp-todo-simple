import { h, text } from 'hyperapp'

export const HeaderView = () =>
  h('header', {}, [
    h('h2', {}, text('todo app')),
    h('p', {}, [
      h('em', {}, h('small', {}, text('tap text to edit todo'))),
      text(' '),
      h(
        'a',
        { href: 'https://github.com/marcusasplund/hyperapp-todo-simple/' },
        h('small', {}, text('source'))
      )
    ])
  ])
