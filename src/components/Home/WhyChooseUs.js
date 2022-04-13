import React from "react";
import Slider from "react-slick";
import { Row, Col, Container } from "reactstrap";
import Collapsible from "react-collapsible";
import { withTheme } from "styled-components";
import SectionStyle from "../styles/SectionStyle";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
const WhyChooseUs = (props) => {
  return (
    <SectionStyle className="sectionStyle">
      <Container>
        <Row>
          <Col>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "400",
                paddingLeft: "20px",
                color: props.theme.colors.main,
              }}
            >
              Why Choose Chislon Broadway
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Slider {...settings}>
          <Container fluid>
            <Row
              style={{
                margin: "auto",
              }}
            >
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src="/static/images/slide/1.jpeg"
                    alt="choose us now"
                  />
                </div>
              </Col>
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row
              style={{
                margin: "auto",
              }}
            >
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                </div>
              </Col>
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <img
                    className="img-fluid "
                    loading="lazy"
                    src="/static/images/slide/2.jpeg"
                    alt="choose us now"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row
              style={{
                margin: "auto",
              }}
            >
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src="/static/images/slide/1.jpeg"
                    alt="choose us now"
                  />
                </div>
              </Col>
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row
              style={{
                margin: "auto",
              }}
            >
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                    deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                </div>
              </Col>
              <Col sm="12" md={{ size: 6 }}>
                <div>
                  <img
                    className="img-fluid "
                    loading="lazy"
                    src="/static/images/slide/2.jpeg"
                    alt="choose us now"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Slider>
      </Container>
      <style>
        {`
        .sectionStyle{
          background-image: url(/static/images/home/world.png) ;
          background-color: #e5e5e5 ;
          background-size : contain ;
        }
        .flexPanel{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-content: stretch;
          align-items: flex-start;
        }
        .flexItem{
          position : relative ;
          order: 0;
          flex: 0 1 150px;
          align-self: auto;
          margin :  0 10px 10px ;
        }
        .flexItem p{
          position : absolute ;
          text-align : center ;
          top: 50% ;
          left: 50% ;
          color : #fff;
          font-weight : bold ;
          transform: translateX(-50%) translateY(-50%) ;
        }
        .leftBottom{
          height : 150px ;
          width : 200px ;
          margin : auto ;
          min-width : 70% ;
          border: none ;
          border-left : 4px solid #00B8F2 ;
          border-bottom : 4px solid #00B8F2 ;
        }
      `}
      </style>
    </SectionStyle>
  );
};

export default withTheme(WhyChooseUs);

const ChislonStats = withTheme((props) => {
  return (
    <>
      <div className="statsWrapper">
        <div className="box">
          <div className="content">
            <p>30 +</p>
            <p>Office Worldwide</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>25 +</p>
            <p>Years leading the industry</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>30 +</p>
            <p>Investment migration options</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>20, 000 +</p>
            <p>Clients advised</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>15 +</p>
            <p>Government advisory mandates</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>USD 10 billion +</p>
            <p>FDI raised</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .statsWrapper {
          display: grid;
          grid-template-columns: auto auto;
        }
        @media screen and (max-width: 500px) {
          .statsWrapper {
            display: grid;
            grid-template-columns: auto;
          }
        }
        .statsWrapper .box {
          padding: 20px 5px;
          display: flex;
          align-items: flex-end;
          color: ${props.theme.colors.main};
        }
        .statsWrapper .box p:first-child {
          font-size: 30px;
          font-weight: 400;
        }
      `}</style>
    </>
  );
});

const Visas = [
  { text: "Medical Visa", image: "medical-visa.png" },
  { text: "Investor Visa", image: "investor-visa.png" },
  { text: "Residency Visa", image: "residency-visa.png" },
  { text: "Student Visa", image: "student-visa.png" },
  { text: "Tourist Visa", image: "tourist-visa.png" },
  { text: "Work Visa", image: "work-visa.png" },
];

const WhyChislon = () => {
  return (
    <>
      {ChislonReasons.map(({ reason, id }) => (
        <Collapsible
          key={id}
          className="mb-2"
          trigger={<Tab reason={reason} id={id} />}
        >
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #3B82F6",
              padding: "10px",
              marginBottom: "2px",
            }}
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              ducimus labore voluptas soluta minima, ipsum exercitationem in ab
              ratione, nostrum quam delectus nam reprehenderit eveniet maxime
              qui a. Iure, in.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              doloremque illo odio ducimus soluta nam ea distinctio, eos ab
              deserunt assumenda laudantium in, nihil maiores tempore accusamus
              perferendis unde vitae.
            </p>
          </div>
        </Collapsible>
      ))}
    </>
  );
};

const Tab = ({ reason, id }) => (
  <div
    className={`flex justify-between bg-yellow-500 text-white p-2 cursor-pointer`}
    style={{
      display: "flex",
      justifyContent: "space-between",
      text: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: "#3B82F6",
      padding: "10px",
    }}
  >
    <p className="uppercase" style={{ textTransform: "uppercase" }}>
      {id}. {reason}
    </p>
    <p>+</p>
  </div>
);

const ChislonReasons = [
  { id: "1", reason: "Title Here" },
  { id: "2", reason: "Title Here" },
  { id: "3", reason: "Title Here" },
  { id: "4", reason: "Title Here" },
  { id: "5", reason: "Title Here" },
];
