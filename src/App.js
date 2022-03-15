import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import data from './data.json';

class App extends React.Component{x
  render(){
    return (
      <>
      <Header/>
      <Main
        data={data}
      />
      <Footer/>

      
      </>
    ); 
  }
}

export default App;  
