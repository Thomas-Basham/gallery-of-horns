import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json';
// import { Main }from 'react-bootstrap';

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
