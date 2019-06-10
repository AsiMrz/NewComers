import React from 'react';
import {Button, Modal, ModalBody} from 'reactstrap';
import BigCard from './BigCard';
import MdZoomOutMap from 'react-icons/lib/md/zoom-out-map';

class PopUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    return (
      <div>
        <MdZoomOutMap onClick={this.toggle} size={50} color='#ee8989' />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalBody onClick={this.toggle}>
            <BigCard />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default PopUpButton;
