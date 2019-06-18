import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./koncerty.scss";

import FacebookIcon from "../images/facebook_square_black.png";

class KoncertyPage extends React.PureComponent {
  componentDidMount() {
    const po = document.createElement("script");
    po.async = true;
    po.src =
      "https://www.smsticket.cz/static/scripts/widgets/SaleAnchorSmall.js";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
  }

  render() {
    return (
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
            <h2>Plánované</h2>

            <table className="koncerty-list">
              <tbody>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">31.8.2019</span>
                    <span className="koncerty-place">Kytary In Majetin</span>
                  </td>
                  <td className="event-city">Majetín</td>
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
                  <td className="event-club">
                    <span className="koncerty-date">14.9.2019</span>
                    <span className="koncerty-place">Bunkr Club</span>
                  </td>
                  <td className="event-city">Vsetín</td>
                  <td className="event-column">
                    <a
                      title="Předprodej akce"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="smsticket-ibutton"
                      href="https://www.smsticket.cz/vstupenky/17287-system-of-the-down-tribute-bunkr-club?utm_medium=anchor"
                    />
                    <a
                      href="https://www.facebook.com/events/430268084420722/"
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
                  <td className="event-club">
                    <span className="koncerty-date">21.9.2019</span>
                    <span className="koncerty-place">Klub Vrátnice</span>
                  </td>
                  <td className="event-city">Rožnov pod Radhoštěm</td>
                  <td className="event-column">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">12.10.2019</span>
                    <span className="koncerty-place">BARRÁK Music club</span>
                  </td>
                  <td className="event-city">Ostrava</td>
                  <td className="event-column">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">26.10.2019</span>
                    <span className="koncerty-place">15 Minut Music club</span>
                  </td>
                  <td className="event-city">Olomouc</td>
                  <td className="event-column">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">16.11.2019</span>
                    <span className="koncerty-place">M13 Klub</span>
                  </td>
                  <td className="event-city">Brno</td>
                  <td className="event-column">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">23.11.2019</span>
                    <span className="koncerty-place">Club Nautilus</span>
                  </td>
                  <td className="event-city">Hodonín</td>
                  <td className="event-column">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">14.12.2019</span>
                    <span className="koncerty-place">Bamboo Club</span>
                  </td>
                  <td className="event-city">Zlín</td>
                  <td className="event-column">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src={FacebookIcon}
                        alt="facebook event"
                        className="koncerty-event-icon"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">28.12.2019</span>
                    <span className="koncerty-place">Klub MÍR</span>
                  </td>
                  <td className="event-city">Uherské Hradiště</td>
                  <td className="event-column">
                    <a href="#" target="_blank" rel="noopener noreferrer">
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

            <h2>Odehrané</h2>

            <table className="koncerty-list">
              <tbody>
                <tr>
                  <td className="event-club">
                    <span className="koncerty-date">22.3.2019</span>
                    <span className="koncerty-place">Bamboo Club</span>
                  </td>
                  <td className="event-city">Zlín</td>
                  <td className="event-column">
                    <a
                      href="https://www.facebook.com/events/2687540827930256/"
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
                  <td className="event-club">
                    <span className="koncerty-date">25.5.2019</span>
                    <span className="koncerty-place">Bamboo Club</span>
                  </td>
                  <td className="event-city">Zlín</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}

export default KoncertyPage;
