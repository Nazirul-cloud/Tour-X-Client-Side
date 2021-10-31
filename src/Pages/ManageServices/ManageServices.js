import React, { useEffect, useState } from 'react';
import './ManageServices.css'
import { useForm } from "react-hook-form";


const ManageServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const [services, setServices] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isUpdate, setIsUpdated] = useState(null);



    useEffect( () =>{
        fetch('https://creepy-plague-14203.herokuapp.com/orders')
        .then( res => res.json())
        .then (data => setOrders(data))
    } ,[isUpdate]);

    const orderDelete = key =>{
       
        const url = `https://creepy-plague-14203.herokuapp.com/orders/${key}`;
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

 //-------------------- DELETE PRODUCT START-----------------------//
    useEffect( () =>{
        fetch('https://creepy-plague-14203.herokuapp.com/packages')
        .then( res => res.json())
        .then (data => setServices(data))
    } ,[]);

  
    const handleDelete = id =>{
        const url = `https://creepy-plague-14203.herokuapp.com/packages/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Successfully Deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
              
            }
        })
    };
     //-------------------- DELETE PRODUCT END-----------------------//
    
    //-------------------- ADD PRODUCT START-----------------------//
    const onSubmit = data => {

       fetch(`https://creepy-plague-14203.herokuapp.com/addPackage`,{
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(data)
       })
       
      
       .then((res) => res.json())
       .then((result) => console.log(result));
       reset();

    }
     //-------------------- ADD PRODUCT START -----------------------//



    return (
        <div>
           
           <div className="d-flex justify-content-between border border">
              
                {/* Add Packages */}
                    <div className="add-service mt-5 m-auto">
                            <h2>Add a Packages</h2>
                            <p> <small>Added a new Packages, if your added a package the package will be add your home page</small> </p>
                        <form className="border border p-5" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <textarea {...register("description")} placeholder="Description" />
                            <input {...register("img")} placeholder="image url" />
                            <input type="submit" />
                        </form>
                    </div>
              
                {/* Manage Packages */}
               <div className="mt-5">
               <h2>Manage All Packages</h2>
            <p> <small>If you click the delete button, the service will be remove from the database.</small> </p>
               {
                services.map(service => <div className='border border p-3 m-3 d-flex bd-highlight' key={service._id}>
                     <div className="p-2 bd-highlight"> <img width="250px" height="150px"  src={service.img} alt="" /> </div>
                   <div className="p-2 flex-grow-1 bd-highlight "> <h5>{service.name}</h5></div>
                    <div className="p-2 bd-highlight">
                        <button onClick={ () => handleDelete(service._id) } className='btn btn-danger'>Delete</button>
                    </div>
                </div>)
            }
               </div>
           </div>
           <hr />
           <div>
               <h2>Manage All Orders</h2>
               
               {
                orders.map(order => <div className='border border p-3 m-3 d-flex bd-highlight' key={order._id}>
                     <div className="p-2 bd-highlight"> <img width="250px" height="150px"  src={order.img} alt="" /> </div>
                   <div className="p-2 flex-grow-1 bd-highlight "> <h5>{order.name}</h5></div>
                    <div className="p-2 bd-highlight">
                        <button onClick={ () =>  orderDelete(order.key) } className='btn btn-danger'>Delete</button>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default ManageServices;