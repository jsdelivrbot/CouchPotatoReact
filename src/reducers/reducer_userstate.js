import { LOGIN_ACTIONS, FAVORITES } from '../constants/actionTypes/actiontypes';

const INITIAL_STATE = {
    user: null,
    isLoggedIn: false,
    favorites: [],
}

export function user(state = INITIAL_STATE, action){
    if(!action) return state;

    switch(action.type){
        case LOGIN_ACTIONS.LOGIN_SUCCESS:
            return Object.assign({}, state, { user : action.payload.data }, { isLoggedIn : true });
        case LOGIN_ACTIONS.INITIAL_AUTH:
            return Object.assign({}, state, { user : action.payload }, { isLoggedIn : true });
        case LOGIN_ACTIONS.LOGOUT_SUCCESS:
            return Object.assign({}, state, INITIAL_STATE);
        case FAVORITES.ADD_FAVORITE:
            console.log(action.payload)
            return { ...state, favorites : [...state.favorites, action.payload ]}
        default:
            return state
    }
}

/*
    Need to consider if I do need this reducer at all
*/

export function auth(state = null, action){
    if(!action) return state;

    switch(action.type){
        case LOGIN_ACTIONS.LOGIN_SUCCESS:
            return action.payload.data
        // case LOGIN_ACTIONS.LOGIN_ERROR:
        //     console.log(action.payload)
        //     return state
        case LOGIN_ACTIONS.LOGOUT_SUCCESSFULL:
            return null;
        default:
            return state;

    }
}
