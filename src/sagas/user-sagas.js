import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { startSubmit, stopSubmit } from 'redux-form';
import { localStorage } from '../index';
import { browserHistory } from 'react-router';

const LOCAL_API = 'http://127.0.0.1:5000/users';


function setLocalStorageItem(item){
    console.log("SETTING LOCAL STORAGE ITEM")
    localStorage.setItem('user', JSON.stringify(item));
}

export default function* loginUser({user}){
    yield put(startSubmit('myForm'))
    let errors = {}
    try{
        const params = { username: user.username, password: user.password }
        const data = yield call(axios.post, LOCAL_API, params);
        const retrivedUser = { username :data.data.username, password : data.data.password }
        setLocalStorageItem(retrivedUser)
        yield put({ type:'LOGIN_USER_SUCCESS', payload:data })
        browserHistory.push('/');
    }catch(error){
        errors = error;
        yield put({ type:'LOGIN_USER_FAILURE', payload: errors });
    }
    yield put(stopSubmit('myForm', errors));
}
