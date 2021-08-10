import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { withTheme } from "styled-components";

const MyCookieConsent = (props) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="ACCEPT COOKIES"
      cookieName="chislon"
      contentStyle={{
        color: props.theme.colors.yellow,
        margin: 0,
        paddingLeft: "10px",
      }}
      style={{
        background: props.theme.colors.main,
        zIndex: 99999999999,
        padding: 0,
        margin: 0,
      }}
      buttonStyle={{
        color: props.theme.colors.main,
        fontWeight: 700,
        fontSize: "16px",
        background: props.theme.colors.yellow,
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "25px",
        margin: 0,
      }}
      expires={150}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};

export default withTheme(MyCookieConsent);
