import React, { Fragment } from "react";
import { NavItem, NavLink } from "reactstrap";
import Link from "next/link";
import { flags } from "../Countries/index";

import "./index.scss";
import { DownloadBrochure } from "../About/Download";
import { SocialMedia } from "../NavBar";

const APP_DOMAIN = "chislonbroadway.com";

const Footerlinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const Index = () => {
  return (
    <Fragment>
      <div className="container-fluid footer">
        <div className="row" style={{ position: "relative", zIndex: "5" }}>
          <div className="col-md-3 footer_links">
            {/* <img
              style={{ maxWidth: "250px" }}
              src="/static/images/global_migation_services.jpg"
              className="img-fluid mb-5"
            /> */}
            <Link href="/international-partner">
              <a className="become">
                <h6>BECOME AN INTERNATIONAL PARTNER</h6>
                <p>Discover the advantage of working with ChislonBroadway</p>
              </a>
            </Link>
            <Link href="/join-network">
              <a className="become">
                <h6>JOIN CHISLONBROADWAY NETWORK</h6>
                <p>Discover the benefits for generations to come</p>
              </a>
            </Link>
          </div>
          <div className="col-md-2 footer_links">
            <div className="" style={{ marginRight: "14px" }}>
              <h6>SERVICES</h6>
              <ul>
                <li>
                  <Link href="/citizenship-by-investment">
                    <a>Citizenship by Investment</a>
                  </Link>
                </li>
                <li>
                  <Link href="/residency-by-investment">
                    <a>Residency by Investment</a>
                  </Link>
                </li>
                <li>
                  <Link href="/high-networth-investors">
                    <a>High Net Worth Investors</a>
                  </Link>
                </li>
                <li>
                  <Link href="/work-abroad">
                    <a>Work Abroad</a>
                  </Link>
                </li>
                <li>
                  <Link href="/study-abroad">
                    <a>Study Abroad</a>
                  </Link>
                </li>
                <li>
                  <Link href="/healthcare-abroad">
                    <a>Healthcare Abroad</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className=""
              style={{ marginTop: "30px", marginRight: "14px" }}
            >
              <h6>OTHER SERVICES</h6>
              <ul>
                <li>
                  <Link href={`https://research.${APP_DOMAIN}`}>
                    <a>Migration Research</a>
                  </Link>
                </li>
                <li>
                  <Link href={`https://institute.${APP_DOMAIN}`}>
                    <a>International Institute</a>
                  </Link>
                </li>
                <li>
                  <Link href={`https://talentmasters.${APP_DOMAIN}`}>
                    <a>Talent Masters</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className=""
              style={{ marginTop: "30px", marginRight: "14px" }}
            >
              <h6>LINKS</h6>
              <ul>
                <li>
                  <Link href="/events">
                    <a>Event</a>
                  </Link>
                </li>
                <li>
                  <Link href="/social-responsibility">
                    <a>Social Responsibility</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-2 footer_links">
            <h6>PROGRAMS</h6>
            <ul>
              {flags.map((flag, index) => (
                <li>
                  <a href={flag.href}>{flag.name}</a>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="col-md-3 footer_links">
            {/* <h6>Contact Us</h6> */}
            <h6>Countries</h6>
            {/* <span class="d-block mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet?
            </span> */}
            <ul className="mb-4">
              {flags.map((flag, index) => (
                <li>
                  <a href={flag.href}>{flag.name}</a>
                </li>
              ))}
            </ul>

            <h6>EMAIL</h6>
            <span class="d-block mb-4">contact@chislonbroadway.com</span>
            <h6>PHONE</h6>
            <span>+234 801 2222 222</span>
            <div className="social_links">
              <h6>FOLLOW US</h6>
              <SocialMedia />
            </div>
          </div>
          <div className="col-md-4 footer_links">
            <DownloadBrochure showImage={false} titleColor="white" />
          </div>
        </div>
      </div>

      <div className="copyrightBar">
        <p>
          Copyright 2021 <span>Chislon Broadway Visa Services</span> All Rights
          Reserved
        </p>
        <div className="d-flex">
          {Footerlinks.map(({ href, label }, index) => {
            return (
              <div className="copyright-links" key={index}>
                <NavItem>
                  <Link href={href} passHref>
                    <NavLink className="copyright-link">{label}</NavLink>
                  </Link>
                </NavItem>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
