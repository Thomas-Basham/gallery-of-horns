import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeasts from './SelectedBeasts';
import MyForm from './MyForm';
import './Main.css';
import { Container } from 'react-bootstrap';


class Main extends React.Component {

  render() {
    let hornedBeasts = this.props.data.map((hornedBeast, index) => {
      
      return (
    
        <HornedBeast
        // className="container"
        image_url={hornedBeast.image_url}
        title={hornedBeast.title}
        description={hornedBeast.description}
        key={index}
        // keyword={hornedBeast.keyword}
        horns={hornedBeast.horns}

        />
  
        )
      })

      let myForm = <Container> <MyForm className="sticky-top"/></Container>

      let selectedBeasts = <SelectedBeasts />

      // let myForm = this.props.data.map((hornedBeast, index) => {
              
      //   return (
      //     <MyForm 
      //     horns={hornedBeast.horns}
      //     key={index}
      //     />
      //     )         
      //   })
     
    return (
      <main className="d-flex flex-wrap">
        
        {myForm}

        {hornedBeasts}

        {selectedBeasts}

      {/* <HornedBeast title='Billy Goat' img imageURL="billy-goat.jpeg" alt='Billy Goat' imgTitle='billy goat' description= 'A nimble and fierce horned beast'/> */}
      
       </main>

    )
  }
}

export default Main;