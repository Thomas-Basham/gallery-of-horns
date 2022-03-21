import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json';
import SelectedBeasts from './SelectedBeasts.js';
// import { Form, Button } from 'react-bootstrap'

// let numHorns = [1, 2, 3, 100]
// import { Main }from 'react-bootstrap';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      image_url: '',
      description: '',
      title:'',
      horns: null,
      data: data
    }
  }
  
//   handleSelect = (e) => {
//   let selected = e.target.value;

//   if (selected === '1') {
//     let filteredBeasts = numHorns.filter(num => num  === 1);
//     this.setState({ numHorns: filteredBeasts });
//   } else if (selected === '2') {
//     let filteredBeasts = numHorns.filter(num => num  === 2);
//     this.setState({ numHorns: filteredBeasts });
//   } else if (selected === '3') {
//     let filteredBeasts = numHorns.filter(num =>num  === 3);
//     this.setState({ numHorns: filteredBeasts });
//   } else if (selected === '4') {
//     let filteredBeasts = numHorns.filter(num =>num  === 100);
//     this.setState({ numHorns: filteredBeasts });
//     console.log('selected 100');
//   } else { 
//     this.setState({ numHorns: numHorns });
//   }
// }

// handleSubmit = (e) => {
//   e.preventDefault(); 
  

// }


  openModal = (image, title, description) => this.setState({
     isOpen: true, 
     image_url: image,
     title: title,
    description: description,
    });

  closeModal = () => this.setState({
     isOpen: false
     });

     handleFormInput = (numHorns) => {
      this.setState({
        horns: numHorns
        
      })
    }


  render(){

    return (
      <>

      <Header/>


      {/* <Form.Group className="mb-3" onSubmit={this.handleSubmit}>

<Form.Label>Filter Beasts by Number of Horns</Form.Label>

<Form.Select name="selected" onChange={this.handleSelect}>
<option defaultValue> -- number of horns -- </option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="100">100</option>
</Form.Select>
<Button type="submit">Submit</Button>
</Form.Group> */}
      
      <Main
        data={data}
        openModal={this.openModal}
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}

        image_url={this.state.image_url}
        description= {this.state.description}
        title={this.state.title}
        horns = {this.state.horns}
        handleFormInput = {this.handleFormInput}
        />
        <SelectedBeasts
        image_url={this.state.image_url}
        description= {this.state.description}
        title={this.state.title}

        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        />
  
      <Footer/>

      </>
    ); 
  }
}

export default App;  
