import {ERROR_POSTS, GET_POSTS, LOADING_POSTS} from "./actionTypes";

export const get_posts = (data) => ({
    type: GET_POSTS,
    payload: data
})

export const loading_posts = () => ({
    type: LOADING_POSTS
})

export const error_posts = (error) => ({
    type: ERROR_POSTS,
    payload: error.toString()
})