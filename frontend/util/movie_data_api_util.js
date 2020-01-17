export const fetchAllMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?',
        dataType: 'json',
        data: { api_key: window.tmdbAPIKey }
    })
);

export const fetchPlayingMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing?',
        dataType: 'json',
        data: { api_key: window.tmdbAPIKey }
    })
);

export const fetchUpComingMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming?',
        dataType: 'json',
        data: { api_key: window.tmdbAPIKey }
    })
);

export const fetchTopRatedMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated?',
        dataType: 'json',
        data: { api_key: window.tmdbAPIKey }
    })
);