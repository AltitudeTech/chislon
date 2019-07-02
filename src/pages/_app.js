import App, { Container } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    black: "#212121",
    white: "#FFFFFF",
    primary: "#0070f3",
    secondary: "#FFE17D",
    darkGreen: "#003DA1",
    lightGreen: "#12890E",
    lightAsh: "#DADADA",
    darkAsh: "#505050",
    lightBlue: "#003DA1"
  }
};

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
    font-family: "Georgia Regular";
    font-weight : 200 ;
    color : ${props => props.theme.colors.black};
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Nexa Heavy';
  }
  a,a:visited{
    text-decoration: none;
    color : ${props => props.theme.colors.black};
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
      <Container>
        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}
