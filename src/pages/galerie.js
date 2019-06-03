import React from "react";
import Lightbox from "react-image-lightbox";

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
    console.warn(this.state.photoSrc);
    return (
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
        <div className="galerie-page" tabIndex="1">
          <div className="content">
            <h1>Galerie</h1>

            <h2>Videa</h2>
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

            <h2>Foto</h2>
            <div className="photos">
              <img
                onClick={this.openImage}
                className="photo"
                src={PhotoOne}
                alt="test"
                id="1"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoTwo}
                alt="test"
                onClick={this.openImage}
                id="2"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoThree}
                alt="test"
                onClick={this.openImage}
                id="3"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoFour}
                alt="test"
                onClick={this.openImage}
                id="4"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoFive}
                alt="test"
                onClick={this.openImage}
                id="5"
                height="314" // Ugly Hack
              />
              <img
                className="photo"
                src={PhotoSix}
                alt="test"
                onClick={this.openImage}
                id="6"
                height="314" // Ugly Hack
              />
            </div>
          </div>
          {this.state.isOpen && (
            <Lightbox
              mainSrc={this.state.currentPath}
              onCloseRequest={this.closeModal}
              closeLabel="Zavřít"
            />
          )}
        </div>
      </Layout>
    );
  }
}

export default GaleriePage;
