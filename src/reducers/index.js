import { combineReducers } from 'redux';
import { tvshowReducer } from './reducer_tvshows';
import { user, auth } from './reducer_userstate';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    user,
    auth,
    form: formReducer,
    shows: tvshowReducer,
});

export default rootReducer;
