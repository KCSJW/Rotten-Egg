
export const fetchAllMovies = () => (
    $.ajax({
        // method: 'get',
        // url: "api/movies"
        url: 'https://api.themoviedb.org/3/discover/movie?',
        //using Discover Movie endpoint
        method: 'GET',
        dataType: 'json',
        data: {
            api_key: '78cf5b4e545acdb9a5957b2546b6f081'
            // with_genres: genre,
            // sort_by: 'vote_average.desc',
            // 'primary_release_date.gte': '2014-01-01',
            // original_language: 'en',
            // 'vote_count.gte': 3000,
        }
    // }).then((data) => {
    //     // console.log(data.results);
    //     dispatch(setAllMovies(data))
    }));



export const fetchMovie = (id) => (
    $.ajax({
        method: 'get',
        url: `api/movies/${id}`
    })
);

