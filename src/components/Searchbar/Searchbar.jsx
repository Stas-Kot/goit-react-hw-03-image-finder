import React, { Component } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  Form,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInput = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSearch = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Enter a search word!');
      return;
    }
    this.props.handleSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSearch}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.handleInput}
            value={this.state.searchQuery}
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
