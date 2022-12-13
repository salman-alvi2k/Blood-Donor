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
import axios from "axios";
import WhiteSection from "../WhiteSection/WhiteSection";
import AboutUs from "../AboutUs/AboutUs";
import Achievement from "../Achivement/Achievement";

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
  const [updatedState_Request, dispatch_Request] = useReducer(reducer_Request, initialState_Request);

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
                                <option value="Islamabad">Islamabad</option>
                                <option value="" disabled>
                                  Punjab Cities
                                </option>
                                <option value="Ahmed Nager Chatha">
                                  Ahmed Nager Chatha
                                </option>
                                <option value="Ahmadpur East">
                                  Ahmadpur East
                                </option>
                                <option value="Ali Khan Abad">
                                  Ali Khan Abad
                                </option>
                                <option value="Alipur">Alipur</option>
                                <option value="Arifwala">Arifwala</option>
                                <option value="Attock">Attock</option>
                                <option value="Bhera">Bhera</option>
                                <option value="Bhalwal">Bhalwal</option>
                                <option value="Bahawalnagar">
                                  Bahawalnagar
                                </option>
                                <option value="Bahawalpur">Bahawalpur</option>
                                <option value="Bhakkar">Bhakkar</option>
                                <option value="Burewala">Burewala</option>
                                <option value="Chillianwala">
                                  Chillianwala
                                </option>
                                <option value="Chakwal">Chakwal</option>
                                <option value="Chichawatni">Chichawatni</option>
                                <option value="Chiniot">Chiniot</option>
                                <option value="Chishtian">Chishtian</option>
                                <option value="Daska">Daska</option>
                                <option value="Darya Khan">Darya Khan</option>
                                <option value="Dera Ghazi Khan">
                                  Dera Ghazi Khan
                                </option>
                                <option value="Dhaular">Dhaular</option>
                                <option value="Dina">Dina</option>
                                <option value="Dinga">Dinga</option>
                                <option value="Dipalpur">Dipalpur</option>
                                <option value="Faisalabad">Faisalabad</option>
                                <option value="Ferozewala">Ferozewala</option>
                                <option value="Fateh Jhang">Fateh Jang</option>
                                <option value="Ghakhar Mandi">
                                  Ghakhar Mandi
                                </option>
                                <option value="Gojra">Gojra</option>
                                <option value="Gujranwala">Gujranwala</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Gujar Khan">Gujar Khan</option>
                                <option value="Hafizabad">Hafizabad</option>
                                <option value="Haroonabad">Haroonabad</option>
                                <option value="Hasilpur">Hasilpur</option>
                                <option value="Haveli Lakha">
                                  Haveli Lakha
                                </option>
                                <option value="Jatoi">Jatoi</option>
                                <option value="Jalalpur">Jalalpur</option>
                                <option value="Jattan">Jattan</option>
                                <option value="Jampur">Jampur</option>
                                <option value="Jaranwala">Jaranwala</option>
                                <option value="Jhang">Jhang</option>
                                <option value="Jhelum">Jhelum</option>
                                <option value="Kalabagh">Kalabagh</option>
                                <option value="Karor Lal Esan">
                                  Karor Lal Esan
                                </option>
                                <option value="Kasur">Kasur</option>
                                <option value="Kamalia">Kamalia</option>
                                <option value="Kamoke">Kamoke</option>
                                <option value="Khanewal">Khanewal</option>
                                <option value="Khanpur">Khanpur</option>
                                <option value="Kharian">Kharian</option>
                                <option value="Khushab">Khushab</option>
                                <option value="Kot Addu">Kot Addu</option>
                                <option value="Jauharabad">Jauharabad</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Lalamusa">Lalamusa</option>
                                <option value="Layyah">Layyah</option>
                                <option value="Liaquat Pur">Liaquat Pur</option>
                                <option value="Lodhran">Lodhran</option>
                                <option value="Malakwal">Malakwal</option>
                                <option value="Mamoori">Mamoori</option>
                                <option value="Mailsi">Mailsi</option>
                                <option value="Mandi Bahauddin">
                                  Mandi Bahauddin
                                </option>
                                <option value="Mian Channu">Mian Channu</option>
                                <option value="Mianwali">Mianwali</option>
                                <option value="Multan">Multan</option>
                                <option value="Murree">Murree</option>
                                <option value="Muridke">Muridke</option>
                                <option value="Mianwali Bangla">
                                  Mianwali Bangla
                                </option>
                                <option value="Muzaffargarh">
                                  Muzaffargarh
                                </option>
                                <option value="Narowal">Narowal</option>
                                <option value="Nankana Sahib">
                                  Nankana Sahib
                                </option>
                                <option value="Okara">Okara</option>
                                <option value="Renala Khurd">
                                  Renala Khurd
                                </option>
                                <option value="Pakpattan">Pakpattan</option>
                                <option value="Pattoki">Pattoki</option>
                                <option value="Pir Mahal">Pir Mahal</option>
                                <option value="Qaimpur">Qaimpur</option>
                                <option value="Qila Didar Singh">
                                  Qila Didar Singh
                                </option>
                                <option value="Rabwah">Rabwah</option>
                                <option value="Raiwind">Raiwind</option>
                                <option value="Rajanpur">Rajanpur</option>
                                <option value="Rahim Yar Khan">
                                  Rahim Yar Khan
                                </option>
                                <option value="Rawalpindi">Rawalpindi</option>
                                <option value="Sadiqabad">Sadiqabad</option>
                                <option value="Safdarabad">Safdarabad</option>
                                <option value="Sahiwal">Sahiwal</option>
                                <option value="Sangla Hill">Sangla Hill</option>
                                <option value="Sarai Alamgir">
                                  Sarai Alamgir
                                </option>
                                <option value="Sargodha">Sargodha</option>
                                <option value="Shakargarh">Shakargarh</option>
                                <option value="Sheikhupura">Sheikhupura</option>
                                <option value="Sialkot">Sialkot</option>
                                <option value="Sohawa">Sohawa</option>
                                <option value="Soianwala">Soianwala</option>
                                <option value="Siranwali">Siranwali</option>
                                <option value="Talagang">Talagang</option>
                                <option value="Taxila">Taxila</option>
                                <option value="Toba Tek Singh">
                                  Toba Tek Singh
                                </option>
                                <option value="Vehari">Vehari</option>
                                <option value="Wah Cantonment">
                                  Wah Cantonment
                                </option>
                                <option value="Wazirabad">Wazirabad</option>
                                <option value="" disabled>
                                  <strong>Sindh Cities</strong>
                                </option>
                                <option value="Badin">Badin</option>
                                <option value="Bhirkan">Bhirkan</option>
                                <option value="Rajo Khanani">
                                  Rajo Khanani
                                </option>
                                <option value="Chak">Chak</option>
                                <option value="Dadu">Dadu</option>
                                <option value="Digri">Digri</option>
                                <option value="Diplo">Diplo</option>
                                <option value="Dokri">Dokri</option>
                                <option value="Ghotki">Ghotki</option>
                                <option value="Haala">Haala</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Islamkot">Islamkot</option>
                                <option value="Jacobabad">Jacobabad</option>
                                <option value="Jamshoro">Jamshoro</option>
                                <option value="Jungshahi">Jungshahi</option>
                                <option value="Kandhkot">Kandhkot</option>
                                <option value="Kandiaro">Kandiaro</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Kashmore">Kashmore</option>
                                <option value="Keti Bandar">Keti Bandar</option>
                                <option value="Khairpur">Khairpur</option>
                                <option value="Kotri">Kotri</option>
                                <option value="Larkana">Larkana</option>
                                <option value="Matiari">Matiari</option>
                                <option value="Mehar">Mehar</option>
                                <option value="Mirpur Khas">Mirpur Khas</option>
                                <option value="Mithani">Mithani</option>
                                <option value="Mithi">Mithi</option>
                                <option value="Mehrabpur">Mehrabpur</option>
                                <option value="Moro">Moro</option>
                                <option value="Nagarparkar">Nagarparkar</option>
                                <option value="Naudero">Naudero</option>
                                <option value="Naushahro Feroze">
                                  Naushahro Feroze
                                </option>
                                <option value="Naushara">Naushara</option>
                                <option value="Nawabshah">Nawabshah</option>
                                <option value="Nazimabad">Nazimabad</option>
                                <option value="Qambar">Qambar</option>
                                <option value="Qasimabad">Qasimabad</option>
                                <option value="Ranipur">Ranipur</option>
                                <option value="Ratodero">Ratodero</option>
                                <option value="Rohri">Rohri</option>
                                <option value="Sakrand">Sakrand</option>
                                <option value="Sanghar">Sanghar</option>
                                <option value="Shahbandar">Shahbandar</option>
                                <option value="Shahdadkot">Shahdadkot</option>
                                <option value="Shahdadpur">Shahdadpur</option>
                                <option value="Shahpur Chakar">
                                  Shahpur Chakar
                                </option>
                                <option value="Shikarpaur">Shikarpaur</option>
                                <option value="Sukkur">Sukkur</option>
                                <option value="Tangwani">Tangwani</option>
                                <option value="Tando Adam Khan">
                                  Tando Adam Khan
                                </option>
                                <option value="Tando Allahyar">
                                  Tando Allahyar
                                </option>
                                <option value="Tando Muhammad Khan">
                                  Tando Muhammad Khan
                                </option>
                                <option value="Thatta">Thatta</option>
                                <option value="Umerkot">Umerkot</option>
                                <option value="Warah">Warah</option>
                                <option value="" disabled>
                                  <strong>Khyber Cities</strong>
                                </option>
                                <option value="Abbottabad">Abbottabad</option>
                                <option value="Adezai">Adezai</option>
                                <option value="Alpuri">Alpuri</option>
                                <option value="Akora Khattak">
                                  Akora Khattak
                                </option>
                                <option value="Ayubia">Ayubia</option>
                                <option value="Banda Daud Shah">
                                  Banda Daud Shah
                                </option>
                                <option value="Bannu">Bannu</option>
                                <option value="Batkhela">Batkhela</option>
                                <option value="Battagram">Battagram</option>
                                <option value="Birote">Birote</option>
                                <option value="Chakdara">Chakdara</option>
                                <option value="Charsadda">Charsadda</option>
                                <option value="Chitral">Chitral</option>
                                <option value="Daggar">Daggar</option>
                                <option value="Dargai">Dargai</option>
                                <option value="Darya Khan">Darya Khan</option>
                                <option value="Dera Ismail Khan">
                                  Dera Ismail Khan
                                </option>
                                <option value="Doaba">Doaba</option>
                                <option value="Dir">Dir</option>
                                <option value="Drosh">Drosh</option>
                                <option value="Hangu">Hangu</option>
                                <option value="Haripur">Haripur</option>
                                <option value="Karak">Karak</option>
                                <option value="Kohat">Kohat</option>
                                <option value="Kulachi">Kulachi</option>
                                <option value="Lakki Marwat">
                                  Lakki Marwat
                                </option>
                                <option value="Latamber">Latamber</option>
                                <option value="Madyan">Madyan</option>
                                <option value="Mansehra">Mansehra</option>
                                <option value="Mardan">Mardan</option>
                                <option value="Mastuj">Mastuj</option>
                                <option value="Mingora">Mingora</option>
                                <option value="Nowshera">Nowshera</option>
                                <option value="Paharpur">Paharpur</option>
                                <option value="Pabbi">Pabbi</option>
                                <option value="Peshawar">Peshawar</option>
                                <option value="Saidu Sharif">
                                  Saidu Sharif
                                </option>
                                <option value="Shorkot">Shorkot</option>
                                <option value="Shewa Adda">Shewa Adda</option>
                                <option value="Swabi">Swabi</option>
                                <option value="Swat">Swat</option>
                                <option value="Tangi">Tangi</option>
                                <option value="Tank">Tank</option>
                                <option value="Thall">Thall</option>
                                <option value="Timergara">Timergara</option>
                                <option value="Tordher">Tordher</option>
                                <option value="" disabled>
                                  <strong>Balochistan Cities</strong>
                                </option>
                                <option value="Awaran">Awaran</option>
                                <option value="Barkhan">Barkhan</option>
                                <option value="Chagai">Chagai</option>
                                <option value="Dera Bugti">Dera Bugti</option>
                                <option value="Gwadar">Gwadar</option>
                                <option value="Harnai">Harnai</option>
                                <option value="Jafarabad">Jafarabad</option>
                                <option value="Jhal Magsi">Jhal Magsi</option>
                                <option value="Kacchi">Kacchi</option>
                                <option value="Kalat">Kalat</option>
                                <option value="Kech">Kech</option>
                                <option value="Kharan">Kharan</option>
                                <option value="Khuzdar">Khuzdar</option>
                                <option value="Killa Abdullah">
                                  Killa Abdullah
                                </option>
                                <option value="Killa Saifullah">
                                  Killa Saifullah
                                </option>
                                <option value="Kohlu">Kohlu</option>
                                <option value="Lasbela">Lasbela</option>
                                <option value="Lehri">Lehri</option>
                                <option value="Loralai">Loralai</option>
                                <option value="Mastung">Mastung</option>
                                <option value="Musakhel">Musakhel</option>
                                <option value="Nasirabad">Nasirabad</option>
                                <option value="Nushki">Nushki</option>
                                <option value="Panjgur">Panjgur</option>
                                <option value="Pishin Valley">
                                  Pishin Valley
                                </option>
                                <option value="Quetta">Quetta</option>
                                <option value="Sherani">Sherani</option>
                                <option value="Sibi">Sibi</option>
                                <option value="Sohbatpur">Sohbatpur</option>
                                <option value="Washuk">Washuk</option>
                                <option value="Zhob">Zhob</option>
                                <option value="Ziarat">Ziarat</option>
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
