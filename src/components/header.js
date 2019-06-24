import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";

import "./header.scss";

import LogoImg from "../images/logo.png";
import FacebookIcon from "../images/facebook_square_white.png";
import YoutubeIcon from "../images/youtube_white.png";
import BandzoneIcon from "../images/bandzone_white.png";
import InstagramIcon from "../images/instagram_white.png";
import Language from "./language";

class Header extends React.PureComponent {
  state = {
    showMenu: false,
  };

  componentDidMount() {
    if (window.location.pathname === "/") {
      this.setState({
        showMenu: true,
      });
    }
  }

  handleOpenMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { intl } = this.props;

    return (
      <header>
        <Language />
        <div
          className={this.state.showMenu ? "burger-menu change" : "burger-menu"}
          onClick={this.handleOpenMenu}
        >
          <div className="line-1" />
          <div className="line-2" />
          <div className="line-3" />
        </div>
        <div className="logo">
          <Link to="/">
            <img src={LogoImg} alt="logo" className="logo-img" />
          </Link>
        </div>

        <ul className={this.state.showMenu ? "nav responsive" : "nav"}>
          <li className="nav-item">
            <Link className="nav-link" to="/bio">
              <div
                className="nav-text"
                data-text={intl.formatMessage({ id: "bio" })}
              >
                <FormattedMessage id="bio" />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stage-plan">
              <div
                className="nav-text"
                data-text={intl.formatMessage({ id: "stagePlan" })}
              >
                <FormattedMessage id="stagePlan" />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/setlist">
              <div
                className="nav-text"
                data-text={intl.formatMessage({ id: "setList" })}
              >
                <FormattedMessage id="setList" />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/galerie">
              <div
                className="nav-text"
                data-text={intl.formatMessage({ id: "galerie" })}
              >
                <FormattedMessage id="galerie" />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/koncerty">
              <div
                className="nav-text"
                data-text={intl.formatMessage({ id: "koncerty" })}
              >
                <FormattedMessage id="koncerty" />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kontakty">
              <div
                className="nav-text"
                data-text={intl.formatMessage({ id: "kontakty" })}
              >
                <FormattedMessage id="kontakty" />
              </div>
            </Link>
          </li>
        </ul>

        <footer className="footer">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/sotdtb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookIcon}
                alt="Facebook Icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCGSgHxvGeQDAnRMP9xrxqZw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={YoutubeIcon}
                alt="Youtube Icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/sotdtb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram Icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://bandzone.cz/sotd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BandzoneIcon}
                alt="Bandzone Icon"
                className="social-icon"
              />
            </a>
          </div>
        </footer>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default injectIntl(Header);
