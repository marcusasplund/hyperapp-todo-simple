const getStateFromStorage = () =>
  JSON.parse(window.localStorage.getItem('todoapp8'))

const storeStateInStorage = (state) =>
  window.localStorage.setItem('todoapp8', JSON.stringify(state))

export {getStateFromStorage, storeStateInStorage}
