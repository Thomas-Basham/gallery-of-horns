import React from 'react';
import { Card, Modal, Button, CardGroup } from 'react-bootstrap'
// import SelectedBeasts from './SelectedBeasts';

// import Button from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0,

    }
  }

handleFavorites = () => this.setState({favorites: this.state.favorites + 1});

// state = {isOpen: false};

openModal = () => this.setState({ isOpen: true });
closeModal = () => this.setState({ isOpen: false });

handleOpenModal = () => {this.props.openModal()}

  render() {
    return (
      <>  
<Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.isOpen} >
  <Modal.Header >
    <Modal.Title> <img src={this.props.image_url} alt={this.props.alt}  width="100%" height="auto"></img></Modal.Title>
  </Modal.Header>
  <Modal.Body> {this.props.description} </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={this.closeModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
      <CardGroup className="flex-wrap">
      <Card  className="card text-center h-100" style={{ width: '16rem'}}>
  <Card.Img className="h-100" onClick={this.openModal} variant="top" src={this.props.image_url} alt={this.props.alt} width="150rem" height="150rem"/>
  <Card.Body className="h-100">
    <Card.Title >{this.props.title}</Card.Title>
    <Card.Text className="bg-image hover-zoom" onClick={this.handleFavorites}  style={{ hover: 'cu'}}>
    {this.props.description}
    <br></br>
    {this.state.favorites} 😍
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
</CardGroup>


        {/* <article>
        <h2>{this.props.title}</h2>

        <img 

        onClick={this.handleFavorites}
        src={this.props.image_url} 
        alt={this.props.alt} 
        title={this.props.imgTitle} 
       width='200' 
        height='200' 

        >{this.props.image}</img>

        <p>{this.props.description}</p>

      <p>{this.state.favorites} 😍</p>
      <p horns={this.props.horns}> 😍</p>



        </article> */}
        
      </>
      
      
      
      )
    }
  }


export default HornedBeast;