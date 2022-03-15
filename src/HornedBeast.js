import React from 'react';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0,
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
        onClick={this.state.favorites}// need to add state and favorti
        src={this.props.image_url} 
        alt={this.props.alt} 
        title={this.props.imgTitle} 
        width='200' 
        height='200'
        >{this.props.image}</img>
        <p>{this.props.description}</p>
        </article>
      </>
      
      

    )
  }
}

export default HornedBeast;