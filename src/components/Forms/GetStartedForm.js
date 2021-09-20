import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
import { Loading, encode } from "../../util";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ButtonStyle from "../styles/ButtonStyle";
import "./GetStartedForm.scss";

const animatedComponents = makeAnimated();
const SweetAlert = dynamic(
  () => {
    return import("sweetalert2-react");
  },
  { ssr: false }
);

const options = [
  { value: "Citizenship by Investment", label: "Citizenship by Investment" },
  { value: "Residency by Investment", label: "Residency by Investment" },
  { value: "High Networth Investor", label: "High Networth Investor" },
  { value: "Work Abroad", label: "Work Abroad" },
  { value: "Study Abroad", label: "Study Abroad" },
  { value: "Healthcare Abroad", label: "Healthcare Abroad" },
];

const initialValues = {
  countries: [],
  firstname: "",
  middlename: "",
  lastname: "",
  phone: "",
  email: "",
  gender: "",
  serviceRequired: "Citizenship by Investment",
  mutltiSelect: [options[0]],
  // marital_status: "",
  // nationality: "",
  // current_country_of_residence: "",
  // professional_experience: "",
  // prove_experience: "",
  // representation: "",
  // how_we_contact: "",
  // how_you_found_us: "",
  // question: "",
};

const CertifiedPartnerForm = () => {
  const [form, setForm] = useState(initialValues);
  const [alertState, setAlertState] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const getLocation = async () => {
    try {
      const response = await axios(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEOLOCATION_KEY}`
      );
      const data = await response.data;
      setForm({ ...form, phone: data.calling_code });
    } catch (error) {
      console.log(error.message, 2323232);
      setForm((prevValues) => ({
        ...prevValues,
        phone: "+234",
      }));
    }
  };
  const getCountries = async () => {
    const result = await axios("https://restcountries.eu/rest/v2/all");
    setForm((prevValues) => ({
      ...prevValues,
      countries: [...result.data],
    }));
  };
  useEffect(() => {
    getCountries();
    getLocation();
  }, []);

  const handleSubmit = (event) => {
    setBtnState(true);
    event.preventDefault();
    if (form.mutltiSelect.length < 1) {
      alert("Please Select a service");
    } else {
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
    }
    setBtnState(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleMultiSelect = (value) => {
    setForm((prevValues) => ({
      ...prevValues,
      mutltiSelect: [...value],
    }));
  };

  return (
    <Container className="mb-5 getStartedForm">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <form
            className="mt-5"
            name="institute_getstartedform"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <SweetAlert
              show={alertState}
              title="Chislon Institute"
              text="Your Message Has been Successfully Submitted"
              onConfirm={() => setAlertState(false)}
            />
            <Row>
              <Col md={12}>
                <div className="form-group">
                  <label htmlFor="" className="">
                    FIRST NAME <span className="text-danger">*</span>
                  </label>
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
              <Col md={12}>
                <div className="form-group">
                  <label htmlFor="">
                    MIDDLE NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="middlename"
                    id="middlename"
                    value={form.middlename}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
              <Col md={12}>
                <div className="form-group">
                  <label htmlFor="">
                    LAST NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="form-group">
                  <label htmlFor="">PHONE</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    country="NG"
                    value={form.phone}
                    name="phone"
                    onChange={(phone) => {
                      console.log(phone);
                      setForm((prevValues) => ({
                        ...prevValues,
                        phone,
                      }));
                    }}
                    required
                    className="form-control"
                  />
                </div>
              </Col>
              <Col md={12}>
                <div className="form-group">
                  <label htmlFor="">
                    EMAIL <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={form.email}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
              <Col md={12}>
                <div className="form-group">
                  <label htmlFor="">
                    SERVICE REQUIRED <span className="text-danger">*</span>
                  </label>
                  <Select
                    isMulti
                    components={animatedComponents}
                    className="multiSelect"
                    defaultValue={options[0]}
                    options={options}
                    name="multiSelect"
                    onChange={handleMultiSelect}
                  />
                </div>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={12}>
                <ReCAPTCHA
                  sitekey={process.env.GOOGLE_RECAPTCHA}
                  onChange={() => {
                    setForm((prevValues) => ({
                      ...prevValues,
                      captch: true,
                    }));
                  }}
                  onExpired={() => {
                    setForm((prevValues) => ({
                      ...prevValues,
                      captch: false,
                    }));
                  }}
                  onErrored={() => {
                    setForm((prevValues) => ({
                      ...prevValues,
                      captch: false,
                    }));
                  }}
                />
                <ButtonStyle
                  className="mt-4"
                  style={{
                    backgroundColor: "#004E68",
                    padding: "80xp 25px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                  type="submit"
                  disabled={btnState}
                >
                  SUBMIT {btnState && <Loading />}
                </ButtonStyle>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CertifiedPartnerForm;

export const TextTop = ({ title }) => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h4 className="mt-4">{title}</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            molestias non libero, iusto aliquam ratione nesciunt perferendis
            nisi obcaecati tempore. Expedita itaque eaque enim earum est, ipsam
            vero quis ut. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Natus molestias non libero, iusto aliquam ratione nesciunt
            perferendis nisi obcaecati tempore. Expedita itaque eaque enim earum
            est, ipsam vero quis ut. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Natus molestias non libero, iusto aliquam ratione
            nesciunt perferendis nisi obcaecati tempore. Expedita itaque eaque
            enim earum est, ipsam vero quis ut. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Natus molestias non libero, iusto
            aliquam ratione nesciunt perferendis nisi obcaecati tempore.
            Expedita itaque eaque enim earum est, ipsam vero quis ut.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
