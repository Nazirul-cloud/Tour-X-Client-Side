import React from 'react';
import img1 from '../../images/Destinations/tokyo.jpg'
import img2 from '../../images/Destinations/seoul.jpg'
import img3 from '../../images/Destinations/paris.jpg'
import img4 from '../../images/Destinations/london.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const Destination = () => {
    return (
        <Container className="mt-4 mb-4">
             <div  className="text-primary">
            <h2>Popular Destinations</h2>
            <p>World's best tourist destinations</p>
            </div>
        <Row className="border p-3">
           
           
        <Col >
           <div className=""> <img height="250px" width="250px" src={img1} alt="" />
                <p className="fw-bold">Toyko</p> 
           </div>
        </Col>
        <Col>
           <div className=""> <img height="250px" width="250px" src={img2} alt="" /> 
           <p className="fw-bold">Seoul</p> </div>
        </Col>
        <Col>
           <div className=""> <img height="250px" width="250px" src={img3} alt="" />
           <p className="fw-bold">Paris</p> 
            </div>
           </Col>
        <Col>
           <div className=""> <img height="250px" width="250px" src={img4} alt="" />
           <p className="fw-bold">London</p> 
            </div>
        </Col>
          </Row>
        </Container>
     
    );
};

export default Destination;