const getTodosFromStorage = () =>
  JSON.parse(window.localStorage.getItem('todos'))

const setTodosInStorage = (todos) =>
  window.localStorage.setItem('todos', JSON.stringify(todos))

export {getTodosFromStorage, setTodosInStorage}
