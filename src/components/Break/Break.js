import React, { useState } from 'react';
import './Break.css'
import Swal from 'sweetalert2'

// let count = 0;
const Break = (props) => {
    const elements = props.time;
    // let count = 0;
    // for(const single of elements){
    //     const {Time}= single
    //     count = count + parseInt(Time)
    // }
    // console.log(typeof count)
    // const {Time} = props.time
    const [second, setSecond]= useState("");

    const sweetalert = () =>{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }


    return (
        <div>
            <h5>Add a break</h5>
            <div className='d-flex shadow-lg p-3 mb-5 bg-body rounded'>
                <button onClick={(e)=> setSecond(e.target.name)} name='10s' className='rounded-circle mx-3'>10s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='20s' className='rounded-circle mx-3'>20s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='30s' className='rounded-circle mx-3'>30s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='40s' className='rounded-circle mx-3'>40s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='50s' className='rounded-circle mx-3'>50s</button>
            </div>
            <div>
            <h5 className='my-3'>Exercise Details</h5>
            <div className=''>
                <h5 className='shadow-lg p-3 mb-1 bg-body rounded'>Exercise time: {elements.Time}s</h5>
                <h5 className='shadow-lg p-3 mb-5 bg-body rounded'>Break time: {second}</h5>
            </div>
            <div className='d-grid col-12 mx-auto w-100'>
            <button onClick={()=>sweetalert()} className='bg-primary border border-0 p-2 text-white'>Activity Completed</button>
            </div>
        </div>
        </div>
    );
};

export default Break;