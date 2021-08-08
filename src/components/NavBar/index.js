import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./index.css";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";

const Menus = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    submenus: [
      { label: "Vision & Mission", href: "/about/vision-and-mission" },
      { label: "Leadership Team", href: "/about/leadership-team" },
      {
        label: "Voluntary Code of Conduct",
        href: "/about/voluntary-code-of-conduct",
      },
      {
        label: "Clients",
        href: "/about/clients",
      },
      { label: "Locations", href: "/about/locations" },
      { label: "Join Our Team", href: "/about/join-network" },
    ],
  },
  { label: "Citizenship By Investment", href: "/citizenship-by-investment" },
  { label: "Citizenship By Residence", href: "/citizenship-by-residence" },
  { label: "High Networth", href: "/high-networth-investors" },
  { label: "Work Abroad", href: "/work-abroad" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Healthcare Abroad", href: "/healthcare-abroad" },
  { label: "International Partners", href: "/international-partner" },
  // { label: "Countries", href: "/country" },
  // { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  // { label: "Partners", href: "/partners" },
  // { label: "Latest News", href: "/latest-news" },
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
        {/* <img
          src="/static/images/logos/cbw_gms_bbg.png"
          className="img-fluid"
          style={{ maxWidth: "70px" }}
        /> */}
        <img
          src="/static/images/whitelogo.png"
          className="img-fluid"
          style={{ maxWidth: "250px" }}
        />
      </NavbarBrand>
      <SocialMedia />
      <Menu right isOpen={isOpen} noOverlay={false}>
        {Menus.map(({ href, label, submenus }, index) => {
          return (
            <NavItem key={index}>
              <Link href={href} passHref onClick={() => setIsOpen(false)}>
                <NavLink onClick={() => setIsOpen(false)}>
                  {label}{" "}
                  {submenus && (
                    <Submenus submenus={submenus} setIsOpen={setIsOpen} />
                  )}
                </NavLink>
              </Link>
            </NavItem>
          );
        })}
      </Menu>
    </nav>
  );
};

export default Index;

const Submenus = ({ submenus = [], setIsOpen }) => {
  return (
    <div className="dropdown">
      {submenus.map((submenu, index) => (
        <Link
          href={submenu.href}
          passHref
          key={index}
          onClick={() => setIsOpen(false)}
        >
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

const handles = [
  { name: "Whatsapp" },
  { name: "Facebook" },
  { name: "Twitter" },
  { name: "LinkedIn" },
  { name: "Email" },
];
