import { call, put, takeEvery, fork, all } from 'redux-saga/effects';
import axios from 'axios';
const ROOT_URL = 'http://api.tvmaze.com/'
const COUNTRY = 'us'

function* fetchSchedule(){
    const SCHEDULE_URL = `${ROOT_URL}schedule?=${COUNTRY}`
    try{
        const data = yield call(axios.get, SCHEDULE_URL);
        yield put({type: "FETCH_SCHEDULE", payload : data})
    }catch(error){

    }
}

function* fetchTvShow({ id }){
    const TVSHOW_URL = `${ROOT_URL}shows/${id}`
    try{
        const data = yield call(axios.get, TVSHOW_URL);
        yield put({ type: "FETCH_TVSHOW", payload : data });
    }catch(error){

    }
}

function* fetchSeasons({ id }){
    const SEASONS_URL = `${ROOT_URL}shows/${id}/episodes`
    try{
        const data = yield call(axios.get, SEASONS_URL);
        yield put({ type: "FETCH_SEASONS", payload : data })
    }catch(error){

    }
}

function* selectSeason({ id }){
    yield put({ type: "SELECT_SEASON", payload: id });
}

function* searchTvShow({ searchTerm }){
    const SEARCH_URL = `${ROOT_URL}search/shows?q=${searchTerm}`;
    try{
        const data = yield call(axios.get, SEARCH_URL);
        yield put({ type: "SEARCH_TVSHOW", payload: data });
    }catch(error){

    }
}


export default function* rootSaga(){
    yield all([
        takeEvery('FETCH_SCHEDULE_REQUESTED', fetchSchedule),
        takeEvery('FETCH_TVSHOW_REQUESTED', fetchTvShow),
        takeEvery('FETCH_SEASONS_REQUESTED', fetchSeasons),
        takeEvery('SELECT_SEASON_REQUESTED', selectSeason),
        takeEvery('SEARCH_TVSHOW_REQUESTED', searchTvShow)
    ]);

}
