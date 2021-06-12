import React, { Fragment } from "react";
import Jumbotron from "../Jumbotron";

const AboutJumbotron = ({ title = "ABOUT MIGRATION RESEARCH" }) => {
  return (
    <Fragment>
      <Jumbotron className="customAbout">
        <section className="aboutJumboBg p-5">
          <div className="jumbotronContent">
            <h4 className="display-5">{title}</h4>
            {/* <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quasi deserunt cum odio tempora
              tempore! Magnam minima quos obcaecati, possimus illo atque impedit
              cupiditate dicta repudiandae laborum deleniti vitae suscipit amet?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quasi deserunt cum odio tempora
              tempore! Magnam minima quos obcaecati, possimus illo atque impedit
              cupiditate dicta repudiandae laborum deleniti vitae suscipit amet?
            </p> */}
          </div>
        </section>
      </Jumbotron>
      <style jsx>{`
        .aboutJumboBg {
          background-image: linear-gradient(
            114.17deg,
            #003e52 -0.69%,
            #00b8f2 100%
          );
          background-repeat: no-repeat;
          background-size: contain;
          background-position: bottom center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .jumboBg {
        }
        .jumbotronContent {
          max-width: 800px;
          margin: auto;
          text-align: center;
        }
        .jumbotronContent h4 {
          color: #ffda42;
          font-weight: 300;
        }
        .jumbotronContent p {
          color: #fff;
        }
      `}</style>
    </Fragment>
  );
};

export default AboutJumbotron;
