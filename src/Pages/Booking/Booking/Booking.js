import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Booking.css'



const Booking = () => {
    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [orders, setOrders] = useState([]);
    const {users} =useAuth();
    const email = users.email;


    useEffect(() =>{
        fetch(`http://localhost:8000/myOrders/${email}`)
        .then(res => res.json())
        .then(data =>setOrders(data))
    },[])

    // const onSubmit = data => {
    
    //     fetch('http://localhost:8000/orders', {
    //         method: 'POST',
    //         headers:{
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         if(result.insertedId){
    //             alert('Order processed Successfully');
    //             reset();
    //         } 
    //     })
    // }
    const handleDelete = () =>{

    }
    return (
        <div className='d-flex justify-content-center'>

             <div>
               <h4>Your Booking Packages {orders?.length}</h4>
               <div>
                   {orders?.map((order, index) => (
                       <div className="col-md-6 col-lg-6">
                           <div className=" border border p-2 m-2">
                                <h5>{order.email}</h5>
                                <h4>{order?.name}</h4>
                                <p>{order?.description}</p>
                                <button
                                onClick={() => handleDelete(order._id)}
                                className="btn btn-sm btn-danger m-2"
                                > DELETE
                                </button>
                           </div>
                       </div>
                   ))}
               </div>
           </div>



            {/* <form className="shipping-form bg-secondary p-5" onSubmit={handleSubmit(onSubmit)}>
               
               <input className="p-2" defaultValue={users.displayName} {...register("name")} />
               <input className="p-2" defaultValue={users.email} {...register("email", { required: true })} />
               {errors.email && <span className="error">This field is required</span>}
               
               <input className="p-2" placeholder='Address' {...register("Address", { required: true })} />
               <input className="p-2"  placeholder='City' {...register("City", { required: true })} />
               <input className="p-2"  placeholder='Phone' {...register("Phone", { required: true })} />

               <input type="submit" value="Booking Place" />
           </form> */}

          
        </div>
    );
};

export default Booking;