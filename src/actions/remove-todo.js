export const removeTodo = (model, e) =>
  model.todos.filter(t => e.target.dataset.uuid !== t.id)
