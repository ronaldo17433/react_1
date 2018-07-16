import React, { Component } from 'react';
import { Grid,Row,Col,Thumbnail,Well,Label} from 'react-bootstrap';
import avatar from '../imagens/avatar.jpg';

import Experience from './Experience';



class AboutMe extends Component {
  render() {
    return (
    <div>
     <Grid>
         <Row>
            <Col xs={2} md={2}>
                <Thumbnail src={avatar} responsive>
                    <h4>Lorem Ipsum</h4>
                    <h5><Label responsive>Web Developer</Label></h5>
                </Thumbnail>
            </Col>
            <Col xs={10} md={10}>
            <h3>About Me</h3>
            <Well>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                </p>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                </p>
              
                </Well>
            </Col>
        </Row>
      </Grid>

      <Experience title="Company A" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
      <Experience title="Company B" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
     </div> 
    
    );
  }
}

export default AboutMe;