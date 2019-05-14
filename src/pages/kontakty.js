import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./kontakty.scss";

import FacebookIcon from "../images/facebook_square_black.png";
import YoutubeIcon from "../images/youtube_black.png";
import BandzoneIcon from "../images/bandzone_black.png";

const KontaktyPage = () => (
  <Layout>
    <SEO
      title="Kontakty"
      keywords={[
        `kontakty`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="kontakty-page">
      <div className="content">
        <h1>Kontakty</h1>

        <div className="row">
          <div className="col-1">
            <h2>Kontaktní osoba</h2>
            <ul>
              <li>
                <strong>Michal Číž</strong>
              </li>
              <li>+420 604 308 927</li>
              <li>
                <a href="#mailgo" data-address="sotdtb" data-domain="gmail.com">
                  sotdtb@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Napište nám</h2>
            <form action="#" className="kontakty-form">
              <div className="kontakty-form-group">
                <label htmlFor="name">Jméno</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="kontakty-form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="emal" />
              </div>
              <div className="kontakty-form-group">
                <label htmlFor="message">Zpráva</label>
                <textarea name="message" id="message" />
              </div>
              <button className="form-button">
                <span className="inner-text">Odeslat</span>
              </button>
            </form>
          </div>
        </div>
      </div>

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
            <img src={YoutubeIcon} alt="Youtube Icon" className="social-icon" />
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
    </div>
  </Layout>
);

export default KontaktyPage;
