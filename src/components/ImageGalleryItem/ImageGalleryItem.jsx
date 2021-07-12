import { GalleryItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ webformatURL, tags }) {
  return (
    <GalleryItem>
      <img src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}
