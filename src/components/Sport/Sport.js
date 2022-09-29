import React from 'react';

const Sport = (props) => {
    console.log(props)
    const {name,Time,picture} = props.sport
    return (
        <div >
                    <div className="col">
                        <div className="card h-100 w-100">
                            <img className="card-img-top h-50" src={picture} alt="" />
                        <div className="card-body">
                        
                            <h5 className="card-title">{name}</h5>
                            <p>Time: {Time}s</p>
                            
                        </div>
                        <div>
                            <button onClick={()=>props.func(props.sport)} className='bg-success border border-0 p-2 text-white w-100 rounded-bottom'>Add to list</button>
                        </div>
                        </div>
                    </div>
                    </div>
    );
};

export default Sport;