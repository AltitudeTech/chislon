import React, { Fragment } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import NavBar from "../NavBar";
import Footer from "../Footer";
import NewsBar from "../NavBar/NewsBar";

const Index = (props) => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <WhatsappBar />
        <NewsBar />
        <NavBar />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
};
export default Index;

const WhatsappBar = () => {
  return (
    <div className="whatsappBar">
      <Link href="https://api.whatsapp.com/send/?phone=+2347037857172">
        <a target="_blank">
          <FaWhatsapp
            size={25}
            style={{ paddingRight: "5px", flexShrink: 0 }}
          />
          <span>How can I help you ?</span>
        </a>
      </Link>
      <style jsx>{`
        .whatsappBar {
          position: fixed;
          background-color: #25d366;
          z-index: 99999;
          right: 0;
          top: 40vh;
        }
        .whatsappBar:hover {
          background-color: #064e3b;
        }
        .whatsappBar a {
          color: white;
          padding: 10px;
          display: block;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
