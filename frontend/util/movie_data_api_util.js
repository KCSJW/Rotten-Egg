export const fetchAllMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?',
        dataType: 'json',
        data: {api_key: '78cf5b4e545acdb9a5957b2546b6f081'}
    })
);

export const fetchPlayingMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing?',
        dataType: 'json',
        data: { api_key: '78cf5b4e545acdb9a5957b2546b6f081' }
    })
);

export const fetchUpComingMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming?',
        dataType: 'json',
        data: { 
            api_key: '78cf5b4e545acdb9a5957b2546b6f081',
        }
    })
);

export const fetchTopRatedMovies = () => (
    $.ajax({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated?',
        dataType: 'json',
        data: { api_key: '78cf5b4e545acdb9a5957b2546b6f081' }
    })
);