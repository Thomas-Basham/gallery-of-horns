import React from 'react';
import { Form, } from 'react-bootstrap'


// let numHorns = [1, 2, 3, 100]

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      // numHorns: numHorns
    }

// I tried this first but it got way too complicated so I searched for another answer
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


  handleChange = (event) => {
    let number = event.target.value;
    this.props.handleFormInput(number)
    console.log(this.props.handleFormInput)
  }

    render() {
      return (
        <>
   <Form.Group className="mb-3" >

    <Form.Label> Filter Beasts by Number of Horns </Form.Label>

    <Form.Select onChange={this.handleChange}>
      <option value="null">number of horns</option>
      <option value="1"> 1 </option>
      <option value="2"> 2 </option>
      <option value="3"> 3 </option>
      <option value="100"> 100 </option>
    </Form.Select>
{/* <Button type="submit">Submit</Button> */}
  </Form.Group>
        
        </>
      )
    }
  }





export default MyForm;