import React, { Fragment } from "react";
import Link from "next/link";
import { NavItem, NavLink } from "reactstrap";
import { useRouter } from "next/router";
import { Asian, EuropeanR, flags } from "../Countries/index";
import { DownloadBrochure } from "../About/Download";
import { SocialMedia } from "../NavBar";
import ButtonStyle from "../styles/ButtonStyle";

import "./index.scss";

const APP_DOMAIN = "chislonbroadway.com";

const Footerlinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const Index = () => {
  const router = useRouter();
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
            <img
              src="/static/images/imclogo.jpg"
              className="my-3"
              style={{ maxWidth: "150px", display: "block" }}
            />
            <ButtonStyle
              className="transparent mb-2"
              onClick={() => {
                router.push("/relocate-to-africa");
                global.window.scrollTo(0, 0);
              }}
            >
              RELOCATE TO AFRICA
            </ButtonStyle>

            {/* <div
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
            </div> */}
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
                <li>
                  <Link href="/faqs">
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/career">
                    <a>Career</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-2 footer_links">
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
                  <Link href="/testimonial">
                    <a>Testimonial</a>
                  </Link>
                </li>
                <li>
                  <img
                    src="/static/images/visa.jpeg"
                    className="img img-fliud"
                  />
                </li>
              </ul>
            </div>
          </div> */}
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
          <div className="col-md-4 footer_links">
            <h6 className="text-center">Countries</h6>
            <div className="d-flex justify-content-between">
              <div className="mr-2">
                <h6>Citizenship By Investment</h6>
                <ul className="mb-4">
                  {Asian.map((flag, index) => (
                    <li key={index}>
                      <Link href={`/country/${flag.path}`}>
                        <a style={{ cursor: "pointer" }} href={flag.href}>
                          {flag.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h6>EMAIL</h6>
                <span class="d-block mb-4">contact@chislonbroadway.com</span>
                <h6>PHONE</h6>
                <span>+234 706 6315 900</span>
              </div>
              <div className="flex-grow-1">
                <h6>Residency By Investment</h6>
                <ul className="mb-4">
                  {EuropeanR.map((flag, index) => (
                    <li key={index}>
                      <Link href={`/country/${flag.path}`}>
                        <a style={{ cursor: "pointer" }} href={flag.href}>
                          {flag.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 footer_links">
            <DownloadBrochure showImage={false} titleColor="white" />
            <div className="social_links">
              <h6>FOLLOW US</h6>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      <div className="copyrightBar">
        <p>
          Copyright 2022 <span>Chislon Broadway Visa Services</span> All Rights
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
