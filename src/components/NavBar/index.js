import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { SocialIcon } from "react-social-icons";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";
import { withTheme } from "styled-components";
import Link from "next/link";

import "./index.css";

const Menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Study Visas", href: "/study-visas" },
  { label: "Countries", href: "/countries" },
  // {
  //   label: "Services",
  //   href: "#",
  //   submenus: [
  //     { label: "Student Recruitment", href: "/student-recruitment" },
  //     { label: "Exam Preps", href: "/exam-preps" },
  //   ],
  // },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar navbar-default"
      style={{ backgroundColor: "#002531" }}
    >
      <NavbarBrand href="/">
        <img
          src="/static/images/whitelogo.png"
          className="img-fluid"
          style={{ maxWidth: "200px" }}
        />
      </NavbarBrand>
      <SocialMedia />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ContactPhone />
        <Menu
          right
          isOpen={isOpen}
          noOverlay={false}
          customBurgerIcon={<CustomHamburger />}
        >
          {Menus.map(({ href, label, submenus }, index) => {
            return (
              <NavItem key={index}>
                <Link href={href} passHref>
                  <NavLink onClick={() => setIsOpen(false)}>
                    {label} {submenus && <Submenus submenus={submenus} />}
                  </NavLink>
                </Link>
              </NavItem>
            );
          })}
        </Menu>
      </div>
    </nav>
  );
};

export default withTheme(Index);

const CustomHamburger = () => {
  return (
    <>
      <div className="customBurger">
        <span></span>
        <span></span>
        <div>MENU</div>
      </div>
      <style jsx>{`
        .customBurger {
          color: #fff;
        }
        .customBurger span {
          background-color: #fff;
          display: block;
          width: 100%;
          height: 2px;
          margin-bottom: 6px;
        }
        .customBurger div {
          font-size: 8px;
          letter-spacing: 2px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

const Submenus = ({ submenus = [] }) => {
  return (
    <div className="dropdown">
      {submenus.map((submenu, index) => (
        <Link href={submenu.href} passHref key={index}>
          <NavLink>{submenu.label}</NavLink>
        </Link>
      ))}
    </div>
  );
};

export const SocialMedia = () => {
  return (
    <>
      <div className="socialIcons">
        <SocialIcon
          network="twitter"
          className="icons"
          url="//twitter.com/BroadwayChislon"
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />

        <SocialIcon
          network="facebook"
          className="icons"
          url="//www.facebook.com/Chislon-broadway-417594015502295/?modal=admin_todo_tour"
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />

        {/* <SocialIcon
          network="whatsapp"
          className="icons"
          url=""
          style={{ width: "30px", height: "30px", margin: "5px" }}
        /> */}

        <SocialIcon
          network="linkedin"
          className="icons"
          url="//www.linkedin.com/company/chislon-broadway/?viewAsMember=true"
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />
      </div>
      <style jsx>{`
        .socialIcons {
          display: flex;
          list-style: none;
          align-items: center;
        }
        .icons {
          width: 40px !important;
          margin: 10px;
        }
        @media screen and (max-width: 540px) {
          .socialIcons {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

const ContactPhone = withTheme((props) => {
  return (
    <>
      <div className="contactPhone">
        <Link href="tel:+2348012222222">
          <a className="phoneBox">+234 801 2222 222</a>
        </Link>
        <Link href="/contact">
          <a className="contactBox">CONTACT US</a>
        </Link>
      </div>
      <style jsx>{`
        .contactPhone {
          display: flex;
          margin-right: 10px;
          font-weight: 600;
          font-size: 12px;
        }
        @media screen and (max-width: 770px) {
          .contactPhone {
            display: none;
          }
        }
        .contactPhone .phoneBox,
        .contactPhone .contactBox {
          padding: 3px 10px;
          text-decoration: none;
        }
        .contactPhone .phoneBox {
          border: 2px solid ${props.theme.colors.yellow};
          color: ${props.theme.colors.yellow};
        }
        .contactPhone .contactBox {
          border: 2px solid ${props.theme.colors.yellow};
          background-color: ${props.theme.colors.yellow};
          color: ${props.theme.colors.main};
          text-transfrom: uppercase;
        }
      `}</style>
    </>
  );
});

const handles = [
  { name: "Whatsapp" },
  { name: "Facebook" },
  { name: "Twitter" },
  { name: "LinkedIn" },
  { name: "Email" },
];
