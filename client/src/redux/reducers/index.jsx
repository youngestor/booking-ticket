import { combineReducers } from 'redux'
import userReducer from './userReducer'
import cartReducer from './cartReducer'

const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

export default reducer
