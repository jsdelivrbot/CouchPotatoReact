import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TvShowList from './components/tvshow-list';
import TvShow from './components/tv-show';
import SearchTvShow from './components/search-tvshow';
import LoginForm from './components/login-page';
import FavoriteView from './components/favorite-view'


export const routes = (

    <Route path = "/" component = {App}>
        <IndexRoute component = { TvShowList } />
        <Route path = "/shows/:id" component = { TvShow } />
        <Route path ="/search" component = { SearchTvShow } />
        <Route path ="/login" component = { LoginForm } />
        <Route path ="/favorites" component = { FavoriteView } />
    </Route>

);
