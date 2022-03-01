import React from 'react';
// import { Link } from 'react-router-dom';
import './Package.css';

const Package = ({ pack }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = pack;
    // console.log(service);
    return (
        <div className="packages-box">
            <div className="packageBox">
                <img className="package-icon" src={img} alt="" />
                <h3 className="title">{name}</h3>
                <div className="d-flex justify-content-between">
                    <p>Starting From</p>
                    <h5>Tk {price} /-</h5>                  
                </div>
                <br />
                {/* <Link to={`/packageDetail/${_id}`} className="new-btn-d br-2">
                    Detail Package
                </Link> */}
            </div>
    </div>
    );
};

export default Package;