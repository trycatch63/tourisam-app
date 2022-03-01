import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/about-img-01.jpg';
// import image2 from '../../images/about-img-02.jpg';
// import image3 from '../../images/about-img-03.jpg';
import './About.css';
const About = () => {
    return (
        <div id="about" className="about-box">
		<div className="about-a1">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-box">
							<h2>About Us</h2>
							<p>Bangladesh is a land of enormous beauty, hundreds of serpentine rivers, crystal clear water lakes surrounded by ever green hills, luxuriant tropical rain forests.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="row align-items-center about-main-info">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<h2> Welcome To Tour Bangladesh</h2>
								<p>Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer and it is definitely not a tourist haunt like Nepal or India. Bangladesh is like a painter's dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World's tourist maps.</p>
								<p>It's a land of enormous beauty, hundreds of serpentine rivers, crystal clear water lakes surrounded by ever green hills, luxuriant tropical rain forests, beautiful cascades of green tea gardens, world's largest mangrove forest preserved as World Heritage, home of the Royal Bengal Tiger and the wild lives, warbling of birds in green trees, wind in the paddy fields, abundance of sunshine, world's longest natural sea beach, rich cultural heritage, relics of ancient Buddhist civilizations and colorful tribal lives, - Bangladesh creates an unforgettable impression of a land of peace.</p>
								{/* <Link href="#" className="new-btn-d br-2">Read More</Link> */}
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="about-m">
									<ul id="banner">
										<li>
											<img src={image1} alt="" />
										</li>
										{/* <li>
											<img src={image2} alt="" />
										</li>
										<li>
											<img src={image3} alt="" />
										</li> */}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default About;