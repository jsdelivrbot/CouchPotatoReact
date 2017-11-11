import { combineReducers } from 'redux';
import TvShowReducer from './reducer_tvshows';

const rootReducer = combineReducers({
  shows: TvShowReducer
});

export default rootReducer;
