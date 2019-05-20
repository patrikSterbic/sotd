import React from "react";
import axios from "axios";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./kontakty.scss";

class KontaktyPage extends React.PureComponent {
  handleSendEmail = event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message,
      },
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Zpráva odeslána.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Chyba!");
      }
    });
  };

  resetForm() {
    document.getElementById("kontakty-form").reset();
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Kontakty"
          keywords={[
            `kontakty`,
            `system of the down`,
            `tribute band`,
            `system of the down tribute band`,
          ]}
        />
        <div className="kontakty-page">
          <div className="content">
            <h1>Kontakty</h1>

            <div className="row">
              <div className="col-1">
                <h2>Kontaktní osoba</h2>
                <ul>
                  <li>
                    <strong>Michal Číž</strong>
                  </li>
                  <li>+420 604 308 927</li>
                  <li>
                    <a className="email" href="mailto:sotdb@gmail.com">
                      sotdtb@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h2>Napište nám</h2>
                <form
                  method="POST"
                  className="kontakty-form"
                  onSubmit={this.handleSendEmail}
                  id="kontakty-form"
                >
                  <div className="kontakty-form-group">
                    <label htmlFor="name">Jméno</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="kontakty-form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="emal" />
                  </div>
                  <div className="kontakty-form-group">
                    <label htmlFor="message">Zpráva</label>
                    <textarea name="message" id="message" />
                  </div>
                  <button
                    type="submit"
                    className="form-button"
                    onClick={this.handleSendEmail}
                  >
                    <span className="inner-text">Odeslat</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default KontaktyPage;
