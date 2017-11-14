import { combineReducers } from 'redux';
import TvShowReducer from './reducer_tvshows';
import UserReducer from './reducer_userstate';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    shows: TvShowReducer,
    user: UserReducer,
});

export default rootReducer;
