import React from 'react';
import SearchResult from './search_results';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "", searchResults: []};
        this.handleInput = this.handleInput.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
    }

    componentDidMount() {
        this.props.getAllDBMovies();
    }

    handleInput(e) {
        this.setState({ text: e.currentTarget.value });
    }

    resetSearch() {
        this.setState({ text: "" });
    }

    searchMovies (movies, text) {
        return (
            movies.filter((movie) => {
                return movie.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
        })
    )}

    render(){
        let searchResults;
        if (this.state.text === '') {
            searchResults = [];
        } else {
            searchResults = this.searchMovies(Object.values(this.props.dbMovies), this.state.text)
                .map((movie, i) => {
                    return <SearchResult 
                                getMovie={this.props.getDBMovie}
                                resetSearch={this.resetSearch}
                                movie={movie} key={i}
                            />
            })
        };

        return (
            <div className="search-bar-container">

                <input
                    type="text"
                    placeholder="Search for Movies"
                    className="search-bar"
                    onChange={this.handleInput}
                    value={this.state.text} 
                />

                <ul className="search-dropdown">
                    {searchResults}
                </ul>

            </div>
        )
    }
};

export default SearchBar;