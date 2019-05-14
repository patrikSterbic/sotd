import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./novinky.scss";

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
            <span className="news-date">14.5.2019</span>
            <h2 className="news-title">Učíme se nové songy</h2>
            <button className="news-button">
              <span className="link-inner">Více</span>
            </button>
          </div>
          <div className="news-item">
            <span className="news-date">13.5.2019</span>
            <h2 className="news-title">Spouštíme web!</h2>
            <button className="news-button">
              <span className="link-inner">Více</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NovinkyPage;
