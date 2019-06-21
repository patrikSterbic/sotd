import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./bio.scss";

import BioImage from "../images/bio_image.png";

const BioPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "bio" })}
        keywords={[
          `bio`,
          `system of the down`,
          `tribute band`,
          `system of the down tribute band`,
        ]}
      />
      <div className="bio-page">
        <div className="content">
          <h1>
            <FormattedMessage id="bio" />
          </h1>

          <p>
            <FormattedMessage id="bioText" />
          </p>
          <img className="bio-img" src={BioImage} alt="Bio" id="target" />
        </div>
      </div>
    </Layout>
  );
};

export default injectIntl(BioPage);
