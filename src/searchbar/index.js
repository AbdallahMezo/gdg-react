import React, { Component } from 'react'
import { TextField, TextFieldIcon } from '@rmwc/textfield';
import './searchbar.css'


class SearchBar extends Component {
  render () {
    return (
      <TextField
        label="Search for weather with city name..."
        className='search-bar'
        onKeyPress={this.props.search}
        withTrailingIcon={
          <TextFieldIcon
            tabIndex="0"
            icon="close"
            onClick={this.props.toggleSearchBar}
          />
        }
      />
    )
  }
}

export default SearchBar
