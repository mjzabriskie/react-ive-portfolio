import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center">
      <a href="https://github.com/mjzabriskie" target="_blank"></a>
    <FontAwesomeIcon icon={solid('code-branch')} />
    </footer>
  );
}

export default Footer;
