import {storeStateInStorage} from '../utils/local-storage'

export const events = {
  render: (state) =>
    storeStateInStorage(state)
}
