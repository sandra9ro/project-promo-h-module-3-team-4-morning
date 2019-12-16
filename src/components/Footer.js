import React from "react";
import "../stylesheets/Footer.scss";
import logo from "../images/ECOME.png";
import logoAdalab from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__paragraph">Awesome profile-cards @2019</p>
        <img className="footer__logo2" src={logo} alt="logo ECOME" title="logo ECOME" />
        <img className="footer__logo" src={logoAdalab} alt="logo adalab" title="logo adalab" />
      </footer>
    );
  }
}

export default Footer;