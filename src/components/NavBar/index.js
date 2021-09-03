import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./index.css";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";
import { withTheme } from "styled-components";

const Menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/methodology" },
  { label: "Employers", href: "/employers" },
  { label: "Job Seeker", href: "/job-seekers" },
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
        <Menu right isOpen={isOpen} customBurgerIcon={<CustomHamburger />}>
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

const SocialMedia = () => {
  return (
    <div>
      <NavItem>
        <NavLink>Whatsapp</NavLink>
      </NavItem>
    </div>
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
