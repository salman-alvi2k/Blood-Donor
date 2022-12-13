import React, { useState, useReducer } from "react";
import "./HomeStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "../Footer/Footer";
import bloodDonationImage from "../../images/action/blood-donation.png";
import bloodRequestImage from "../../images/action/blood-request.png";
import donateMoneyImage from "../../images/action/donate-money.png";
import QalbeSaleem8 from "../../images/events/qalbesaleem8.jpg";
import QalbeSaleem7 from "../../images/events/qalbesaleem7.jpg";
import QuateAkhwat from "../../images/events/QuateAkhwat.jpg";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import WhiteSection from "../WhiteSection/WhiteSection";
import AboutUs from "../AboutUs/AboutUs";
import Achievement from "../Achivement/Achievement";
import list from "../Cities/Citieslist"
import axios from "axios";

let initialState = {
  donorName: "",
  donorGender: "",
  donorAge: "",
  donorBloodGroup: "",
  donorPhone: "",
  donorCity: "",
  errorName: "",
  errorGender: "",
  errorAge: "",
  errorBloodGroup: "",
  errorPhone: "",
  errorCity: "",
};

const initialState_Request = {
  reqName: "",
  reqPhone: "",
  reqAge: "",
  reqBloodGroup: "",
  reqPints: "",
  reqHospital: "",
  reqIsPickandDrop: false,
  reqIsExchange: false,
  reqIsOpen: false,
  reqIsAuthentic: false,
  reqIsSolved: false,
  errorName: "",
  errorPhone: "",
  errorAge: "",
  errorBloodGroup: "",
  errorPints: "",
  errorHospital: "",
  errorIsPickandDrop: false,
  errorIsExchange: false,
  errorIsOpen: false,
  errorIsAuthentic: false,
  errorIsSolved: false,
};

