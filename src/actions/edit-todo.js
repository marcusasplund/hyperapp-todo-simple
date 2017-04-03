export const editTodo = (model, e) =>
  model.todos.map(t => e.target.dataset.uuid === t.id ? Object.assign({}, t, {
    value: e.target.textContent
  }) : t)
