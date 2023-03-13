import actionTypes from './actionTypes'

export const addCart = item => ({
    type: actionTypes.ADD_CART,
    item
})

export const deleteCart = item => ({
    type: actionTypes.DELETE_CART,
    item
})
