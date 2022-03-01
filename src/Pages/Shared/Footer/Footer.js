import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-box">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
					<p className="footer-company-name">All Rights Reserved. &copy; 2021 <Link to="/home">Tour Bangladesh</Link> Design By : <Link to="/home">TryCatch69</Link></p>
				</div>
                </div>
		    </div>
        </div>
    );
};

export default Footer;