import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

function Index() {
  return (
    <Container className="p-0 getLatest" fluid>
      <Row className="m-0 p-0">
        <Col md={4} style={{ backgroundColor: "#1F3442" }}>
          <form className="py-5 pl-5 getLatestForm">
            <h2 className="text-white">
              Get the <br />
              Latest News
            </h2>
            <div className="bar">
              <div className="red"></div>
              <div className="white"></div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-white">Firstname</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-white">Lastname</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="text-white">Business Email</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="text-white">Company Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="text-white">Job Title</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <p className="termsText">
                  By clicking the "Stay Informed" button you consent to Newland
                  Chase sending immigration news alerts, company news, and
                  product updates. You may unsubscribe at any time.
                </p>
              </div>

              <div className="col-md-12">
                <hr />
              </div>
              <div className="col-md-12">
                <button>
                  Stay Informed <span>&gt;</span>
                </button>
              </div>
            </div>
          </form>
        </Col>
        <Col md={8} style={{ backgroundColor: "#EEEEEE" }}>
          <Row>
            <Col md={6}>
              <h2>
                Upcoming & On-Demand
                <br />
                Webinars
              </h2>
              <div className="bar">
                <div className="red"></div>
                <div className="white"></div>
              </div>
            </Col>
          </Row>
          <Row className="p-3">
            <Col md={6} className="p-5 newsBox">
              <p className="date">August 25</p>
              <p className="details">
                Live Webinar | Asia Reopening: Current China Travel and
                Immigration Strategies
              </p>
            </Col>
            <Col md={6} className="p-5 newsBox">
              <p className="date">August 25</p>
              <p className="details">
                Live Webinar | Asia Reopening: Current China Travel and
                Immigration Strategies
              </p>
            </Col>
            <Col
              md={6}
              className="p-5 newsBox"
              style={{ borderBottom: "none" }}
            >
              <p className="date">August 25</p>
              <p className="details">
                Live Webinar | Asia Reopening: Current China Travel and
                Immigration Strategies
              </p>
            </Col>
            <Col
              md={6}
              className="p-5 newsBox"
              style={{ borderBottom: "none" }}
            >
              <p className="date">August 25</p>
              <p className="details">
                Live Webinar | Asia Reopening: Current China Travel and
                Immigration Strategies
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
