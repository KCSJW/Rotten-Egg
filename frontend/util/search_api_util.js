// export const searchMovies = (movies, searchText) => {
//     return (
//         movies.filter((movie) => {
//             return movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
//         })
//     );
// };

export const fetchAllDBMovies = () => (
    $.ajax({
        method: 'GET',
        url: `api/movies/`
    })
);