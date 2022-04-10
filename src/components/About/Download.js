import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "reactstrap";
import HeadingStyle from "../styles/Heading3";
import ButtonStyle from "../styles/ButtonStyle";

export default function Download() {
  const router = useRouter();
  return (
    <Fragment>
      <div className="download">
        <Container>
          <Row>
            <Col md={6}>
              <DownloadBrochure />
            </Col>
            <Col md={6}>
              <div className="content">
                <img src="/static/images/about/newsletter.png" />
                <div>
                  <HeadingStyle>
                    <span>DOWNLOAD OUR BROCHURE</span>
                  </HeadingStyle>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Contact Developer");
                    }}
                  >
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        required
                        placeholder="Email Here"
                      />
                    </div>
                    <ButtonStyle>SUBSCRIBE NOW</ButtonStyle>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .form-group .form-control {
            border-radius: 0;
            border: 1px solid #e5e5e5;
            box-shadow: none;
          }
          .download {
            padding: 4rem 2rem;
            background: linear-gradient(
              122.47deg,
              #003e52 -0.69%,
              #00b8f2 100%
            );
          }
          .download img {
            max-width: 150px;
            margin: 10px;
          }
          .download .content {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </Fragment>
  );
}

export const DownloadBrochure = ({ showImage = true, titleColor }) => {
  const router = useRouter();
  return (
    <>
      <div className="content">
        {showImage && <img src="/static/images/about/brochurecover.jpg" />}
        <div>
          <HeadingStyle>
            <span className={titleColor}>DOWNLOAD OUR BROCHURE</span>
          </HeadingStyle>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
            possimus illo atque impedit cupiditate dicta repudiandae laborum
            deleniti vitae suscipit amet?
          </p>
          <ButtonStyle
            className="transparent"
            onClick={() => {
              router.push("/download-brochure");
              global.window.scrollTo(0, 0);
            }}
          >
            DOWNLOAD NOW
          </ButtonStyle>
        </div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
        }
        .content img {
          max-width: 150px;
          margin: 10px;
        }
        .white {
          color: #fff;
        }
      `}</style>
    </>
  );
};
