import React from 'react';
import { AiFillGoogleCircle, AiFillLinkedin, AiOutlineFacebook, AiFillSkype } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='main-footer pt-5'>
            <div className="footer-middle bg-dark">
            <div className="container text-info p-4 pt-5">
                <div className="row">
                      {/* column-1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>ONLINE BOOKING</h4>
                        <ul className="list-unstyled">
                            <li>Play with Car</li>
                            
                        </ul>
                    </div>
                      {/* column-2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>PRIVATE CAR SERVICES</h4>
                        <ul className="list-unstyled">
                            <li>Aylesbury</li>
                            <li>Birmingham</li>
                            <li>Skype</li>
                            
                        </ul>
                    </div>
                      {/* column-3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>LATEST NEWS</h4>
                        <ul className="list-unstyled">
                            <li>Repair Blog</li>
                          
                        </ul>
                    </div>
                      {/* column-4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>CONTACT GENIUS</h4>
                        <ul className="list-unstyled">
                            <li>Are you fed up for your car?</li>
                            <li>Contact</li>
                            <li>About Cookies</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">

                    <AiFillGoogleCircle/> <AiFillLinkedin/> <AiOutlineFacebook/> <AiFillSkype/>
                    <p className="text-center p-5">
                        &copy;{new Date().getFullYear()} Nazirul Islam - All Rights Reserved
                       
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;

