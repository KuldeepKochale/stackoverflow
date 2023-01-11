import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (dispatch) => {  // since we are using redux-thunk that's why we have to use an extra arrow function for the async
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data })  // this will go to the auth.js file in reducers
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
export const login = (authData, navigate) => async (dispatch) => {  // since we are using redux-thunk that's why we have to use an extra arrow function for the async
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })  // this will go to the auth.js file in reducers
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}