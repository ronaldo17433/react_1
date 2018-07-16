import React, { Component } from 'react';
import { Grid,Row,Col,Image,Well} from 'react-bootstrap';
import Logo from '../imagens/logo.svg';


class Experience extends Component {
  render() {
    return (
      
        <Grid>
          <h4>My experiences</h4>
        <Row>       
          <Col xs={12} md={12}>
            <Well>
                 <h5>{this.props.title}</h5>
                 <p>{this.props.body}</p> 
            </Well>
           
          </Col>
        </Row>
      </Grid>     
    );
  }
}

export default Experience