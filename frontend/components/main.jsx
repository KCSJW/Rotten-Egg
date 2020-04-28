import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesIndexContainer from './movies/movies_index_container';
import MovieShowPageContainer from './movies/movie_show_container';

const Main = () => (
    <div className='main-page'>
        <Switch>
            <Route exact path="/movies/:movieId" component={MovieShowPageContainer} />
            <Route exact path="/" component={MoviesIndexContainer} />
        </Switch>
    </div>
);

export default Main;