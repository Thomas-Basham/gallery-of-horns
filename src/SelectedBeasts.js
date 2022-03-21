import React from 'react';
import { Modal, Button } from 'react-bootstrap'
// import HornedBeast from './HornedBeast';


class SelectedBeasts extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isOpen: false 
  //   }
  // }
  // state = { isOpen: false };

  // openModal = () => this.setState({ isOpen: true });

  // closeModal = () => this.setState({ isOpen: false });


  render() {
    return (
<> 
<Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.props.isOpen} >
  <Modal.Header >
    <Modal.Title> <img src={this.props.image_url} alt={this.props.alt}  width="100%" height="auto"></img></Modal.Title>
  </Modal.Header>
  <Modal.Body> {this.props.description} </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={this.props.closeModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
</>
      )
  }
}

export default SelectedBeasts;