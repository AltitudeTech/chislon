import React from "react";
import App from "next/app";
import dynamic from "next/dynamic";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/Layout";
import CookieConsent from "../components/Common/CookieConsent";
import { ThemeProvider, createGlobalStyle } from "styled-components";
const Addthis = dynamic(() => import("../components/Common/AddThis"), {
  ssr: false,
  loading: () => <p style={{ display: "none" }} />,
});
const theme = {
  colors: {
    black: "#212121",
    white: "#FFFFFF",
    yellow: "#FFDA42",
    main: "#01172A",
    // main: "#01172A",
    mainLight: "#01172a",
    main_: "#002531",
  },
};

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const GlobalStyle = createGlobalStyle`
@import url('/static/font/Nexa/style.css');
@import url('/static/font/Georgia/style.css');

html{
    scroll-behavior: smooth;
  }
  *, *:before, *:after{
    box-sizing : border-box ;
  }
  body{
    width : 100% ;
    padding : 0 ;
    margin : 0 ;
    font-size : 15px ;
    font-weight : 200 ;
    color : ${(props) => props.theme.colors.black};
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Nexa Heavy';
  }
  a,a:visited{
    text-decoration: none;
    color : ${(props) => props.theme.colors.black};
  }
  p{
    *font-family: "Georgia Regular";
  }
  .bm-menu {
    // background: #002531; 
    background: ${(props) => props.theme.colors.main};
    padding: 2.5em 1em 0;
    font-size: 1.15em;
    border-left: 5px solid #00141b;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <CookieConsent />
          {/* <Addthis /> */}
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
