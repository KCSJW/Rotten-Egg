import React, {useState} from 'react';

function MovieItem({icon, rating, title, poster}) {

    const [hidden, setHidden] = useState(true);

    return(
        <li className="movie-list-outeritem">

            <div className="movie-list-item" onClick={(e) => setHidden(false)} >
                <img src={icon} className="list-icon" />
                <div className="list-score">{rating}</div>
                <div className="list-text">{title}</div>
            </div>

            <div className="poster" onClick={(e) => setHidden(true)}>
                {!hidden && <img src={`https://image.tmdb.org/t/p/original${poster}`} />}
            </div>

        </li>
    );
};

export default MovieItem;