function reducer_Request(state, action) {
  switch (action.type) {
    case "updated_req":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "error":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "error":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
const Home = () => {
  const [updatedState, dispatch] = useReducer(reducer, initialState);
  const [updatedState_Request, dispatch_Request] = useReducer(
    reducer_Request,
    initialState_Request
  );

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleCloseDonor = () => setShow(false);
  const handleShowDonor = () => setShow(true);

  const handleCloseRequest = () => setShow1(false);
  const handleShowRequest = () => setShow1(true);

  const handleCloseDonate = () => setShow2(false);
  const handleShowDonate = () => setShow2(true);

  const handleSubmitDonor = (e) => {
    // e.preventDefault();
    let isValid = true;

    if (updatedState.donorName === "") {
      isValid = false;
      dispatch({
        type: "error",
        value: "Please enter your Name",
        key: "errorName",
      });
    }
    if (updatedState.donorGender === "") {
      isValid = false;
      dispatch({
        type: "error",
        value: "Please enter your Gender",
        key: "errorGender",
      });
    }
    if (
      updatedState.donorAge === "" ||
      updatedState.donorAge < 18 ||
      updatedState.donorAge > 60
    ) {
      isValid = false;
      dispatch({
        type: "error",
        value: "Age must be between 18 to 60",
        key: "errorAge",
      });
    }
    if (updatedState.donorBloodGroup === "") {
      isValid = false;
      dispatch({
        type: "error",
        value: "Please enter your Blood Group",
        key: "errorBloodGroup",
      });
    }
    if (
      updatedState.donorPhone === "" ||
      updatedState.donorPhone.length !== 11
    ) {
      isValid = false;
      dispatch({
        type: "error",
        value: "Please enter your correct form of number",
        key: "errorPhone",
      });
    }
    if (updatedState.donorCity === "") {
      isValid = false;
      dispatch({
        type: "error",
        value: "Please enter your City",
        key: "errorCity",
      });
    }
    if (isValid) {
      SetDonor();
      updatedState.donorName = "";
      updatedState.donorGender = "";
      updatedState.donorAge = "";
      updatedState.donorBloodGroup = "";
      updatedState.donorPhone = "";
      updatedState.donorCity = "";
      updatedState.errorName = "";
      updatedState.errorGender = "";
      updatedState.errorAge = "";
      updatedState.errorBloodGroup = "";
      updatedState.errorPhone = "";
      updatedState.errorCity = "";
      handleCloseDonor();
    }
    console.log(updatedState.updated_input_error);
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    let isValid = true;

    if (updatedState_Request.reqName === "") {
      isValid = false;
      dispatch_Request({
        type: "error",
        value: "Please enter your Name",
        key: "errorName",
      });
    }
    if (updatedState_Request.reqName === "") {
      isValid = false;
      dispatch_Request({
        type: "error",
        value: "Please enter Age",
        key: "errorAge",
      });
    }
    if (updatedState_Request.reqBloodGroup === "") {
      isValid = false;
      dispatch_Request({
        type: "error",
        value: "Please enter Required BloodGroup",
        key: "errorBloodGroup",
      });
    }
    if (
      updatedState_Request.reqPhone === "" ||
      updatedState_Request.reqPhone.length !== 11
    ) {
      isValid = false;
      dispatch_Request({
        type: "error",
        value: "Please enter your correct form of number",
        key: "errorPhone",
      });
    }
    if (updatedState_Request.reqHospital === "") {
      isValid = false;
      dispatch_Request({
        type: "error",
        value: "Please enter Hospital Name",
        key: "errorHospital",
      });
    }
    if (updatedState_Request.reqPints === "") {
      isValid = false;
      dispatch_Request({
        type: "error",
        value: "Please enter Required Pints",
        key: "errorPints",
      });
    }
    if (isValid) {
      SetBloodReq();
      updatedState_Request.reqName = "";
      updatedState_Request.reqPhone = "";
      updatedState_Request.reqAge = "";
      updatedState_Request.reqBloodGroup = "";
      updatedState_Request.reqPints = "";
      updatedState_Request.reqHospital = "";
      updatedState_Request.reqIsPickandDrop = false;
      updatedState_Request.reqIsExchange = false;
      updatedState_Request.reqIsOpen = false;
      updatedState_Request.reqIsAuthentic = false;
      updatedState_Request.reqIsSolved = false;
      updatedState_Request.errorName = "";
      updatedState_Request.errorPhone = "";
      updatedState_Request.errorAge = "";
      updatedState_Request.errorBloodGroup = "";
      updatedState_Request.errorPint = "";
      updatedState_Request.errorHospital = "";
      updatedState_Request.errorIsPickandDrop = false;
      updatedState_Request.errorIsExchange = false;
      updatedState_Request.errorIsOpen = false;
      updatedState_Request.errorIsAuthentic = false;
      updatedState_Request.errorIsSolved = false;
      handleCloseRequest();
    }
    console.log(updatedState.updated_input_error);
  };
  const SetBloodReq = (async) => {
    axios
      .post(`http://localhost:3001/api/setBloodReq`, {
        reqName: updatedState_Request.reqName,
        reqPhone: updatedState_Request.reqPhone,
        reqAge: updatedState_Request.reqAge,
        reqBloodGroup: updatedState_Request.reqBloodGroup,
        reqPints: updatedState_Request.reqPints,
        reqHospital: updatedState_Request.reqHospital,
        reqIsPickandDrop: updatedState_Request.reqIsPickandDrop,
        reqIsExchange: updatedState_Request.reqIsExchange,
        reqIsOpen: updatedState_Request.reqIsOpen,
        reqIsAuthentic: updatedState_Request.reqIsAuthentic,
        reqIsSolved: updatedState_Request.reqIsSolved,
      })
      .then((response) => {
        alert(console.log(updatedState_Request));
      });
  };

  const SetDonor = (async) => {
    axios
      .post(`http://localhost:3001/api/setdonor`, {
        donorName: updatedState.donorName,
        donorGender: updatedState.donorGender,
        donorAge: updatedState.donorAge,
        donorBloodGroup: updatedState.donorBloodGroup,
        donorPhone: updatedState.donorPhone,
        donorCity: updatedState.donorCity,
      })
      .then((response) => {
        alert(response);
      });
  };

  return (
    <>
      <WhiteSection />

      <section className="hadith colored-section">
        <h1>وَ مَنْ اَحْیَاهَا فَكَاَنَّمَاۤ اَحْیَا النَّاسَ جَمِیْعًاؕ</h1>
        <h3>
          "and whoever saves a life,
          <br />
          it will be as if they saved all of humanity"
        </h3>
        <h5>Quran 5:32</h5>
      </section>

      <AboutUs />

      <section className="colored-section" id="services">
        <div className="row-container">
          <div className="row-heading">
            <div className="section-heading">
              <h5>Services</h5>
              <div>
                <h1>Best Services</h1>
                <button className="button">View More</button>
              </div>
            </div>
          </div>

          <div className="row">
            {/* ////////////////////////////// BLOOD DONATION ///////////////////////////////////// */}
            <div className="column col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="action-img">
                    <img src={bloodDonationImage} alt="" />
                  </div>
                  <div className="action-txt">
                    <h2>Blood Donation</h2>
                    <p>
                      Register to be a blood donor for AUBDS by filling the
                      form. Give blood and save lives together. Find out more
                      about blood donation.
                    </p>
                    <div>
                      <Modal
                        show={show}
                        onHide={handleCloseDonor}
                        animation={TouchRipple}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>DONATE BLOOD</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form>
                            <div className="form-group">
                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                Name:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={updatedState.donorName}
                                id="donor-name"
                                onChange={(e) => {
                                  dispatch({
                                    type: "update_input",
                                    value: e.target.value,
                                    key: "donorName",
                                  });
                                }}
                              />
                              <p>{updatedState.errorName}</p>
                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                Gender:
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                name="Gender"
                                value={updatedState.donorGender}
                                onChange={(e) => {
                                  dispatch({
                                    type: "update_input",
                                    value: e.target.value,
                                    key: "donorGender",
                                  });
                                }}
                              >
                                <option value="" disabled select>
                                  {" "}
                                  Select The Gender
                                </option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                              <p>{updatedState.errorGender}</p>
                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                Blood Group:
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect2"
                                value={updatedState.donorBloodGroup}
                                onChange={(e) => {
                                  dispatch({
                                    type: "update_input",
                                    value: e.currentTarget.value,
                                    key: "donorBloodGroup",
                                  });
                                }}
                              >
                                <option value="" disabled select>
                                  {" "}
                                  Select The Blood Group
                                </option>
                                <option>A RhD positive (A+)</option>
                                <option>A RhD negative (A-)</option>
                                <option>B RhD positive (B+)</option>
                                <option>B RhD negative (B-)</option>
                                <option>O RhD positive (O+)</option>
                                <option>O RhD negative (O-)</option>
                                <option>AB RhD positive (AB+)</option>
                                <option>AB RhD positive (AB-)</option>
                              </select>

                              <p>{updatedState.errorBloodGroup}</p>

                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                Age:
                              </label>
                              <input
                                type="Number"
                                className="form-control"
                                id="donor-age"
                                name="donorAge"
                                value={updatedState.donorAge}
                                onChange={(e) => {
                                  dispatch({
                                    type: "update_input",
                                    value: e.target.value,
                                    key: "donorAge",
                                  });
                                }}
                              />
                              <p>{updatedState.errorAge}</p>

                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                Phone:
                              </label>
                              <input
                                type="Number"
                                className="form-control"
                                id="donor-name"
                                name="donorPhone"
                                onChange={(e) => {
                                  dispatch({
                                    type: "update_input",
                                    value: e.target.value,
                                    key: "donorPhone",
                                  });
                                }}
                              />
                              <p>{updatedState.errorPhone}</p>
                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                City:
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect3"
                                name="donorCity"
                                value={updatedState.donorCity}
                                onChange={(e) => {
                                  dispatch({
                                    type: "update_input",
                                    value: e.target.value,
                                    key: "donorCity",
                                  });
                                }}
                              >
                                <option value="" disabled selected>
                                  Select The City
                                </option>
                                {list.map((item) => (
                                  <option value={item}>{item}</option>
                                ))}
                              </select>
                              <p>{updatedState.errorCity}</p>
                            </div>
                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="danger" onClick={handleCloseDonor}>
                            Close
                          </Button>
                          <Button variant="danger" onClick={handleSubmitDonor}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Button variant="danger" onClick={handleShowDonor}>
                        Click
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////////////////////////// REQUEST BLOOD ///////////////////////////////////// */}
            <div className="column col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="action-img">
                    <img src={bloodRequestImage} alt="" />
                  </div>
                  <div className="action-txt">
                    <h2>Request Blood</h2>
                    <p>
                      Please fill the form to post your blood request. We will
                      inform our donors and will contact you soon. We hope the
                      needy people recover soon.
                    </p>
                  </div>
                  <div>
                    <Modal
                      show={show1}
                      onHide={handleCloseRequest}
                      animation={TouchRipple}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>REQUEST BLOOD</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <div className="form-group">
                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Name:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="reqName"
                              value={updatedState_Request.reqName}
                              onChange={(e) => {
                                dispatch_Request({
                                  type: "updated_req",
                                  value: e.target.value,
                                  key: "reqName",
                                });
                              }}
                            />
                            <p>{updatedState_Request.errorName}</p>

                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Age:
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="reqAge"
                              value={updatedState_Request.reqAge}
                              onChange={(e) => {
                                dispatch_Request({
                                  type: "updated_req",
                                  value: e.target.value,
                                  key: "reqAge",
                                });
                              }}
                            />
                            <p>{updatedState_Request.errorAge}</p>
                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Phone:
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="reqPhone"
                              value={updatedState_Request.reqPhone}
                              onChange={(e) => {
                                dispatch_Request({
                                  type: "updated_req",
                                  value: e.target.value,
                                  key: "reqPhone",
                                });
                              }}
                            />
                            <p>{updatedState_Request.errorPhone}</p>

                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Blood Group:
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect2"
                              name="reqBloodGroup"
                              value={updatedState_Request.reqBloodGroup}
                              onChange={(e) => {
                                dispatch_Request({
                                  type: "updated_req",
                                  value: e.target.value,
                                  key: "reqBloodGroup",
                                });
                              }}
                            >
                              <option value="" disabled selected>
                                {" "}
                                Select The Blood Group
                              </option>
                              <option>A RhD positive (A+)</option>
                              <option>A RhD negative (A-)</option>
                              <option>B RhD positive (B+)</option>
                              <option>B RhD negative (B-)</option>
                              <option>O RhD positive (O+)</option>
                              <option>O RhD negative (O-)</option>
                              <option>AB RhD positive (AB+)</option>
                              <option>AB RhD positive (AB-)</option>
                            </select>
                            <p>{updatedState_Request.errorBloodGroup}</p>

                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Pints:
                            </label>
                            <input
                              type="Number"
                              className="form-control"
                              name="reqPints"
                              value={updatedState_Request.reqPints}
                              onChange={(e) => {
                                dispatch_Request({
                                  type: "updated_req",
                                  value: e.target.value,
                                  key: "reqPints",
                                });
                              }}
                            />
                            <p>{updatedState_Request.errorPints}</p>
                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Hospital:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="reqHospital"
                              value={updatedState_Request.reqHospital}
                              onChange={(e) => {
                                dispatch_Request({
                                  type: "updated_req",
                                  value: e.target.value,
                                  key: "reqHospital",
                                });
                              }}
                            />
                            <p>{updatedState_Request.errorHospital}</p>
                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Pick and Drop:
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect2"
                              name="reqIsPickandDrop"
                              value={updatedState_Request.reqIsPickandDrop}
                              onChange={(e) => {
                                dispatch_Request({
                                  type: "updated_req",
                                  value: e.target.value,
                                  key: "reqIsPickandDrop",
                                });
                              }}
                            >
                              <option value="" disabled selected>
                                {" "}
                                Pick And Drop
                              </option>
                              <option>False</option>
                              <option>True</option>
                            </select>
                          </div>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseRequest}>
                          Close
                        </Button>
                        <Button variant="danger" onClick={handleSubmitRequest}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button variant="danger" onClick={handleShowRequest}>
                      Click
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////////////////////////// DONATE MONEY ///////////////////////////////////// */}
            <div className="column col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="action-img">
                    <img src={donateMoneyImage} alt="" />
                  </div>
                  <div className="action-txt">
                    <h2>Donate Money</h2>
                    <p>
                      If you are unable to donate blood, you can still help our
                      cause by donating money. Donated money will be used in our
                      different projects ahead.
                    </p>
                  </div>
                  <div>
                    <Modal
                      show={show2}
                      onHide={handleCloseRequest}
                      animation={TouchRipple}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>DONATE MONEY</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <div className="form-group">
                            <label
                              for="recipient-name"
                              className="col-form-label"
                            >
                              Recipient:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="recipient-name"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              for="message-text"
                              className="col-form-label"
                            >
                              Message:
                            </label>
                            <textarea
                              className="form-control"
                              id="message-text"
                            ></textarea>
                          </div>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseDonate}>
                          Close
                        </Button>
                        <Button variant="danger" onClick={handleCloseDonate}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button variant="danger" onClick={handleShowDonate}>
                      Click
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Achievement />

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
            <div className="col-xl-4">
              <div className="card">
                <div className="event-img">
                  <img src={QalbeSaleem8} alt="qalbesaleem8" />
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
                <h2>Qalb e Saleem 8</h2>
                <p>
                  The biggest event of AUBDS is Project Qalb e Saleem 8. A blood
                  camp for those who are in dire need of your support through
                  blood donation.
                </p>
                <a className="read-more" href="#none">
                  Read more
                </a>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card">
                <div className="event-img">
                  <img src={QalbeSaleem7} alt="qalbesaleem7" />
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
                <h2>Qalb e Saleem 7</h2>
                <p>
                  AUBDS conducted a 3 day blood camp at Air University Islamabad
                  campus. The event was succesful and we collected a lot of
                  blood bags.
                </p>
                <a className="read-more" href="#none">
                  Read more
                </a>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card">
                <div className="event-img">
                  <img src={QuateAkhwat} alt="QuateAkhwat" />
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
                <h2>Quat e Akhwat</h2>
                <p>
                  During COVID-19 we destributed rations to 106 families across
                  16 cities of Pakistan, supported 10 families in medical bills,
                  fees, rental payments etc.
                </p>
                <a className="read-more" href="#none">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="joinus">
        <div className="society">
          <h5>Join Us</h5>
          <h1>Become a Member</h1>
          <p>
            If you are a student of Air University Islamabad, click on join and
            fill the form to become part of Air University Blood Donor Society.
          </p>
          <div>
            <button>Join</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
