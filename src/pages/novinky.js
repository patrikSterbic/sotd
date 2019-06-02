import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./novinky.scss";
import FacebookIcon from "../images/facebook_square_black.png";

const NovinkyPage = () => (
  <Layout>
    <SEO
      title="Novinky"
      keywords={[
        `novinky`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="news-page">
      <div className="content">
        <h1>Novinky</h1>

        <div className="news-list">
          <div className="news-item">
            <span className="news-date">2.6.2019</span>
            <h2 className="news-title">Chystáme turné po Moravě!</h2>
            <a
              href="https://www.facebook.com/sotdtb/photos/a.653155218448551/708863236211082/?type=3&theater"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookIcon}
                alt="facebook event"
                className="koncerty-event-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NovinkyPage;
