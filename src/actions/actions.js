import { TVSHOW_REQUEST_CONST } from '../constants/actionTypes/actiontypes';

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
