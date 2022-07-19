import {ERROR_POSTS, GET_POSTS, LOADING_POSTS} from "../../actionTypes";
import {error_posts, get_posts, loading_posts} from "../../actions";

const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState  = {
    postList: [],
    loading: false,
    error: null
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_POSTS:
          return {
              ...state,
              postList: action.payload,
              loading: false
          }
      case LOADING_POSTS:
          return {
              ...state,
              loading: true
          }
      case ERROR_POSTS:
          return {
              ...state,
              error: action.payload,
              loading: false
          }
      default:
          return state;
  }
};

export const loadPosts = () => {
    return async (dispatch) => {
        dispatch(loading_posts());
        try {
            const response = await fetch(URL);
            const json = await response.json();
            dispatch(get_posts(json))
        } catch (error) {
            dispatch(error_posts(error))
        }
    }
}
