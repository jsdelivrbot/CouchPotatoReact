import { tvshowSagas } from './tvshow-sagas';
import { authSagas } from './auth-saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        ...tvshowSagas,
        ...authSagas,
    ]);
}
