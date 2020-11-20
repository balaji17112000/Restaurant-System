import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              balaji street<br />
		              balaji nagar<br />
		              chennai<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 7358182610<br />

		              <i className="fa fa-envelope fa-lg"></i>: <a href="gmail:balaji17112000">
                         balaji17112000@gmail.com</a>
                    </address>
                </div>
                
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                       <a className="btn btn-social-icon btn-google" href="http://www.google.com"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
						<a className="btn btn-social-icon btn-instagram" href="http://www.Instagram.com/balaji0_0_7?r=nametag"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http:/gmail.com/"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright பாலாஜி உணவகம்</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;