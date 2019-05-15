import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./stage-plan.scss";

import StageImage from "../images/stageplan.jpg";

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

        <img src={StageImage} alt="Stage" width="960" />
      </div>
    </div>
  </Layout>
);

export default StagePlanPage;
