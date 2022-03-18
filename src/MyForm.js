import React from 'react';
import { Form, } from 'react-bootstrap'
// import HornedBeast from './HornedBeast';


let numHorns = [1, 2, 3, 100]

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      numHorns: numHorns
    }

  // handleSelect = (e) => {

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
  //   } else { 
  //     this.setState({ numHorns: numHorns });
  //   }
  }


    render() {
      return (
        <>
   <Form.Group className="mb-3">

    <Form.Label>Filter Beasts by Number of Horns</Form.Label>

    <Form.Select name="selected" onChange={this.handleSelect}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="100">100</option>
    </Form.Select>

  </Form.Group>
        
        </>
      )
    }
  }





export default MyForm;