import React from 'react';
import { Card,CardGroup } from 'react-bootstrap'
// import Button from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0
    }
  }
handleFavorites = () => {
  this.setState({
    favorites: this.state.favorites + 1
  });
}
  render() {
    return (
      <>  
      {/* <Row className='row-cols-1 row-cols-md-2 g-4'></Row> */}

        <CardGroup >
      <Card  className="card text-center h-100" style={{ width: '18rem'}}>
  <Card.Img  onClick={this.handleFavorites} variant="top" src={this.props.image_url} alt={this.props.alt} width="200px" height="200px"/>
  <Card.Body className="h-100">
    <Card.Title >{this.props.title}</Card.Title>
    <Card.Text>
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