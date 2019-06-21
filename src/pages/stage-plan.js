import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./stage-plan.scss";

import StageImage from "../images/stage_plan.png";

const StagePlanPage = ({ intl }) => (
  <Layout>
    <SEO
      title={intl.formatMessage({ id: "stagePlan" })}
      keywords={[
        `stage plán`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="stage-plan-page">
      <div className="content">
        <h1>
          <FormattedMessage id="stagePlan" />
        </h1>

        <img
          className="stage-plan-img"
          src={StageImage}
          alt="Stage"
          width="960"
        />
      </div>
    </div>
  </Layout>
);

export default injectIntl(StagePlanPage);
