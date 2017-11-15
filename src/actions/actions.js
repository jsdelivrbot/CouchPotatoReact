import { TVSHOW_REQUEST_CONST, LOGIN_ACTIONS, FAVORITES } from '../constants/actionTypes/actiontypes';

/*
TVSHOW ACTIONS
-----------------------------
*/

export function actionSchedule(){
    return{
        type: TVSHOW_REQUEST_CONST.FETCH_SCHEDULE_REQUESTED,
    }
}

export function actionTvShow(id){
    return{
        type:TVSHOW_REQUEST_CONST.FETCH_TVSHOW_REQUESTED,
        id
    }
}

export function actionSeasons(id){
    return{
        type:TVSHOW_REQUEST_CONST.FETCH_SEASONS_REQUESTED,
        id
    }
}

export function actionSelectSeason(id){
    return{
        type:TVSHOW_REQUEST_CONST.SELECT_SEASON_REQUESTED,
        id
    }
}

export function actionSearchTvShow(searchTerm){
    return{
        type:TVSHOW_REQUEST_CONST.SEARCH_TVSHOW_REQUESTED,
        searchTerm
    }
}

/*
LOGIN ACTIONS
-----------------------------
*/

export function loginSubmit(data){
    return{
        type:LOGIN_ACTIONS.LOGIN_SUBMIT,
        payload:data
    }
}

export function loginRequest(data){
    return{
        type:LOGIN_ACTIONS.LOGIN_REQUEST,
        payload:data
    }
}

export function loginError(error){
    return{
        type:LOGIN_ACTIONS.LOGIN_ERROR,
        payload: error
    }
}

export function loginSuccess(data){
    return{
        type:LOGIN_ACTIONS.LOGIN_SUCCESS,
        payload:data
    }
}

export function initialAuth(user){
    return {
        type: LOGIN_ACTIONS.INITIAL_AUTH,
        payload:user

    }
}

export function logoutRequest(){
    return {
        type: LOGIN_ACTIONS.LOGOUT_REQUESTED
    }
}

export function logoutSuccessfull(){
    return {
        type: LOGIN_ACTIONS.LOGOUT_SUCCESS
    }
}

export function addFavorite(id){
    return{
        type: FAVORITES.ADD_FAVORITE,
        payload:id
    }
}
