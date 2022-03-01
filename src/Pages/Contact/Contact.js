import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div id="contact" className="contact-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Contact us</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					</div>
				</div>
			</div>
			<div className="row">				
                <div className="container contact-form">
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                    </div>
                    <form >
                        <h3>Drop Us a Message</h3>
                    <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" disabled="disabled" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea name="txtMsg" className="form-control" placeholder="Your Message *" ></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>				
			</div>
		</div>
	</div>
    );
};

export default Contact;