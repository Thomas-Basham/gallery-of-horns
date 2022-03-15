import React from 'react';
import HornedBeast from './HornedBeast';
// import billyGoat from './public/billy-goat.jpeg';

class Main extends React.Component {
  render() {
    let hornedBeasts = [];
    this.props.data.forEach(hornedBeast => {
      hornedBeasts.push(
        title={hornedBeast.title}
        imageURL={hornedBeast.title}
      )
    })
    return (
      <main>
        {hornedBeasts}
      {/* <HornedBeast title='Billy Goat' img src="billy-goat.jpeg" alt='Billy Goat' imgTitle='billy goat' description= 'A nimble and fierce horned beast'/> */}
       </main>

    )
  }
}

export default Main;