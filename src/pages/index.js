import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.scss";

import FacebookIcon from "../images/facebook_square_white.png";
import YoutubeIcon from "../images/youtube_white.png";
import BandzoneIcon from "../images/bandzone_white.png";
import InstagramIcon from "../images/instagram_white.png";

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO
      title={intl.formatMessage({ id: "hlavniStranka" })}
      keywords={[
        `sotd`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="main-page">
      <div className="glitch-img" />
      <footer className="mobile-footer" style={{ display: "none" }}>
        <a
          href="https://www.facebook.com/sotdtb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="Facebook Icon" className="social-icon" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCGSgHxvGeQDAnRMP9xrxqZw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={YoutubeIcon} alt="Youtube Icon" className="social-icon" />
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
          <img src={BandzoneIcon} alt="Bandzone Icon" className="social-icon" />
        </a>
      </footer>
    </div>
  </Layout>
);

export default injectIntl(IndexPage);
