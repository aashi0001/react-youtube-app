import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
    }
    render() {
        return (
            <div className="search-bar">
              <input
                  value = {this.state.term}
                  onChange={this.onInputChange}/>
                {/*<input onChange={this.onInputChange.bind(this)}/>*//* ES 5 Syntax */ }
            </div>
        );
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
        this.props.onSearchTermChange(this.state.term);
    }
    // This is non Fat Arrow ie ES5 way of declaring a function beware to use bind with it.
    // onInputChange(event){
    //     this.setState({term: event.target.value})
    // }
}

export default SearchBar;