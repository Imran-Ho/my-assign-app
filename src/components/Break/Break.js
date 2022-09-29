import React, { useState } from 'react';
import './Break.css'

const Break = (props) => {
    const {exercise} = props.time
    const [second, setSecond]= useState("");

  

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
            <h5 className='shadow-lg p-3 mb-1 bg-body rounded'>Exercise time: {exercise}</h5>
            <h5 className='shadow-lg p-3 mb-5 bg-body rounded'>Break time: {second}</h5>
            <div className='d-grid col-12 mx-auto'>
            <button className='bg-primary border border-0 p-2 text-white'>Activity Completed</button>
            </div>
        </div>
        </div>
    );
};

export default Break;