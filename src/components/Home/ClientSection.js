import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import { withTheme } from "styled-components";

const ClientSection = (props) => {
  return (
    <SectionStyle className="clientBoxStyle p-0">
      <Row className="" noGutters>
        <Col sm="12" md={{ size: 4 }}>
          <div className="clientDescription">
            <h1>Private</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              eligendi veritatis laudantium eum, sed odit ipsum ex ratione omnis
              suscipit, possimus consectetur, odio tenetur quas doloremque
              magnam non? Eveniet, unde!
            </p>
            <Link href="/about/client">
              <a className="clientButton">Read More</a>
            </Link>
          </div>
        </Col>
        <Col sm="12" md={{ size: 8 }}>
          <div className="clientBox mt-5">
            {/* <img
              className="bgImage"
              src="/static/images/flags/joinchision.png"
            /> */}
          </div>
        </Col>
      </Row>
      <Row className="" noGutters>
        <Col sm="12" md={{ size: 8 }}>
          <div className="clientBox mt-5">
            {/* <img
              className="bgImage"
              src="/static/images/flags/joinchision.png"
            /> */}
          </div>
        </Col>
        <Col sm="12" md={{ size: 4 }}>
          <div className="clientDescription">
            <h1>Government</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              eligendi veritatis laudantium eum, sed odit ipsum ex ratione omnis
              suscipit, possimus consectetur, odio tenetur quas doloremque
              magnam non? Eveniet, unde!
            </p>
            <Link href="/about/client">
              <a className="clientButton">Read More</a>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="" noGutters>
        <Col sm="12" md={{ size: 4 }}>
          <div className="clientDescription">
            <h1>Corporate</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              eligendi veritatis laudantium eum, sed odit ipsum ex ratione omnis
              suscipit, possimus consectetur, odio tenetur quas doloremque
              magnam non? Eveniet, unde!
            </p>
            <Link href="/about/client">
              <a className="clientButton">Read More</a>
            </Link>
          </div>
        </Col>
        <Col sm="12" md={{ size: 8 }}>
          <div className="clientBox mt-5">
            {/* <img
              className="bgImage"
              src="/static/images/flags/joinchision.png"
            /> */}
          </div>
        </Col>
      </Row>
      <style>
        {`
        .clientBoxStyle{
            background-color: #E4E6EB ;
        }
        .clientDescription{
            padding: 6rem 20px ;
            background-color: #c0c2c9 ;
        }
        .clientButton{
            // background-color: transparent;
            border: 1px solid #b2b2b2;
            padding: 5px 20px;
            text-decoration: none;
            color:#fff ;
            transition: all 0.5s linear;
            background-color: ${props.theme.colors.main};
        }
        .clientButton:hover{
            text-decoration: none;
            color: #fff;
            border-radius: 8px;
            display: inline-block;
        }
        .clientBox{
            overflow:hidden;
            min-height : 400px;
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
