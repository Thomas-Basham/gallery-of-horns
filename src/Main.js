import React from 'react';
import HornedBeast from './HornedBeast';
// import billyGoat from './public/billy-goat.jpeg';

class Main extends React.Component {
  render() {
    return (
      <main>
      <HornedBeast title='Billy Goat' img src="billy-goat.jpeg" alt='Billy Goat' description= 'A nimble yet fierce horned beast'/>
      <HornedBeast title='Big Horn Sheep' img src="big-horned-sheep.jpeg" alt='Big Horned Sheep' description= 'The wisest of the horned beasts'/>
      </main>

    )
  }
}

export default Main;