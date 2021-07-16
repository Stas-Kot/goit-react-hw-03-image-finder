import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Spinner, SpinnerBottom } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

export default class ImageGallery extends Component {
  api_KEY = '21750958-271f4873848cc9d3a2fe2c382';

  state = {
    gallery: null,
    error: null,
    page: 1,
    per_page: 12,
    status: 'idle',
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { per_page, page } = this.state;
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;
    if (prevQuery !== newQuery) {
      this.setState({ status: 'pending', gallery: null });
      fetch(
        `https://pixabay.com/api/?q=${newQuery}&page=${page}&key=${this.api_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No results were found for your query: ${newQuery}`),
          );
        })
        .then(({ hits }) => {
          if (hits.length === 0) {
            toast.error(`No results were found for your query: ${newQuery}`);
            this.setState({ status: 'idle' });
          } else {
            this.props.onNewFetch(hits);
            this.setState({ gallery: hits, status: 'resolved' });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    const prevPage = prevState.page;
    const newPage = this.state.page;
    if (prevPage !== newPage) {
      this.setState({ status: 'pendingMore' });
      fetch(
        `https://pixabay.com/api/?q=${newQuery}&page=${page}&key=${this.api_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No more results were found for: ${newQuery}`),
          );
        })
        .then(({ hits }) => {
          if (hits.length === 0) {
            toast.error(`No more results were found for: ${newQuery}`);
            return;
          }
          this.props.onLoadMoreFetch(hits);
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { gallery, error, status } = this.state;

    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return <Spinner />;
    }

    if (status === 'pendingMore') {
      return <SpinnerBottom />;
    }

    if (status === 'rejected') {
      toast.error(`${error.message}`);
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList>
            {gallery.map(({ id, webformatURL, tags }, index) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                openModal={this.props.handleModal}
                activeImgIndex={() => this.props.handeleActiveIdx(index)}
              />
            ))}
          </ImageGalleryList>
          <Button onClick={this.onLoadMore} />
        </>
      );
    }
  }
}
