import React from "react";

const SocialLink = ({ link }) => {
  return (
    <li key={link.id}>
      <a
        href={link.href}
        target="_blank"
        className="footer-icon"
        rel="noreferrer"
      >
        <i className={link.icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
