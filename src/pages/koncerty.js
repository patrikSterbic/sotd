import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./koncerty.scss";

import FacebookIcon from "../images/facebook_square_black.png";

const KoncertyPage = () => (
  <Layout>
    <SEO
      title="Koncerty"
      keywords={[
        `koncerty`,
        `system of the down`,
        `tribute band`,
        `system of the down tribute band`,
      ]}
    />
    <div className="koncerty-page">
      <div className="content">
        <h1>Koncerty</h1>

        <table className="koncerty-list">
          <tr>
            <td>
              <span className="koncerty-date">25.5.2019</span>
              <span className="koncerty-place">Bamboo</span>
            </td>
            <td>Zlín</td>
            <td className="event-column">
              <a
                href="https://www.facebook.com/events/1264944820345601/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={FacebookIcon}
                  alt="facebook event"
                  className="koncerty-event-icon"
                />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </Layout>
);

export default KoncertyPage;
