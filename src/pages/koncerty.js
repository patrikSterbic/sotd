import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./koncerty.scss";

import FacebookIcon from "../images/facebook_square_black.png";

class KoncertyPage extends React.PureComponent {
  componentDidMount() {
    const po = document.createElement("script");
    po.async = true;
    po.src =
      "https://www.smsticket.cz/static/scripts/widgets/SaleAnchorMini.js";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
  }

  render() {
    const { intl } = this.props;
    return (
      <Layout>
        <SEO
          title={intl.formatMessage({ id: "koncerty" })}
          keywords={[
            `koncerty`,
            `system of the down`,
            `tribute band`,
            `system of the down tribute band`,
          ]}
        />
        <div className="koncerty-page">
          <div className="content">
            <h1>
              <FormattedMessage id="koncerty" />
            </h1>
            <h2>
              <FormattedMessage id="planovane" />
            </h2>

            <table className="koncerty-list">
              <tbody>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">23.11.2019</span>
                      <span className="koncerty-place">Club Nautilus</span>
                    </td>
                    <td className="event-city">Hodonín</td>
                  </div>
                  <td className="event-column">
                    <a
                      title="Předprodej akce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="smsticket-ibutton"
                      href="https://www.smsticket.cz/vstupenky/17344-system-of-the-down-tribute?utm_medium=anchor"
                    >
                      SMSTICKET
                    </a>
                    <a
                      href="https://www.facebook.com/events/874181499599015/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">14.12.2019</span>
                      <span className="koncerty-place">Bamboo Club</span>
                    </td>
                    <td className="event-city">Zlín</td>
                  </div>
                  <td className="event-column">
                    <a
                      title="Předprodej akce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="smsticket-ibutton"
                      href="https://www.smsticket.cz/vstupenky/17345-system-of-the-down-tribute?utm_medium=anchor"
                    >
                      SMSTICKET
                    </a>
                    <a
                      href="https://www.facebook.com/events/712214882583447/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">28.12.2019</span>
                      <span className="koncerty-place">Klub MÍR</span>
                    </td>
                    <td className="event-city">Uherské Hradiště</td>
                  </div>
                  <td className="event-column">
                    <a
                      title="Předprodej akce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="smsticket-ibutton"
                      href="https://www.smsticket.cz/vstupenky/17346-system-of-the-down-tribute?utm_medium=anchor"
                    >
                      SMSTICKET
                    </a>
                    <a
                      href="https://www.facebook.com/events/2308860679355564/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>
              <FormattedMessage id="odehrane" />
            </h2>

            <table className="koncerty-list">
              <tbody>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">22.3.2019</span>
                      <span className="koncerty-place">Bamboo Club</span>
                    </td>
                    <td className="event-city">Zlín</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/2687540827930256/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">25.5.2019</span>
                      <span className="koncerty-place">Bamboo Club</span>
                    </td>
                    <td className="event-city">Zlín</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/1264944820345601/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">31.8.2019</span>
                      <span className="koncerty-place">Kytary In Majetin</span>
                    </td>
                    <td className="event-city">Majetín</td>
                  </div>

                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/293982631476108/"
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
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">14.9.2019</span>
                      <span className="koncerty-place">Bunkr Club</span>
                    </td>
                    <td className="event-city">Vsetín</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/430268084420722/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">21.9.2019</span>
                      <span className="koncerty-place">Klub Vrátnice</span>
                    </td>
                    <td className="event-city">Rožnov pod Radhoštěm</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/2946324898741583/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                  
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">12.10.2019</span>
                      <span className="koncerty-place">BARRÁK Music club</span>
                    </td>
                    <td className="event-city">Ostrava</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/2403688729874487/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">26.10.2019</span>
                      <span className="koncerty-place">
                        15 Minut Music club
                      </span>
                    </td>
                    <td className="event-city">Olomouc</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/2237866436462898/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">9.11.2019</span>
                      <span className="koncerty-place">Klub Slady</span>
                    </td>
                    <td className="event-city">Kroměříž</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/1146915855432877/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <div className="event-group">
                    <td className="event-club">
                      <span className="koncerty-date">16.11.2019</span>
                      <span className="koncerty-place">M13 Klub</span>
                    </td>
                    <td className="event-city">Brno</td>
                  </div>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/532808890588180/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-event"
                    >
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(KoncertyPage);
