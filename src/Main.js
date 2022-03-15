import React from 'react';
import HornedBeast from './HornedBeast';
// import billyGoat from './public/billy-goat.jpeg';

class Main extends React.Component {
  render() {
    return (
      <main>
      <HornedBeast title='Billy Goat' img src="billy-goat.jpeg" alt='Billy Goat' imgTitle='billy goat' description= 'A nimble and fierce horned beast'/>
      <HornedBeast title='Big Horned Sheep' img src="big-horned-sheep.jpeg" alt='Big Horned Sheep' imgTitle='big horned sheep' description= 'The wisest of the horned beasts'/>
      </main>

    )
  }
}

export default Main;