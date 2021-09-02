import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./index.css";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import { withTheme } from "styled-components";

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
      // { label: "Locations", href: "/about/locations" },
      { label: "Career", href: "/about/career" },
    ],
  },
  { label: "Citizenship By Investment", href: "/citizenship-by-investment" },
  { label: "Residency By Investment", href: "/citizenship-by-residence" },
  { label: "High Networth", href: "/high-networth-investors" },
  { label: "Work Abroad", href: "/work-abroad" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Healthcare Abroad", href: "/healthcare-abroad" },
  { label: "International Partners", href: "/international-partner" },
  { label: "Countries", href: "/country" },
  { label: "Industry Insight", href: "/industry-insight" },
  // { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  // { label: "Partners", href: "/partners" },
  // { label: "Latest News", href: "/latest-news" },
  { label: "Contact Us", href: "/contact" },
];

const Index = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-default"
      style={{ backgroundColor: props.theme.colors.main }}
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
        <Menu right isOpen={isOpen} noOverlay={false}>
          {Menus.map(({ href, label, submenus }, index) => {
            return (
              <NavItem key={index}>
                <Link href={href} passHref onClick={() => setIsOpen(false)}>
                  <NavLink onClick={() => setIsOpen(false)}>
                    {submenus && <Arrow />} {label}{" "}
                    {submenus && (
                      <Submenus submenus={submenus} setIsOpen={setIsOpen} />
                    )}
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

const Submenus = ({ submenus = [], setIsOpen }) => {
  return (
    <div className="dropdown">
      {submenus.map((submenu, index) => (
        <Link href={submenu.href} passHref key={index}>
          <a className="nav-link" onClick={() => setIsOpen(false)}>
            {submenu.label}
          </a>
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
export const SocialMedia2 = () => {
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
const Arrow = () => {
  return (
    <>
      <div className="arrow" />
    </>
  );
};
