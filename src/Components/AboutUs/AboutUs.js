import React from 'react'
import mentorImage from "../../images/hierarchy/HassanIqbal_mentor.png";
import presidentImage from "../../images/hierarchy/TayyaburRehman_president.jpg";
import vicePresidentImage from "../../images/hierarchy/SanaRizvi_VicePresident.jpg";
import generalSecretaryImage from "../../images/hierarchy/AliRaza_GeneralSecretary.jpg";
import Carousel from "react-bootstrap/Carousel";

function AboutUs() {
  return (
    <div>
      <section class="white-section" id="aboutus">
                <div class="section-heading">
                    <h5>About Us</h5>
                    <div>
                        <h1>Air University Blood Donor Society</h1>
                        <button class="button">View More</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-8">
                        <p>
                            Air University Blood Donors Society is a team of highly motivated
                            students, who provide their blood and services for the sake of the
                            welfare of mankind and saving lives. This society's main aim is to
                            provide blood in Islamabad and Rawalpindi. In the hour of need, we
                            contact the volunteer with the required blood group and our team
                            serves as a link between the volunteer and the patient.
                        </p>
                        <ul class="tick">
                            <li>
                                <i class="fa-solid fa-check fa-lg"></i>Good Service
                            </li>
                            <li>
                                <i class="fa-solid fa-check fa-lg"></i>Help People
                            </li>
                            <li>
                                <i class="fa-solid fa-check fa-lg"></i>Raise Awareness
                            </li>
                            <li>
                                <i class="fa-solid fa-check fa-lg"></i>24h Service
                            </li>
                            <li>
                                <i class="fa-solid fa-check fa-lg"></i>Blood Donors
                            </li>
                            <li>
                                <i class="fa-solid fa-check fa-lg"></i>Blood Bank
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-4">
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100" src={mentorImage} alt="afaq" />
                                <Carousel.Caption>
                                    <h3 className="carousel_person_name">Mr. Hassan Iqbal</h3>
                                    <p className="carousel_person_detail">Mentor</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={presidentImage}
                                    alt="afaq"
                                />
                                <Carousel.Caption>
                                    <h3 className="carousel_person_name">Tayyab-ur-rehman</h3>
                                    <p className="carousel_person_detail">President</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={vicePresidentImage}
                                    alt="afaq"
                                />
                                <Carousel.Caption>
                                    <h3 className="carousel_person_name">Sana Rizvi</h3>
                                    <p className="carousel_person_detail">Vice President</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={generalSecretaryImage}
                                    alt="afaq"
                                />
                                <Carousel.Caption>
                                    <h3 className="carousel_person_name">Hamza</h3>
                                    <p className="carousel_person_detail">General Secretary</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default AboutUs
