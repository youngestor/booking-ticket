import { legacy_createStore as createStore } from 'redux'
import { persistStore } from 'redux-persist'
import reducer from './reducers'

const reduxStore = createStore(reducer)

export const persistor = persistStore(reduxStore)

export default reduxStore
