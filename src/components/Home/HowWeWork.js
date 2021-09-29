import React from "react";
import { Row, Col } from "reactstrap";
import Collapsible from "react-collapsible";
import { withTheme } from "styled-components";
import SectionStyle from "../styles/SectionStyle";

const HowWeWork = (props) => {
  return (
    <SectionStyle className="sectionStyle">
      <Row>
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <div style={{ maxWidth: "500px" }}>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "400",
                color: props.theme.colors.main,
              }}
            >
              HOW WE WORK
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet?
            </p>
            {/* <ChislonStats /> */}
            <WhyChislon CustomArray={ChislonReasons} bgColor="#FF5500" />
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div>
            <img
              className="img-fluid mt-5"
              loading="lazy"
              style={{ maxWidth: "80%" }}
              src="/static/images/Home/work-visa.jpeg"
              alt="choose us now"
            />
          </div>
        </Col>
      </Row>
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

export default withTheme(HowWeWork);

export const WhyChislon = ({ CustomArray = [], bgColor = "#3B82F6" }) => {
  return (
    <>
      {CustomArray.map(({ name, id }) => (
        <Collapsible
          key={id}
          className="mb-2"
          trigger={<Tab name={name} id={id} bgColor={bgColor} />}
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
            {/* <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              doloremque illo odio ducimus soluta nam ea distinctio, eos ab
              deserunt assumenda laudantium in, nihil maiores tempore accusamus
              perferendis unde vitae.
            </p> */}
          </div>
        </Collapsible>
      ))}
    </>
  );
};

const Tab = ({ name, id, bgColor }) => (
  <div
    className={`flex justify-between bg-yellow-500 text-white p-2 cursor-pointer`}
    style={{
      display: "flex",
      justifyContent: "space-between",
      text: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: bgColor,
      padding: "10px",
    }}
  >
    <p className="uppercase" style={{ textTransform: "uppercase" }}>
      {id}. {name}
  </p>
    <p>+</p>
  </div>
);

const ChislonReasons = [
  { id: "1", name: "ASSESSMENT" },
  { id: "2", name: "DOCUMENTATION" },
  { id: "3", name: "VISA APPPLICATION" },
  { id: "4", name: "FOLLOW UP" },
];
