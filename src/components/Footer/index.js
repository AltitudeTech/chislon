import React, { Fragment } from "react";
import { NavItem, NavLink } from "reactstrap";
import Link from "next/link";

import "./index.scss";
import { DownloadBrochure, VacancyAlert } from "../About/Download";

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
          <div className="col-md-4 footer_links">
            <h6>Contact Us</h6>
            <span class="d-block mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet?
            </span>

            <h6>EMAIL</h6>
            <span class="d-block mb-4">contact@chislonbroadway.com</span>
            <h6>PHONE</h6>
            <span>+234 801 2222 222</span>
            <div className="social_links">
              <h6>FOLLOW US</h6>
              <ul className="d-flex">
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 footer_links">
            <DownloadBrochure showImage={false} titleColor="white" />
            {/* <VacancyAlert /> */}
          </div>
          <div className="col-md-4 footer_links">
            <div className="" style={{ marginRight: "14px" }}>
              <h6>OTHER PROGRAMS</h6>
              <ul>
                <li>
                  <Link href={`https://${APP_DOMAIN}`}>
                    <a>Chislon Broadway</a>
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

export const Socials = () => {
  return (
    <ul className="footerSocials">
      <li>
        <Link href="//twitter.com/BroadwayChislon">
          <i className="fa fa-twitter" />
        </Link>
      </li>
      <li>
        <Link
          href="
//www.facebook.com/Chislon-broadway-417594015502295/?modal=admin_todo_tour
"
        >
          <i className="fa fa-facebook" />
        </Link>
      </li>
      <li>
        <Link href="//www.linkedin.com/company/chislon-broadway/?viewAsMember=true">
          <i className="fa fa-linkedin" />
        </Link>
      </li>
    </ul>
  );
};
