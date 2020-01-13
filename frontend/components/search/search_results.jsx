import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ movie, resetSearch, requestMovie }) => (
    <div onClick={(e) => {
        requestMovie(movie.id);
        resetSearch();
        }} className="search-list-item">
        <Link to={`/movies/${movie.id}`} className="link-to-show" >{movie.title}</Link>
    </div>
);

export default SearchResult;