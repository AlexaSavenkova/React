import * as types from '../../actionTypes';
import {
    login_error,
    login_start,
    login_success, logout_error,
    logout_start, logout_success,
    register_error,
    register_start,
    register_success
} from "../../actions";
import {auth} from "../../../firebase";
const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
       case types.REGISTER_START:
       case types.LOGIN_START:
       case types.LOGOUT_START:
           return {
               ...state,
               loading: true
           }
       case types.REGISTER_SUCCESS:
       case types.LOGIN_SUCCESS:
           return {
               ...state,
               currentUser: action.payload,
               loading: false
           }
       case types.LOGOUT_SUCCESS:
           return {
               ...state,
               currentUser: null,
               loading: false
           }
       case types.REGISTER_ERROR:
       case types.LOGIN_ERROR:
       case types.LOGOUT_ERROR:
           return {
                ...state,
               error: action.payload,
               loading: false
            }
       default:
           return state;
   }
}

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(register_start())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile( {
                    displayName
                })
                dispatch(register_success(user))
            })
            .catch((err) => dispatch(register_error(err)))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(login_start())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login_success(user))
            })
            .catch((err) => dispatch(login_error(err)))
    }
}
export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logout_start())
        auth
            .signOut()
            .then((resp) => dispatch(logout_success()))
            .catch((err) => dispatch(logout_error(err)))
    }
}