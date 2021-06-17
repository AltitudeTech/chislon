import React from "react";
import { Row, Col } from "reactstrap";
import Jumbotron from "../Jumbotron";

const ContactJumbotron = (props) => {
  return (
    // <Jumbotron title="CONTACT">
    <Jumbotron>
      <section className="contactJumboBg p-5">
        <Row>
          <Col md={{ size: 6 }}>
            <div className="jumbotronContent">
              <h5>GET IN TOUCH WITH US</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
              <div className="title">Telephone Number</div>
              <p>+234 801 2222 222</p>
              <div className="title">Email Address</div>
              <p>info@chislonbroadway.com</p>
              <div className="title">Office Address</div>
              <p>info@chislonbroadway.com</p>
            </div>
          </Col>
        </Row>
      </section>
      <style jsx>{`
        .contactJumboBg {
          background-image: url(/static/images/contact/contact.png),
            linear-gradient(114.17deg, #003e52 -0.69%, #00b8f2 100%);
          background-repeat: no-repeat;
          background-size: cover;
        }
        .jumbotronContent {
          max-width: 500px;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 20px;
        }
        .jumbotronContent h5 {
          color: #ffda42;
          font-weight: 300;
          text-transform: uppercase;
        }
        .jumbotronContent p {
          color: #fff;
        }
        .title {
          background-color: #ffda42;
          padding: 3px 10px;
          width: 200px;
          color: #fff;
          font-weight: 300;
          color: #000;
          clip-path: polygon(0 0, 82% 0, 100% 100%, 0% 100%);
        }
        .title + p {
          margin-left: 20px;
          font-size: 1.3rem;
        }
      `}</style>
    </Jumbotron>
  );
};

export default ContactJumbotron;
