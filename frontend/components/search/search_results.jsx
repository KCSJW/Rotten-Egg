import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ movie, resetSearch, getMovie }) => (
    <div onClick={(e) => {
            getMovie(movie.id);
            resetSearch();
            }} className="search-list-item">
        <Link to={`/movies/${movie.id}`} className="link-to-movie">{movie.title}</Link>
    </div>
);

export default SearchResult;