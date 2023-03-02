import actionTypes from './actionTypes'

export const loginSuccess = userInfo => ({
    type: actionTypes.LOGIN_SUCCESS,
    userInfo,
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})
