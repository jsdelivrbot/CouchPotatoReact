import axios from 'axios';
const ROOT_URL = 'http://api.tvmaze.com/'
const COUNTRY = 'us'

export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';
export const FETCH_TVSHOW = 'FETCH_TVSHOW';
export const FETCH_SEASONS = 'FETCH_SEASONS';
export const SELECT_SEASON = 'SELECT_SEASON';
export const SEARCH_TVSHOW = 'SEARCH_TVSHOW';

export function fetchSchedule(){
    const request = axios.get(`${ROOT_URL}schedule?country=${COUNTRY}`);
    return {
        type:FETCH_SCHEDULE,
        payload:request
    };
}

export function fetchTvShow(id){
    const request = axios.get(`${ROOT_URL}shows/${id}`);

    return {
        type: FETCH_TVSHOW,
        payload:request
    };
}

export function fetchSeasons(id){
    const request = axios.get(`${ROOT_URL}shows/${id}/episodes`)

    return {
        type: FETCH_SEASONS,
        payload: request
    };
}

export function selectSeason(id){
    return {
        type: SELECT_SEASON,
        payload: id
    }
}

export function searchTvShow(searchTerm){
    const request = axios.get(`${ROOT_URL}search/shows?q=${searchTerm}`);

    return{
        type: SEARCH_TVSHOW,
        payload: request
    }
}
