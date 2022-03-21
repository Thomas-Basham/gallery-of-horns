import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeasts from './SelectedBeasts';
import MyForm from './MyForm';
import './Main.css';
// import { Container } from 'react-bootstrap';


class Main extends React.Component {
  
  render() {
    console.log(this.props.horns)
    let allBeasts = this.props.data;
    if (this.props.horns != null) {
      allBeasts = this.props.data.filter(filter => filter.horns === parseInt(this.props.horns));
      console.log(allBeasts);
    };
    console.log(allBeasts);
    
    let hornedBeasts = allBeasts.map((hornedBeast, index) =>

        <HornedBeast
        // className="container"
        image_url={hornedBeast.image_url}
        title={hornedBeast.title}
        description={hornedBeast.description}
        key={index}
        keyword={hornedBeast.keyword}
        horns={hornedBeast.horns}
        openModal={this.props.openModal}
        />
        )
      



      // let selectedBeasts = <SelectedBeasts />

      // let myForm = this.props.data.map((hornedBeast, index) => {
              
      //   return (
      //     <MyForm 
      //     horns={hornedBeast.horns}
      //     key={index}
      //     />
      //     )         
      //   })
     
    return (
      
      <main 
      className="d-flex flex-wrap"
      >
        
      <MyForm handleFormInput={this.props.handleFormInput} />
      
      <SelectedBeasts
        image_url={this.props.image_url}
        description= {this.props.description}
        isOpen={this.props.isOpen}
       />
        {/* {myForm} */}

        {hornedBeasts}
        

      {/* <HornedBeast title='Billy Goat' img imageURL="billy-goat.jpeg" alt='Billy Goat' imgTitle='billy goat' description= 'A nimble and fierce horned beast'/> */}
      
       </main>

    )
  }
}

export default Main;