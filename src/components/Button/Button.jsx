import { LoadMoreBtn } from './Button.styled';

export default function Button() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return <LoadMoreBtn type="button">Load more</LoadMoreBtn>;
}
