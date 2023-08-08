import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  it('renders the children when open prop is true', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal open={true} onClose={onCloseMock}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toBeInTheDocument();
  });

  it('does not render the children when open prop is false', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal open={false} onClose={onCloseMock}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalContent = screen.queryByTestId('modal-content');
    expect(modalContent).toBeNull();
  });

  it('calls the onClose function when clicked outside the modal', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal open={true} onClose={onCloseMock}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalBackground = screen.getByTestId('modal-background');
    fireEvent.click(modalBackground);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not call the onClose function when clicked inside the modal', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal open={true} onClose={onCloseMock}>
        <div data-testid="modal-content">
          Modal Content
          <button data-testid="close-button" onClick={(e) => e.stopPropagation()}>
            Close
          </button>
        </div>
      </Modal>
    );

    const modalContent = screen.getByTestId('modal-content');
    fireEvent.click(modalContent);

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('calls the onClose function when the close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal open={true} onClose={onCloseMock}>
        <div data-testid="modal-content">
          Modal Content
          <button data-testid="close-button" onClick={onCloseMock}>
            Close
          </button>
        </div>
      </Modal>
    );

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
