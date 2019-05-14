import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.scss";

import FacebookIcon from "../images/facebook_square_white.png";
import YoutubeIcon from "../images/youtube_white.png";
import BandzoneIcon from "../images/bandzone_white.png";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hlavní Stránka"
      keywords={[
        `sotd`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="main-page">
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

export default IndexPage;
