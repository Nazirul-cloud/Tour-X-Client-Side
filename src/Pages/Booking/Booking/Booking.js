import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Booking.css'



const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [orders, setOrders] = useState([]);
    const [isUpdate, setIsUpdated] = useState(null);

    const {users} =useAuth();
    const email = users.email;


    useEffect(() =>{
        fetch(`http://localhost:8000/myOrders/${email}`)
        .then(res => res.json())
        .then(data =>setOrders(data))
    },[isUpdate])

    const onSubmit = data => {
    
        fetch('http://localhost:8000/order', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order processed Successfully');
                reset();
            } 
        })
    }

    const handleDelete = key =>{
        const url = `http://localhost:8000/orders/${key}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Successfully Deleted');
                setIsUpdated(true);
            }
            else{
                setIsUpdated(false);
            }
        })
    };





    return (
        
        <Container>
            <Row>
               <Col>
               <h4 className="mt-4 mb-4">Your Booking Packages {orders?.length}</h4>
                   {orders?.map((order, index) => (
                      
                           <div className=" border border p-2 m-2">
                                <h5>{order.email}</h5>
                                <h4>{order?.name}</h4>
                                <p>{order?.description}</p>
                                <button
                                onClick={() => handleDelete(order.key)}
                                className="btn btn-sm btn-danger m-2"
                                > DELETE
                                </button>
                           </div>
                      
                   ))}
               </Col>

           <Col>
               <h4 className="mt-4 mb-4">Please fill up the from</h4>
               <Link to="/placeOrder">
            <form className="shipping-form bg-secondary p-5" onSubmit={handleSubmit(onSubmit)}>
               <input className="p-2" defaultValue={users.displayName} {...register("name")} />
               <input className="p-2" placeholder='Address' {...register("Address", { required: true })} />
               <input className="p-2"  placeholder='City' {...register("City", { required: true })} />
               <input className="p-2"  placeholder='Phone' {...register("Phone", { required: true })} />
               <input type="submit" value="Booking Place" />
             </form>
             </Link>
           </Col>

           </Row>
        </Container>
    );
};

export default Booking;