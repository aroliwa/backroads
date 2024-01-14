import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks itemClass="footer-link" parentClass="footer-links" />
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="footer-icons">
        {socialLinks.map((link, index) => {
          return <SocialLink key={index} link={link} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
