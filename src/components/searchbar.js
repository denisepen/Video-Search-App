import React, { Component } from 'react';

  class SearchBar extends Component{
    constructor(props){
      super(props)

      this.state = {
        term: ''
      };
    }

    onInputChange = (e) => {
      // console.log(e.target.value)
      this.setState({
        term: e.target.value
      })
      console.log("state:", this.state);
    }

    render () {
      return(
        <div>
          <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} /><br/>
          Value of the Input: {this.state.term}
        </div>
      )
    }

    onInputChange = (term) => {
      this.setState({term});
      this.props.onSearchTermChange(term)
  }
}


export default SearchBar;

// Controlled component has its value set by state
// see the input value of this.state.term
// This is how to write this as a functional component
// const SearchBar = () => {
//   return <input />
// }
