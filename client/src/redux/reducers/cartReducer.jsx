import actionTypes from '../actions/actionTypes'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initState = {
    cartAt: []
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART:
            const idCart = state.cartAt.find(
                p => p._id === action.item._id
            )
            if (!idCart)
                return {
                    ...state,
                    cartAt: [...state.cartAt, action.item]
                }
            else {
                let newCart = state.cartAt
                const objIndex = newCart.findIndex(
                    obj => obj._id === action.item._id
                )
                if (newCart[objIndex].quantity === undefined)
                    newCart[objIndex].quantity = 2
                else
                    newCart[objIndex].quantity = newCart[objIndex].quantity + 1
                return {
                    ...state,
                    cartAt: [...newCart]
                }
            }
        case actionTypes.DELETE_CART:
            let newCart = state.cartAt
            const objIndex = newCart.findIndex(
                obj => obj._id === action.item._id
            )
            newCart.splice(objIndex, 1)
            return {
                ...state,
                cartAt: [...newCart]
            }
        default:
            return state
    }
}

const persistConfig = {
    key: 'cart',
    storage,
    whitelist: ['cartAt']
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export default persistedReducer
