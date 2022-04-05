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
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Citizenship By Investment",
    href: "/citizenship-by-investment",
  },
  {
    label: "Residency By Investment",
    href: "/residency-by-investment",
  },
  {
    label: " International Real Estate",
    href: "/international-real-estate",
  },
  // {
  //   label: "Investment Migration",
  //   href: "/investment-migration",
  // },
  {
    label: "Incorporation & Accounts",
    href: "/incorporation-and-accounts",
  },
  {
    label: "Offshore Investment",
    href: "/offshore-investment",
  },
  { label: "Countries", href: "/country" },
  { label: "Visas", href: "/visas" },
  // {
  //   label: "Visas",
  //   href: "/visas",
  //   submenus: [
  //     {
  //       label: "USA",
  //       href: "/visas/usa",
  //     },
  //   ],
  // },
  {
    label: "Journal of Migration",
    href: "/journal-of-migration",
  },
  { label: "International Partners", href: "/international-partner" },
  { label: "Insight", href: "/insight" },
  { label: "News", href: "/latest-news" },
  { label: "Contact Us", href: "/contact" },
];

const Index = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-default"
      style={{ backgroundColor: props.theme.colors.white }}
    >
      <NavbarBrand href="/">
        <img
          src="/static/images/whitelogo.png"
          className="img-fluid"
          style={{
            maxWidth: "200px",
            backgroundColor: props.theme.colors.main,
            padding: "10px",
          }}
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
          {Menus.map(({ href, label, submenus, blank }, index) => {
            return (
              <NavItem key={index}>
                <Link href={href} passHref onClick={() => setIsOpen(false)}>
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    target={blank ? "_blank" : "_self"}
                  >
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
          color: #01172a;
        }
        .customBurger span {
          background-color: #01172a;
          display: block;
          width: 100%;
          height: 2px;
          margin-bottom: 6px;
        }
        .customBurger div {
          font-size: 8px;
          letter-spacing: 2px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

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

        <SocialIcon
          network="whatsapp"
          className="icons"
          url="https://api.whatsapp.com/send/?phone=+2347066315900"
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />

        <SocialIcon
          network="pinterest"
          className="icons"
          url="https://api.whatsapp.com/send/?phone=+2347066315900"
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />

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
        <Link href="tel:+2347066315900">
          <a className="phoneBox">+234 706 6315 900</a>
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
          border: 2px solid ${props.theme.colors.main};
          color: ${props.theme.colors.main};
        }
        .contactPhone .contactBox {
          border: 2px solid ${props.theme.colors.main};
          background-color: ${props.theme.colors.main};
          color: ${props.theme.colors.yellow};
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
