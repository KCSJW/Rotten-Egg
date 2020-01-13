import React from 'react';
import {searchMovies} from '../../util/search_api_util';
import SearchResult from './search_results';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "", searchResults: []};
        this.handleInput = this.handleInput.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    componentDidMount() {
        this.props.getAllDBMovies();
    }

    handleInput(e) {
        this.setState({ text: e.currentTarget.value });
    }

    resetSearch(e) {
        this.setState({ text: "" });
    }

    render(){
        let searchResults;
        if (this.state.text === '') {
            searchResults = [];
        } else {
            searchResults = searchMovies(this.props.movies, this.state.text).map((movie, i) => {
                return <SearchResult 
                            resetSearch={this.resetSearch}
                            movie={movie.movies.title} key={i}
                            requestMovie={this.props.requestMovie}/>
            })
        };

        return (
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search for Movies"
                    className="search-bar"
                    onChange={this.handleInput}
                    value={this.state.text} />
                <ul className="search-dropdown">
                    {searchResults}
                </ul>
            </div>
        )
    }
};

export default SearchBar;