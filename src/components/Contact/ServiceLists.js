import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import dynamic from "next/dynamic";
import { Loading, encode } from "../../util";
import SectionStyle from "../styles/SectionStyle";
import Heading3Style from "../styles/Heading3";
import ButtonStyle from "../styles/ButtonStyle";

const SweetAlert = dynamic(
  () => {
    return import("sweetalert2-react");
  },
  { ssr: false }
);

const initialValues = {
  salutation: "Mr",
  firstname: "",
  lastname: "",
  media: "",
  position: "",
  nationality: "Afghanistan",
  country_of_residence: "Afghanistan",
  website: "",
  countries: [],
  phone: "",
  email: "",
  message: "",
};
const Study = () => {
  const [form, setForm] = useState(initialValues);
  const [alertState, setAlertState] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const getCountries = async () => {
    const result = await axios("https://restcountries.eu/rest/v2/all");
    setForm((prevValues) => ({
      ...prevValues,
      countries: [...result.data],
    }));
  };
  useEffect(() => {
    getCountries();
  }, []);

  const handleSubmit = (event) => {
    setBtnState(true);
    event.preventDefault();
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...form,
      }),
    })
      .then(() => {
        setBtnState(false);
        setForm(initialValues);
        setAlertState(true);
      })
      .catch((error) => {
        alert("Please, try submitting your data again");
        setBtnState(false);
        // setForm(initialValues);
        console.log(error);
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <SectionStyle className="serviceSectionStyle">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <div className="formWrapper">
            <Heading3Style>Enquiry Form</Heading3Style>
            <p>Send us a message</p>
            <form
              name="contact_form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <SweetAlert
                show={alertState}
                title="Contact Message"
                text="Your Message Has been Successfully Submitted"
                onConfirm={() => setAlertState(false)}
              />
              <Row>
                <Col sm={12} md={1}>
                  <div className="form-group">
                    <label>Salutation</label>
                    <select
                      name="salutation"
                      id="salutation"
                      className="form-control"
                      value={form.salutation}
                      onChange={handleChange}
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof.">Prof.</option>
                    </select>
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="form-control"
                      value={form.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form-control"
                      value={form.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Media Organization</label>
                    <input
                      type="text"
                      name="media"
                      id="media"
                      className="form-control"
                      value={form.media}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Position</label>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      className="form-control"
                      value={form.position}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label htmlFor="">
                      NATIONALITY <span className="text-danger">*</span>
                    </label>
                    <select
                      name="nationality"
                      id="nationality"
                      value={form.nationality}
                      onChange={handleChange}
                      className="form-control"
                    >
                      {form.countries.map((country, index) => {
                        return (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label htmlFor="">
                      COUNTRY OF RESIDENCE{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="country_of_residence"
                      id="country_of_residence"
                      value={form.country_of_residence}
                      onChange={handleChange}
                      className="form-control"
                    >
                      {form.countries.map((country, index) => {
                        return (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Website</label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      className="form-control"
                      value={form.website}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      className="form-control"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="10"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Note</label>
                    <p>
                      All information provided is kept highly confidential and
                      subject to our privacy policy.
                    </p>
                  </div>
                </Col>

                <Col md={12}>
                  <div className="form-group text-center">
                    <ButtonStyle type="submit" disabled={btnState}>
                      Send Message {btnState && <Loading />}
                    </ButtonStyle>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
      <style>
        {`
        .serviceSectionStyle{
          padding : 5rem 3rem ;
          background-color: #f2f2f2 ;
        }
       .formWrapper{
         margin : 20px auto ;
         background-color : #e5e5e5 ;
         padding : 30px ;
        }
        .formWrapper label{
          display : block ;
        }
        .form-group .form-control {
          border-radius: 0;
          border: 0;
          box-shadow: none; 
        }
        .form-group .form-control:focus {
          box-shadow: -1px 3px 11px -3px #01384B;
          border : 1px solid #01384B ;
        }
        textarea,
        textarea:focus{
          resize : none ;
          outline:none ;
        }

      `}
      </style>
    </SectionStyle>
  );
};

export default Study;

const Services = [
  { text: "Business Investment", image: "business.jpg" },
  { text: "Professional Work", image: "work.jpg" },
  { text: "Education", image: "education.jpg" },
  { text: "Residency & Citizenship ", image: "residency.jpg" },
  { text: "Medical Treatment", image: "medical.jpg" },
  { text: "Holidays & Leisure", image: "holiday.jpg" },
];
