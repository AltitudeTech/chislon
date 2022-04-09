import { useRouter } from "next/router";
import React from "react";
import { withTheme } from "styled-components";
import ButtonStyle from "../styles/ButtonStyle";

function HomeImage(props) {
  const router = useRouter();
  return (
    <>
      <div className="homeBanner">
        <h2 className="caption">BECOME A GLOBAL CITIZEN</h2>
        <img src="/static/images/homepage.jpeg" className="img-fluid" />
        <div className="learnMore">
          <ButtonStyle
            className="transparent"
            onClick={() => router.push("/about")}
          >
            LEARN MORE
          </ButtonStyle>
        </div>
      </div>
      <style jsx>{`
        .homeBanner {
          height: 400px;
          overflow: hidden;
          position: relative;
        }
        .caption {
          position: absolute;
          max-width: 600px;
          padding: 15px;
          color: #fff;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }
        .learnMore {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      `}</style>
    </>
  );
}

export default withTheme(HomeImage);
