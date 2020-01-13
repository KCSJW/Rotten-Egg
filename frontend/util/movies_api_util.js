
export const fetchAllMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?',
        dataType: 'json',
        data: {api_key: '78cf5b4e545acdb9a5957b2546b6f081'}
    })
);



export const fetchMovie = (id) => (
    $.ajax({
        method: 'get',
        url: `api/movies/${id}`
    })
);

