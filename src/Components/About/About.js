import React from 'react'
import './About.css'
import Carousel from 'react-bootstrap/Carousel'

import {
    imageHassanMentor, imageTayyab, imageVicePresident, imageGeneralSecretary, imageDirectorOps,
    imageUmarUsman, imageHabibaFemaleHead, imageHostingLead, imageDir_Documentation,
    imageDataEntryHead, imageDirector_PR_Marketing, imageSocialMediaHead,
    imageMarketing_LiasonHead, imageDirectorEmergency, imageBloodBankHead,
    imageUniDonorsHead, imageDonorsGroupHead, imageDirectorIT_Multimedia,
    imageGraphicsLead, imageVideographyLead,imageAbout,
    imageITLead, imageQalbeSaleem1, imageQalbeSaleem5, imageQalbeSaleem6
} from './indexHelper'

const About = () => {
    
    return (
        <>
            <div className="page-title" style={{backgroundImage: `url(${imageAbout})` }}>
                <div className="transparent"></div>
                <div className="page-description">
                    <h1 className="big-headings">About Us</h1>
                    <p>
                        Donate blood, Save Lives. One blood donation can save up to three
                        lives. Your donation can make someone's life better. Together we can
                        make world more healthier and better.
                    </p>
                    <p>Home / <span>About Us</span></p>
                </div>
            </div>

            <section className="white-section" id="timeline">
                <div className="section-heading">
                    <h5>Timeline</h5>
                    <div>
                        <h1>Air University Blood Donor Society</h1>
                    </div>
                </div>

                <div className="timeline">
                    <div className="history-tl-container">
                        <ul className="tl">
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <div className="timestamp">2012</div>
                                <div className="item-description">
                                    <div className="item-title">Formation of Society</div>
                                    <div className="item-detail">
                                        By Dr Atif, Mr Muhammad Saram Dastgeer, Mr Sherry Malik, Mr
                                        Waqas Ahmad Mughal
                                    </div>
                                </div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <div className="timestamp">2016</div>
                                <div className="item-title">Restructuring of Society</div>
                                <div className="item-detail">By Mr Hassan Iqbal</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <div className="timestamp">2016</div>
                                <div className="item-title">Project Qalb e Saleem</div>
                                <div className="item-detail">More than 1000 blood bags collected</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <div className="timestamp">2018</div>
                                <div className="item-title">Project Saeybaan</div>
                                <div className="item-detail">Visit to Thalassemia Centre</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <div className="timestamp">2020</div>
                                <div className="item-title">COVID-19 قوتِ اخوتِ عوام بر خلافِ</div>
                                <div className="item-detail">
                                    Free Ration ditribution to 106 families
                                </div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <div className="timestamp">2022</div>
                                <div className="item-title">AUBDS Website</div>
                                <div className="item-detail">Under construction</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="black-section" id="achievement">
                <div className="achievements">
                    <h5>We Help People</h5>
                    <h1>Our Achievements</h1>
                    <p>
                        Successful projects: Qalb e Saleem, Project Sayebaan and Project Quat
                        e Akhwat.
                    </p>
                </div>

                <div className="counters">
                    <div>
                        <i className="bi bi-patch-check icon"></i>
                        <div className="counter-box">
                            <div className="counter" data-target="10">0</div>
                            <div className="plus">
                                <i className="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Year Experience</p>
                    </div>

                    <div>
                        <i className="bi bi-people icon"></i>
                        <div className="counter-box">
                            <div className="counter" data-target="50">0</div>
                            <div className="plus">
                                <i className="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Members</p>
                    </div>

                    <div>
                        <i className="bi bi-bag-plus icon"></i>
                        <div className="counter-box">
                            <div className="counter" data-target="1000">0</div>
                            <div className="plus">
                                <i className="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Blood-bags Collected</p>
                    </div>
                    <div>
                        <i className="bi bi-hospital icon"></i>
                        <div className="counter-box">
                            <div className="counter" data-target="8">0</div>
                            <div className="plus">
                                <i className="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Projects</p>
                    </div>
                </div>
            </section>

            <section id="team">
                <div className="container-fluid">
                    <div className="section-title">
                        <h1>Exectives</h1>
                    </div>
                    <div className="row">
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageHassanMentor} alt="Mentor" />
                                </div>
                                <div className="team-content">
                                    <h2>Hassan Iqbal</h2>
                                    <p>Mentor</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageTayyab} alt="President" />
                                </div>
                                <div className="team-content">
                                    <h2>Tayyab ur Rehman</h2>
                                    <p>President</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageVicePresident} alt="Vice President" />
                                </div>
                                <div className="team-content">
                                    <h2>Sana Rizvi</h2>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageGeneralSecretary} alt="General Secretary" />
                                </div>
                                <div className="team-content">
                                    <h2>Ali Raza Sheikh</h2>
                                    <p>General Secretary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="section-title">
                        <h1>Operations</h1>
                    </div>
                    <div className="row">
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageDirectorOps} alt="Director Operations" />
                                </div>
                                <div className="team-content">
                                    <h2>Servish Moeen</h2>
                                    <p>Director Operations</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageUmarUsman} alt="Event Head (Male)" />
                                </div>
                                <div className="team-content">
                                    <h2>Umar Usman Khan</h2>
                                    <p>Event Head (Male)</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageHabibaFemaleHead} alt="Event Head (Female)" />
                                </div>
                                <div className="team-content">
                                    <h2>Habiba Amin</h2>
                                    <p>Event Head (Female)</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageHostingLead} alt="Hosting Lead" />
                                </div>
                                <div className="team-content">
                                    <h2>Shafaq</h2>
                                    <p>Hosting Lead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="section-title">
                        <h1>Documentaion</h1>
                    </div>
                    <div className="row">
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageDir_Documentation} alt="Director Documentaion" />
                                </div>
                                <div className="team-content">
                                    <h2>Rania Hameed</h2>
                                    <p>Director Documentaion</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageDataEntryHead} alt="Data Entry Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Muhammad Abdullah</h2>
                                    <p>Data Entry Head</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="section-title">
                        <h1>PR & Marketing</h1>
                    </div>
                    <div className="row">
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageDirector_PR_Marketing} alt="Director PR & Marketing" />
                                </div>
                                <div className="team-content">
                                    <h2>Umm e Sehar</h2>
                                    <p>Director PR & Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageSocialMediaHead} alt="Social Media Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Muhammad Hamza</h2>
                                    <p>Social Media Head</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageMarketing_LiasonHead}
                                        alt="Marketing & Liason Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Raja Abdullah</h2>
                                    <p>Marketing & Liason Head</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="section-title">
                        <h1>Emergency</h1>
                    </div>
                    <div className="row">
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageDirectorEmergency} alt="Director Emergency" />
                                </div>
                                <div className="team-content">
                                    <h2>Director Emergency</h2>
                                    <p>Iqra Zaineb</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageBloodBankHead} alt="Blood Bank Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Husnain Abbas</h2>
                                    <p>Blood Bank Head</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageUniDonorsHead} alt="University Donors Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Laiba Mustafa</h2>
                                    <p>University Donors Head</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageDonorsGroupHead} alt="Donors Group Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Sohaib Ahmed</h2>
                                    <p>Donors Group Head</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="section-title">
                        <h1>IT and Multimedia</h1>
                    </div>
                    <div className="row">
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageDirectorIT_Multimedia} alt="Director IT and Multimedia" />
                                </div>
                                <div className="team-content">
                                    <h2>Saif ur Rehman</h2>
                                    <p>Director IT and Multimedia</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageGraphicsLead} alt="Graphic Designing Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Zain ul Hassan</h2>
                                    <p>Graphic Designing Lead</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageVideographyLead} alt="Videography Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Areesha Ijaz</h2>
                                    <p>Videography Lead</p>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team">
                                <div className="team-img">
                                    <img src={imageITLead} alt="IT Head" />
                                </div>
                                <div className="team-content">
                                    <h2>Moin ud din</h2>
                                    <p>IT Lead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="gallery">
                <div className="section-title">
                    <h1>Gallery</h1>
                </div>

                <Carousel className='carouslgallery'>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={imageQalbeSaleem6}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>This is the text shown on first slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img className="d-block w-100" src={imageQalbeSaleem5} alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>some text here on second slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img className="d-block w-100" src={imageQalbeSaleem1} alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                This is the third slide
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <footer id="footer">
                <div class="u-footer">
                    <div class="l-footer">
                        <div class="logo">
                            <img src="images/nav-logo.png" alt="" />
                            <h1>AUBDS</h1>
                        </div>
                        <p>Follow us on social media platforms.</p>
                        <div class="social">
                            <a href="https://www.facebook.com/AirUniBDS" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/au.bds/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
                            <a href="#none"><i class="fa fa-youtube" target="_blank" rel="noopener noreferrer"></i></a>
                            <a href="https://twitter.com/Aubds_" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>

                    <ul class="r-footer">
                        <li class="features">
                            <h3>Quick Links</h3>
                            <ul class="box">
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">Become Donor</a></li>
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">Request Blood</a></li>
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">Donate Money</a></li>
                            </ul>
                        </li>
                        <li class="features">
                            <h3>Useful Links</h3>
                            <ul class="box">
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">About Us</a></li>
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">Become a member</a></li>
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">Events</a></li>
                            </ul>
                        </li>
                        <li class="features">
                            <h3>Contact</h3>
                            <ul class="box">
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">Air University, Islamabad</a></li>
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">+92 335 9344822</a></li>
                                <li><a href="#none" target="_blank" rel="noopener noreferrer">redirect@mail.com</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="b-footer">
                    <p>
                        All rights reserved. <br />
                        © Air University Blood Donor Society 2022
                    </p>
                </div>
            </footer>

        </>
    )
}

export default About