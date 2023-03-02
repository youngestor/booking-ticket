import actionTypes from '../actions/actionTypes'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initState = {
    isLoggedIn: false,
    userInfo: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        default:
            return state
    }
}

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['isLoggedIn', 'userInfo']
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export default persistedReducer
