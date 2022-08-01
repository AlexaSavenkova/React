import * as types from './actionTypes';

export const get_posts = (data) => ({
    type: types.GET_POSTS,
    payload: data
})

export const loading_posts = () => ({
    type: types.LOADING_POSTS
})

export const error_posts = (error) => ({
    type: types.ERROR_POSTS,
    payload: error.toString()
})

export const register_start = () => ({
    type: types.REGISTER_START
})

export const register_success = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})
 export const register_error = (err) => ({
     type: types.REGISTER_ERROR,
     payload: err.toString()
 })

export const login_start = () => ({
    type: types.LOGIN_START
})

export const login_success = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})
export const login_error = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err.toString()
})

export const logout_start = () => ({
    type: types.LOGOUT_START
})

export const logout_success = () => ({
    type: types.LOGOUT_SUCCESS,
})

export const logout_error = (err) => ({
    type: types.LOGOUT_ERROR,
    payload: err.toString()
})
