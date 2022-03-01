import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
// import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://possessed-dungeon-80772.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    return (
                <div id="packages">
                    <div className="title-box">
						<h2>Tour Packages</h2>
						<p>Tour Bangladesh operate various regular, customize and special Bangladesh tour packages round the year. As a professional tour operator in Bangladesh, we regularly operate customized Bangladesh tour packages which include luxury Bangladesh tour packages, City Sightseeing and River Cruising tour packages, Archaeological Sites & Cultural Tour, Adventure & Wildlife tours and many more tour packages. Come and explore Bangladesh with us and Discover Bangladesh Naturally!</p>
					</div>
                    <div className="package-container">
                        {
                            packages.map(pack => <Package
                                key={pack.id}
                                pack={pack}
                            ></Package>)
                        }                                  
                   </div>
                </div>
    );
};

export default Packages;