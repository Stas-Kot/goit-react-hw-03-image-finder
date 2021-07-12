import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from '@emotion/styled/macro';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

class App extends Component {
  state = {
    searchQuery: '',
    loader: false,
  };

  onSubmit = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Container>
        <Searchbar handleSubmit={this.onSubmit} />
        <ImageGallery query={this.state.searchQuery} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
