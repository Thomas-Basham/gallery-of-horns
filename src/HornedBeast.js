import React from 'react';

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
        <article>
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
      {/* <p horns={this.props.horns}> 😍</p> */}



        </article>
      </>
      
      
      
      )
    }
  }


export default HornedBeast;