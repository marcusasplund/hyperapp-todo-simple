import {setTodosInStorage} from '../utils/local-storage'

export const hooks = {
  onUpdate: (oldModel, newModel, data) =>
    setTodosInStorage(newModel.todos)
}
