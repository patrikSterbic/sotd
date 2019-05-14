import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./stage-plan.scss";

const StagePlanPage = () => (
  <Layout>
    <SEO
      title="Stage Plán"
      keywords={[
        `stage plán`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="stage-plan-page">
      <div className="content">
        <h1>Stage Plán</h1>

        <img src="https://via.placeholder.com/960x600" alt="placeholder" />
      </div>
    </div>
  </Layout>
);

export default StagePlanPage;
