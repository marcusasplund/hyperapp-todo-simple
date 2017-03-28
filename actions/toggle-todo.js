export const toggleTodo = (model, e) =>
  model.todos.map(t => e.target.dataset.uuid === t.id ? Object.assign({}, t, {
    done: !t.done
  }) : t)
