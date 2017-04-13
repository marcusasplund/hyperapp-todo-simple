export const toggleTodo = (state, e) =>
  state.todos.map(t => e.target.dataset.uuid === t.id ? Object.assign({}, t, {
    done: !t.done
  }) : t)
