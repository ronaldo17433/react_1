import React, { Component } from 'react';
import { Form,FormGroup,Col,Checkbox,Button,ControlLabel,FormControl,Textarea,Well} from 'react-bootstrap';



class Contact extends Component {
  render() {
    return (
     
      <div className='container'>
   
      <Well>
      <big>Nice to Meet You! </big> 
		  <small>Have a question or just want to get in touch? Let's chat.</small>
      </Well>
     
        <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalSubject">
    <Col componentClass={ControlLabel} sm={2}>
    Subject
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Subject" />
    </Col>
  </FormGroup>

<FormGroup controlId="formHorizontalMessage">
    <Col componentClass={ControlLabel} sm={2}>
      Message
    </Col>
    <Col sm={10}>
    <FormControl componentClass="textarea" placeholder="Message" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Send</Button>
    </Col>
  </FormGroup>
</Form>
</div>
    );
  }
}

export default Contact;