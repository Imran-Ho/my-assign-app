import React from 'react';

const Sport = (props) => {
    console.log(props)
    const {name,Time,picture} = props.sport
    return (
                <div className="row row-cols-4 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img className="card-img-top" src={picture} alt="" />
                        <div className="card-body">
                        
                            <h5 className="card-title">Name: {name}</h5>
                            <p>Time: {Time}s</p>
                            
                        </div>
                        </div>
                    </div>
                    </div>
    );
};

export default Sport;