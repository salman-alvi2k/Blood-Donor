import React from 'react';
import './Event.css';
import Footer from '../Footer/Footer';
import {
    qalbesaleem8, qalbesaleem7, qalbesaleem6,
    qalbesaleem5, qalbesaleem4, qalbesaleem3,imageEvents,
    qalbesaleem2, qalbesaleem1, quateAkhwat, sayeeban2, sayeeban1
} from './indexHelper';

const Events = () => {
    return (
        <>
            <section className="page-title" style={{backgroundImage: `url(${imageEvents})` }}>
                <div className="transparent"></div>
                <div className="page-description">
                    <h1 className="big-headings">Events</h1>
                    <p>
                        Donate blood, Save Lives. One blood donation can save up to three
                        lives. Your donation can make someone's life better. Together we can
                        make world more healthier and better.
                    </p>
                    <p>Home / <span>Events</span></p>
                </div>
            </section>

            {/* Events */}

            <section className="white-section" id="events">
                <div className="section-heading">
                    <h5>Events</h5>
                    <div>
                        <h1>Blood Donation Events</h1>
                        <button className="button">View More</button>
                    </div>
                </div>

                <div className="row-container">
                    <div className="row">
                        {/* Event 11 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem8} alt="qalbesaleem8" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> March 16, 2022</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 8</h2>
                                <p>
                                    Air University Blood Donor Society is once again coming up with one of its biggest events
                                    Project Qalb e Saleem 8.
                                    A blood camp for those who are in dire need of your support through blood donation.
                                </p>
                            </div>
                        </div>
                        {/* Event 11 end */}



                        {/* Event 10 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem7} alt="qalbesaleem7" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> October 4, 2021</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 7</h2>
                                <p>
                                    AUBDS presents project Qalb e Saleem 7 in which a 3 day blood camp is arrange at AU islamabad campus. The
                                    main purpose of the event is to serve the humanity by saving their lives. One drop of your blood can save
                                    a life.
                                </p>
                            </div>
                        </div>
                        {/* Event 10 end */}


                        {/* Event 9 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={quateAkhwat} alt="QuateAkhwat" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> April 28, 2020</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Quat e Akhwat</h2>
                                <p>
                                    During COVID'19 we destributed rations to 106 families across 16 cities of Pakistan.
                                    We supported 10 families for medical bills, fees, rental payments, marriage cases etc.
                                </p>
                            </div>
                        </div>
                        {/* Event 9 end */}

                        {/* Event 8 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem6} alt="qalbesaleem6" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> March 4, 2020</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 6</h2>
                                <p>
                                    AUBDS presents project Qalb e Saleem 6 in which a 3 day blood camp is arrange at AU islamabad campus.
                                    One drop of your blood can save a life.
                                </p>
                            </div>
                        </div>
                        {/* Event 8 end */}

                        {/* Event 7 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={sayeeban2} alt="saeybaan2" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> February 24, 2020</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Saeybaan 2</h2>
                                <p>
                                    AUBDS team visited Sundus Foundation. There they will present gifts, play different games, tell stories
                                    and have much fun with the children suffering with thalassemia.
                                </p>
                            </div>
                        </div>
                        {/* Event 7 end */}

                        {/* Event 6 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem5} alt="qalbesaleem5" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> December 4, 2019</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 5</h2>
                                <p>
                                    AUBDS presents project Qalb e Saleem 5 in which a 3 day blood camp is arrange at AU islamabad campus.
                                    The
                                    main purpose of the event is to serve the humanity by saving their lives. One drop of your blood can
                                    save
                                    a life.
                                </p>
                            </div>
                        </div>
                        {/* Event 6 end */}

                        {/* Event 5 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem4} alt="qalbesaleem4" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> November 29, 2018</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 4</h2>
                                <p>
                                    Qalb E Sleem is a project for the patients of thelesemia.
                                    It was the 4th time Air University Blood Donation Society conducted this blood camp in Air
                                    University. With name of the project "Qalb E Sleem 4".
                                </p>
                            </div>
                        </div>
                        {/* Event 5 end */}

                        {/* Event 4 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem3} alt="qalbesaleem3" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> November 29, 2018</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 3</h2>
                                <p>
                                    Qalb E Sleem is a project for the patients of thelesemia.
                                    It was the 3rd time Air University Blood Donation Society conducted this blood camp in Air
                                    University. With name of the project "Qalb E Sleem 3".
                                </p>
                            </div>
                        </div>
                        {/* Event 4 end*/}

                        {/* Event 3 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem2} alt="qalbesaleem2" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> October 19, 2017</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 2</h2>
                                <p>
                                    Air University Blood Donor Society presents it's annual social welfare event
                                    with the cooperation of Thalessemia Centre F-9 (A project of Pakistan Baitulmaal) and Jamila Sultana
                                    Foundation.
                                </p>
                            </div>
                        </div>
                        {/* Event 3 end */}

                        {/* Event 2 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={sayeeban1} alt="saeybaan1" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> September 8, 2016</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Saeybaan 1</h2>
                                <p>
                                    "Those who spend in charity will be richly awarded"
                                    -Al Qur'an 57:10
                                    This Eid, we are aiming to spread the happiness of this festival to the
                                    orphans of our society.
                                </p>
                            </div>
                        </div>
                        {/* Event 2 end */}

                        {/* Event 1 */}
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="event-img">
                                    <img src={qalbesaleem1} alt="qalbesaleem1" />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">
                                        <i className="bi bi-calendar-check"> April 4, 2016</i>
                                    </div>
                                    <div className="event-location">
                                        <i className="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div className="event-txt">
                                <h5>Project</h5>
                                <h2>Qalb e Saleem 1</h2>
                                <p>
                                    Qalb e Saleem was the first project of AUBDS in which
                                    a Blood Donation camp was arranged and 264 blood bags were collected for Thalassemia
                                    patients.
                                </p>
                            </div>
                        </div>
                        {/* Event 1 end */}
                    </div>
                </div>
            </section>

            <Footer />


        </>
    )
}

export default Events