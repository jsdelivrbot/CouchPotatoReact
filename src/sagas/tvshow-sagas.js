import { call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { TVSHOW_CONST, TVSHOW_REQUEST_CONST } from '../constants/actionTypes/actiontypes';
import axios from 'axios';
// import { handleLoginSubmit, handleLoginRequest, handleLogoutRequest, initial_auth } from './auth-saga';
const ROOT_URL = 'http://api.tvmaze.com/';
const COUNTRY = 'us';

function* fetchSchedule(){
    const SCHEDULE_URL = `${ROOT_URL}schedule?=${COUNTRY}`
    try{
        const data = yield call(axios.get, SCHEDULE_URL);
        yield put({type: TVSHOW_CONST.FETCH_SCHEDULE, payload : data})
    }catch(error){

    }
}

function* fetchTvShow({ id }){
    const TVSHOW_URL = `${ROOT_URL}shows/${id}`
    try{
        const data = yield call(axios.get, TVSHOW_URL);
        yield put({ type: TVSHOW_CONST.FETCH_TVSHOW, payload : data });
    }catch(error){

    }
}

function* fetchSeasons({ id }){
    const SEASONS_URL = `${ROOT_URL}shows/${id}/episodes`
    try{
        const data = yield call(axios.get, SEASONS_URL);
        yield put({ type: TVSHOW_CONST.FETCH_SEASONS, payload : data })
    }catch(error){

    }
}

function* selectSeason({ id }){
    yield put({ type: TVSHOW_CONST.SELECT_SEASON, payload: id });
}

function* searchTvShow({ searchTerm }){
    const SEARCH_URL = `${ROOT_URL}search/shows?q=${searchTerm}`;
    try{
        const data = yield call(axios.get, SEARCH_URL);
        yield put({ type: TVSHOW_CONST.SEARCH_TVSHOW, payload: data });
    }catch(error){

    }
}



export const tvshowSagas = [
        takeEvery(TVSHOW_REQUEST_CONST.FETCH_SCHEDULE_REQUESTED, fetchSchedule),
        takeLatest(TVSHOW_REQUEST_CONST.FETCH_TVSHOW_REQUESTED, fetchTvShow),
        takeEvery(TVSHOW_REQUEST_CONST.FETCH_SEASONS_REQUESTED, fetchSeasons),
        takeEvery(TVSHOW_REQUEST_CONST.SELECT_SEASON_REQUESTED, selectSeason),
        takeEvery(TVSHOW_REQUEST_CONST.SEARCH_TVSHOW_REQUESTED, searchTvShow),
];
