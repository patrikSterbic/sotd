import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./galerie.scss";

const GaleriePage = () => (
  <Layout>
    <SEO
      title="Galerie"
      keywords={[
        `galerie`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="galerie-page">
      <div className="content">
        <h1>Galerie</h1>

        <div className="video">
          <iframe
            className="youtube-video"
            title="První Live Koncert"
            width="960"
            height="480"
            src="https://www.youtube.com/embed/dzc8l6bFi4s?wmode=transparent"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video">
          <iframe
            className="youtube-video"
            title="Bamboo 25.5."
            width="960"
            height="480"
            src="https://www.youtube.com/embed/q9iap7AToF4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video">
          <iframe
            className="youtube-video"
            title="Bamboo 25.5."
            width="960"
            height="480"
            src="https://www.youtube.com/embed/m6nZMOayh8g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video">
          <iframe
            className="youtube-video"
            title="Bamboo 25.5."
            width="960"
            height="480"
            src="https://www.youtube.com/embed/NsPYLFZn_VA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default GaleriePage;
