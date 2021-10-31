import React, { useEffect, useState } from 'react';
import {  Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Service = () => {
    const [packages, setPackages] = useState([]);
    const {users} = useAuth();
    const email = users.email ;
    console.log(email);
 

    useEffect(() =>{
        fetch("http://localhost:8000/packages")
         .then((res) => res.json())
         .then((data) => setPackages(data));
    } ,[]);
   
    const handleAddToCart = (index) =>{
      
       
        const data = (packages[index]);
        data.email = email;
        data.status = "Pending";
        data.key =
        fetch("http://localhost:8000/order", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        });
    };
  
    return (
        <div id="services">
            
            <Row xs={1} md={3} className="g-4 m-3">
          
            {
                packages.map((pack, index) =>(
                
                <Card>
                    <Card.Img height="250px" width="250px" variant="top" src={pack.img} />
                    <Card.Body>
                        <h4>{pack.name}</h4>
                      <Card.Text>
                        {pack.description}
                      </Card.Text>
                      <Link to={`/booking/${pack._id}`}>
                        <button onClick={() =>handleAddToCart(index)} className="btn btn-success">Booking</button>
                    </Link>
                    </Card.Body>
                </Card>
              

                   
                ))
            }
             </Row>
           
        </div>
    );
};

export default Service;