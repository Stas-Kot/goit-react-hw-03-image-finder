import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  api_KEY = '21750958-271f4873848cc9d3a2fe2c382';

  state = {
    gallery: null,
    error: null,
    page: 1,
    per_page: 12,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { per_page } = this.state;
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;
    if (prevQuery !== newQuery) {
      this.setState({ status: 'pending', gallery: null });
      fetch(
        `https://pixabay.com/api/?q=${newQuery}&page=1&key=${this.api_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No results were found for your query: ${newQuery}`),
          );
        })
        .then(({ hits }) =>
          this.setState({ gallery: hits, status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { gallery, error, status } = this.state;

    if (status === 'pending') {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList>
            {gallery.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            ))}
          </ImageGalleryList>
          <Button />
        </>
      );
    }

    return (
      <>
        {/* {error && <h1>{error.message}</h1>}
        {loader && <div>LOADING...</div>}
        {gallery && (
          <ImageGalleryList>
            {gallery.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            ))}
          </ImageGalleryList>
        )} */}
      </>
    );
  }
}
