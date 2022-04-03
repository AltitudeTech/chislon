import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import { withTheme } from "styled-components";

const ClientSection = (props) => {
  return (
    <SectionStyle className="clientBoxStyle p-0">
      <Container className="my-5">
        <Row className="" noGutters>
          <Col sm="12" md={{ size: 6 }}>
            <div className="clientDescription">
              <h1>Private Investor</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi veritatis laudantium eum, sed odit ipsum ex ratione
                omnis suscipit, possimus consectetur, odio tenetur quas
                doloremque magnam non? Eveniet, unde!
              </p>
              {/* <Link href="/about/clients">
                <a className="clientButton">Read More</a>
              </Link> */}
            </div>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <div
              className="clientBox"
              style={{
                backgroundImage: "url(/static/images/client/private.jpeg)",
              }}
            >
              {/* <img
              className="bgImage"
              src="/static/images/flags/joinchision.png"
            /> */}
            </div>
          </Col>
        </Row>
        <Row className="" noGutters>
          <Col sm="12" md={{ size: 6 }}>
            <div
              className="clientBox"
              style={{
                backgroundImage: "url(/static/images/client/government.jpeg)",
              }}
            >
              {/* <img
              className="bgImage"
              src="/static/images/flags/joinchision.png"
            /> */}
            </div>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <div className="clientDescription">
              <h1>Government Entity</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi veritatis laudantium eum, sed odit ipsum ex ratione
                omnis suscipit, possimus consectetur, odio tenetur quas
                doloremque magnam non? Eveniet, unde!
              </p>
              {/* <Link href="/about/clients">
                <a className="clientButton">Read More</a>
              </Link> */}
            </div>
          </Col>
        </Row>
        <Row className="" noGutters>
          <Col sm="12" md={{ size: 6 }}>
            <div className="clientDescription">
              <h1>Corporate Investor</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi veritatis laudantium eum, sed odit ipsum ex ratione
                omnis suscipit, possimus consectetur, odio tenetur quas
                doloremque magnam non? Eveniet, unde!
              </p>
              {/* <Link href="/about/clients">
                <a className="clientButton">Read More</a>
              </Link> */}
            </div>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <div
              className="clientBox"
              style={{
                backgroundImage: "url(/static/images/client/corporate.jpeg)",
              }}
            >
              {/* <img
              className="bgImage"
              src="/static/images/flags/joinchision.png"
            /> */}
            </div>
          </Col>
        </Row>
      </Container>
      <style>
        {`
        .clientBoxStyle{
            background-color: #E4E6EB ;
        }
        .clientDescription{
          padding: 6rem 20px ;
          background-color: #c0c2c9 ;
        }
        .clientDescription h1{
          text-transform: uppercase;
        }
        .clientButton{
            // background-color: transparent;
            border: 1px solid #b2b2b2;
            padding: 5px 20px;
            text-decoration: none;
            text-transform: uppercase;
            color: ${props.theme.colors.yellow} !important;
            transition: all 0.5s linear;
            font-weight: 600 ;
            background-color: ${props.theme.colors.main};
          }
          .clientButton:hover{
            text-decoration: none;
            text-transform: uppercase;
            background-color: ${props.theme.colors.yellow};
            color: ${props.theme.colors.main} !important;
            border-radius: 8px;
        }
        .clientBox{
            overflow:hidden;
            min-height : 332px;
            // max-width: 800px; 
            background-color: #AFA280;
            background-image: url(/static/images/flags/joinchision.png) ;
            background-repeat: no-repeat;
            background-size : cover ;
            position: relative;
            padding: 6rem 20px ;
        } 
      `}
      </style>
    </SectionStyle>
  );
};

export default withTheme(ClientSection);
