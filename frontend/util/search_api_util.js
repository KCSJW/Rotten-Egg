export const fetchAllDBMovies = () => (
    $.ajax({
        method: 'GET',
        url: `api/movies/`
    })
);

export const fetchDBMovie = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/movies/${id}`
    })
);
