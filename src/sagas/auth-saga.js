import axios from 'axios';
import { take, put, call, race, fork} from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../constants/actionTypes/actiontypes';
import { loginRequest, loginError, loginSuccess, initialAuth, logoutSuccessfull} from '../actions/actions';
import { startSubmit, stopSubmit } from 'redux-form';
import { browserHistory } from 'react-router';
import { localStorage } from '../index';

const LOCAL_API = 'http://127.0.0.1:5000/auth';


export function* handleLoginSubmit(){
    while(true){
        const { payload } = yield take(LOGIN_ACTIONS.LOGIN_SUBMIT);
        yield put(startSubmit("myForm"));

        yield put (loginRequest(payload));
        const { error, success } = yield race({
            success: take(LOGIN_ACTIONS.LOGIN_SUCCESS),
            error: take(LOGIN_ACTIONS.LOGIN_ERROR)
        });

        if(!error){
            let { data } = success.payload;
            data = JSON.stringify(data.user);
            localStorage.setItem('currUser', data)
            yield put(stopSubmit("myForm"));
            browserHistory.push('/');

        }else{
            console.log(error.payload.response.request.statusText)
            yield put(stopSubmit("myForm", error.payload.response.request.statusText));
        }
    }
}

export function* handleLoginRequest(){
    while(true){
        try{
            const { payload }  = yield take(LOGIN_ACTIONS.LOGIN_REQUEST);
            const user = yield call(axios.post, LOCAL_API, payload);
            yield put(loginSuccess(user));
        }catch(e){
            yield put(loginError(e))
        }
    }
}

export function* checkAuthStatus(){
    const user = localStorage.getItem('currUser');
    if(user !== null){
        yield put(initialAuth(user));
    }
}

export function* handleLogoutRequest(){
    while(true){
        yield take(LOGIN_ACTIONS.LOGOUT_REQUESTED)
        localStorage.removeItem('currUser');
        yield put(logoutSuccessfull());
    }
}


export const authSagas = [
        fork(handleLoginSubmit),
        fork(handleLoginRequest),
        fork(handleLogoutRequest),
        checkAuthStatus(),
];
