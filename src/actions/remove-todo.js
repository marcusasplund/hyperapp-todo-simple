export const removeTodo = (state, e) =>
  state.todos.filter(t => e.target.dataset.uuid !== t.id)
