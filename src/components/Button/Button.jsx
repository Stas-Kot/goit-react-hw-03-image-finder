import { LoadMoreBtn } from './Button.styled';

export default function Button({ onClick }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <LoadMoreBtn onClick={onClick} type="button">
      Load more
    </LoadMoreBtn>
  );
}
