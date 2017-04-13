import {setTodosInStorage} from '../utils/local-storage'

export const events = {
  onUpdate: (oldState, newState, data) =>
    setTodosInStorage(newState.todos)
}
