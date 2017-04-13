export const editTodo = (state, e) =>
  state.todos.map(t => e.target.dataset.uuid === t.id ? Object.assign({}, t, {
    value: e.target.textContent
  }) : t)
