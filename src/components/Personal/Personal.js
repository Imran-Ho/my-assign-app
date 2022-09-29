import React from 'react';
import './Personal.css'
import image from '../Images/my.png'
const Personal = () => {
    return (
        <div>
            <div className='d-flex'>
                    <img className='my-img' src={image} alt="" />
                    <h5 className='mx-3'>MD Imran Hossain</h5>
                </div>
                <div className='d-flex shadow-lg p-2 my-3 bg-body rounded'>
                    <div>
                        <h6 className='mx-3'>72kg</h6>
                        <h6 className='mx-3'>Weight</h6>
                    </div>
                    <div>
                        <h6 className='mx-3'>6.5</h6>
                        <h6 className='mx-3'>Height</h6>
                    </div>
                    <div>
                        <h6>30</h6>
                        <h6>Age</h6>
                    </div>
                </div>
        </div>
    );
};

export default Personal;