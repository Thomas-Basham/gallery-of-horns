import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeasts from './SelectedBeasts';
import MyForm from './MyForm';
import './Main.css';


class Main extends React.Component {

  render() {
    let hornedBeasts = this.props.data.map((hornedBeast, index) => {
      
      return (
        <HornedBeast
        
        image_url={hornedBeast.image_url}
        title={hornedBeast.title}
        description={hornedBeast.description}
        key={index}
        // keyword={hornedBeast.keyword}
        horns={hornedBeast.horns}

        />
        )
      })

      let myForm =  <MyForm/>

      let selectedBeasts = <SelectedBeasts/>

      // let myForm = this.props.data.map((hornedBeast, index) => {
              
      //   return (
      //     <MyForm 
      //     horns={hornedBeast.horns}
      //     key={index}
      //     />
      //     )         
      //   })
     
    return (
      <main >
        {selectedBeasts}
        
        {myForm}

        {hornedBeasts}

      {/* <HornedBeast title='Billy Goat' img imageURL="billy-goat.jpeg" alt='Billy Goat' imgTitle='billy goat' description= 'A nimble and fierce horned beast'/> */}
      
       </main>

    )
  }
}

export default Main;