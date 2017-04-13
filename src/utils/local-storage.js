const getStateFromStorage = () =>
  JSON.parse(window.localStorage.getItem('todoapp'))

const storeStateInStorage = (state) =>
  window.localStorage.setItem('todoapp', JSON.stringify(state))

export {getStateFromStorage, storeStateInStorage}
