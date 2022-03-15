import React from 'react';
import HornedBeast from './HornedBeast';
// import billyGoat from './public/billy-goat.jpeg';

class Main extends React.Component {

  render() {
    let hornedBeasts = [];
    this.props.data.forEach((hornedBeast) => {
      hornedBeasts.push(
        <HornedBeast
        image_url={hornedBeast.image_url}
        title={hornedBeast.title}
        description={hornedBeast.description}
        // keyword={hornedBeast.keyword}
        // horns={hornedBeast.horns}
        />
      )
    })

    return (
      <main>
        {hornedBeasts}
      {/* <HornedBeast title='Billy Goat' img imageURL="billy-goat.jpeg" alt='Billy Goat' imgTitle='billy goat' description= 'A nimble and fierce horned beast'/> */}
       </main>

    )
  }
}

export default Main;