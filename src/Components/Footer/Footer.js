import React from 'react'
import './FooterStyles.css'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="u-footer">
                    <div className="l-footer">
                        <div className="logo">
                            <img src="images/nav-logo.png" alt="" />
                            <h1>AUBDS</h1>
                        </div>
                        <p>Follow us on social media platforms.</p>
                        <div className="social">
                            <a href="https://www.facebook.com/AirUniBDS"><i className="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/au.bds/"><i className="fa fa-instagram"></i></a>
                            <a href="#none"><i className="fa fa-youtube"></i></a>
                            <a href="https://twitter.com/Aubds_"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>

                    <ul className="r-footer">
                        <li className="features">
                            <h3>Quick Links</h3>
                            <ul className="box">
                                <li><a href="#none">Become Donor</a></li>
                                <li><a href="#none">Request Blood</a></li>
                                <li><a href="#none">Donate Money</a></li>
                            </ul>
                        </li>
                        <li className="features">
                            <h3>Useful Links</h3>
                            <ul className="box">
                                <li><a href="#none">About Us</a></li>
                                <li><a href="#none">Become a member</a></li>
                                <li><a href="#none">Events</a></li>
                            </ul>
                        </li>
                        <li className="features">
                            <h3>Contact</h3>
                            <ul className="box">
                                <li><a href="#none">Air University, Islamabad</a></li>
                                <li><a href="#none">+92 335 9344822</a></li>
                                <li><a href="#none">redirect@mail.com</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="b-footer">
                    <p>
                        All rights reserved. <br />
                        © Air University Blood Donor Society 2022
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer