import { TVSHOW_CONST as types } from '../constants/actionTypes/actiontypes';

const INITIAL_STATE = {
    activeTvShow: null,
    TvShows: [],
    seasons: {},
    selectedSeason: null,
    searchResult : []
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case types.FETCH_SCHEDULE:
            if(state.selectedSeason !== null){
                return Object.assign({}, state, { selectedSeason : null }, { activeSeason: null })
            }
            return { ...state, TvShows: action.payload.data };
        case types.FETCH_TVSHOW:
            return { ...state, activeTvShow: action.payload.data };
        case types.FETCH_SEASONS:
            if(action.payload.data.length === 0)
                return { ...state, seasons : {} };

            const firstSeason = action.payload.data[0].season;
            const lastSeason = action.payload.data[action.payload.data.length - 1].season;
            if(lastSeason - firstSeason > 1000)
                return {...state, seasons : {}};

            const newSeasons = {}
            for(let i = firstSeason; i < lastSeason + 1; i++){
                newSeasons[i] = []
            }
            action.payload.data.forEach((episode) => {
                newSeasons[episode.season].push(episode)
            });

            return { ...state, seasons: newSeasons };

        case types.SELECT_SEASON:
            const activeSeason = state.seasons[action.payload];
            return Object.assign({}, state, {selectedSeason: activeSeason})
        case types.SEARCH_TVSHOW:
            return { ...state, searchResult: action.payload.data }
        default:
            return state
    }
}
