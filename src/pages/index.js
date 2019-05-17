import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.scss";

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
    <div className="main-page" />
  </Layout>
);

export default IndexPage;
