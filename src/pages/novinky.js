import React from "react";
import Modal from "react-modal";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./novinky.scss";

const customStyles = {
  content: {
    zIndex: 1050,
    position: "fixed",
  },
};

class NovinkyPage extends React.PureComponent {
  state = {
    modalIsOpen: false,
    modalContent: null,
    modalLabel: "",
  };

  openModal(newsContent) {
    console.warn(newsContent);
    this.setState({
      modalLabel: newsContent.label,
      modalContent: newsContent.content,
      modalIsOpen: true,
    });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { intl } = this.props;

    const newsContent = {
      pripravy: {
        label: intl.formatMessage({ id: "novinkyObsah.pripravy.label" }),
        content: intl.formatMessage({ id: "novinkyObsah.pripravy.content" }),
      },
      supportProTour: {
        label: intl.formatMessage({ id: "novinkyObsah.supportProTour.label" }),
        content: intl.formatMessage({
          id: "novinkyObsah.supportProTour.content",
        }),
      },
    };

    return (
      <Layout>
        <SEO
          title={intl.formatMessage({ id: "novinky" })}
          keywords={[
            `novinky`,
            `system of the down`,
            `tribute band`,
            `system of the down tribute band`,
          ]}
        />
        <div className="news-page">
          <div className="content">
            <h1>
              <FormattedMessage id="novinky" />
            </h1>

            <div className="news-list">
              <div className="news-item">
                <span className="news-date">2.6.2019</span>
                <h2 className="news-title">
                  {intl.formatMessage({ id: "novinkyObsah.pripravy.label" })}
                </h2>
                <button
                  className="news-button"
                  onClick={() => this.openModal(newsContent.pripravy)}
                >
                  <FormattedMessage id="vice" />
                </button>
              </div>

              <div className="news-item">
                <span className="news-date">2.6.2019</span>
                <h2 className="news-title">
                  {intl.formatMessage({
                    id: "novinkyObsah.supportProTour.label",
                  })}
                </h2>
                <button
                  className="news-button"
                  onClick={() => this.openModal(newsContent.supportProTour)}
                >
                  <FormattedMessage id="vice" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={this.state.modalLabel}
        >
          <h2 className="news-detail-heading">{this.state.modalLabel}</h2>
          {this.state.modalContent}
        </Modal>
      </Layout>
    );
  }
}

export default injectIntl(NovinkyPage);
