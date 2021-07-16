import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from '@emotion/styled/macro';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    gallery: null,
    activeImgIdx: 0,
  };

  setActiveImgIdx = index => {
    this.setState({ activeImgIdx: index });
    this.toggleModal();
  };

  handleNewFetch = hits => {
    this.setState({ gallery: hits });
  };

  handleLoadMoreFetch = hits => {
    this.setState(prevState => ({
      gallery: [...prevState.gallery, ...hits],
    }));
  };

  onSubmit = query => {
    this.setState({ searchQuery: query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <Container>
        <Searchbar handleSubmit={this.onSubmit} />
        <ImageGallery
          query={this.state.searchQuery}
          handleModal={this.toggleModal}
          handeleActiveIdx={this.setActiveImgIdx}
          onNewFetch={this.handleNewFetch}
          onLoadMoreFetch={this.handleLoadMoreFetch}
        />
        <ToastContainer autoClose={3000} />
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={
              this.state.gallery[this.state.activeImgIdx].largeImageURL
            }
          />
        )}
      </Container>
    );
  }
}

export default App;
