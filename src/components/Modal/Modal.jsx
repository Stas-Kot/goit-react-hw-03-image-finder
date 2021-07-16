import { IoCloseOutline } from 'react-icons/io5';
import { ModalDiv, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import IconButton from 'components/IconButton/IconButton';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalDiv>
          <IconButton onClick={this.props.onClose}>
            <IoCloseOutline />
          </IconButton>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalDiv>
      </Overlay>,
      modalRoot,
    );
  }
}
