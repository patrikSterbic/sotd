import React from "react";
import Lightbox from "react-image-lightbox";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import "react-image-lightbox/style.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./galerie.scss";

import PhotoOne from "../images/photos/1.jpg";
import PhotoTwo from "../images/photos/2.jpg";
import PhotoThree from "../images/photos/3.jpg";
import PhotoFour from "../images/photos/4.jpg";
import PhotoFive from "../images/photos/5.jpg";
import PhotoSix from "../images/photos/6.jpg";
import PhotoSeven from "../images/photos/7.jpg";
import PhotoEight from "../images/photos/8.jpg";
import PhotoNine from "../images/photos/9.jpg";
import PhotoTen from "../images/photos/10.jpg";
import PhotoEleven from "../images/photos/11.jpg";
import PhotoTwelve from "../images/photos/12.jpg";
import PhotoThirteen from "../images/photos/13.jpg";
import PhotoFourteen from "../images/photos/14.jpg";
import PhotoFifteen from "../images/photos/15.jpg";
import PhotoSixteen from "../images/photos/16.jpg";
import PhotoSeventeen from "../images/photos/17.jpg";
import PhotoEightteen from "../images/photos/18.jpg";

class GaleriePage extends React.PureComponent {
  state = {
    currentPath: "",
    isOpen: false,
    currentIndex: 0,
    photoPaths: [],
  };

  openImage = e => {
    e.persist();

    const imageSrc = e.target.currentSrc;
    const currentIndex = parseInt(e.target.id);
    this.setState({ isOpen: true, currentPath: imageSrc, currentIndex });
  };

  closeModal = e => {
    e.persist();
    this.setState({ isOpen: false });
  };

  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <SEO
          title={intl.formatMessage({ id: "galerie" })}
          keywords={[
            `galerie`,
            `system of the down`,
            `tribute band`,
            `system of the down tribute band`,
          ]}
        />
        <div className="galerie-page" tabIndex="1">
          <div className="content">
            <h1>
              <FormattedMessage id="galerie" />
            </h1>

            <h2>
              <FormattedMessage id="videa" />
            </h2>
            <div className="videos">
              <div className="video">
                <iframe
                  className="youtube-video"
                  title="První Live Koncert"
                  width="960"
                  height="480"
                  src="https://www.youtube.com/embed/9vfSlI6hovY"
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
            <h2>
              <FormattedMessage id="foto" />
            </h2>
            <div className="photos">
              <img
                onClick={this.openImage}
                className="photo"
                src={PhotoOne}
                alt="First"
                id="1"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoTwo}
                alt="Second"
                onClick={this.openImage}
                id="2"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoThree}
                alt="Third"
                onClick={this.openImage}
                id="3"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoFour}
                alt="Fourth"
                onClick={this.openImage}
                id="4"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoFive}
                alt="Fifth"
                onClick={this.openImage}
                id="5"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoSix}
                alt="Sixth"
                onClick={this.openImage}
                id="6"
                height="314" // Ugly Hack
              />
            </div>
            <h2>
              <FormattedMessage id="vsetin" />
            </h2>
            <div className="photos-4">
              <img
                onClick={this.openImage}
                className="photo"
                src={PhotoSeven}
                alt="Seven"
                id="7"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoEight}
                alt="Eight"
                onClick={this.openImage}
                id="8"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoNine}
                alt="Nine"
                onClick={this.openImage}
                id="9"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoTen}
                alt="Ten"
                onClick={this.openImage}
                id="10"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoEleven}
                alt="Eleven"
                onClick={this.openImage}
                id="11"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoTwelve}
                alt="Twelve"
                onClick={this.openImage}
                id="12"
                height="314" // Ugly Hack
              />
              <img
              className="photo"
              src={PhotoThirteen}
              alt="Thirteen"
              onClick={this.openImage}
              id="13"
              height="314" // Ugly Hack
              />
              <img
              className="photo"
              src={PhotoFourteen}
              alt="Fourteen"
              onClick={this.openImage}
              id="14"
              height="314" // Ugly Hack
              />
            </div>
            <h2>
              <FormattedMessage id="roznov" />
            </h2>
            <div className="photos-4">
              <img
                onClick={this.openImage}
                className="photo"
                src={PhotoFifteen}
                alt="Fifteen"
                id="15"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoSixteen}
                alt="Sixteen"
                onClick={this.openImage}
                id="16"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoSeventeen}
                alt="Seventeen"
                onClick={this.openImage}
                id="17"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoEightteen}
                alt="Eighteen"
                onClick={this.openImage}
                id="18"
                height="314" // Ugly Hack
              />
            </div>
          </div>
    
          {this.state.isOpen && (
            <Lightbox
              mainSrc={this.state.currentPath}
              onCloseRequest={this.closeModal}
              closeLabel={this.props.intl.formatMessage({ id: "zavrit" })}
            />
          )}
        </div>
      </Layout>
    );
  }
}

export default injectIntl(GaleriePage);
