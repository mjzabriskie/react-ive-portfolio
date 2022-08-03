import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands
} from "@fortawesome/fontawesome-svg-core/import.macro";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center">
      <a
        href="https://github.com/mjzabriskie"
        className="awesome-icon github-icon"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={brands("github")} />
      </a>
      <a
        href="https://www.linkedin.com/in/mark-zabriskie-556769aa"
        className="awesome-icon mx-3 mx-md-5 linkedin-icon"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={brands("linkedin")} />
      </a>
      <a
        href="https://stackoverflow.com/users/18241414/mjzabriskie"
        className="awesome-icon stack-icon"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={brands("stack-overflow")} />
      </a>
    </footer>
  );
}

export default Footer;
