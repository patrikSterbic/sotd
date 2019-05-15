import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./setlist.scss";

import SystemOfADownAlbum from "../images/system_of_a_down_album.jpg";
import StealThisAlbumAlbum from "../images/steal_this_album_album.jpg";
import ToxicityAlbum from "../images/toxicity_album.jpg";
import HypnotizeAlbum from "../images/hypnotize_album.jpg";
import MezmerizeAlbum from "../images/mesmerize_album.jpg";

class SetListPage extends React.PureComponent {
  openAlbum = (event, albumName) => {
    const albumContent = document.getElementsByClassName("album-content");
    for (let i = 0; i < albumContent.length; i++) {
      albumContent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(albumName).style.display = "block";
    event.currentTarget.className += " active";
  };

  render() {
    return (
      <Layout>
        <SEO
          title="Set List"
          keywords={[
            `set list`,
            `system of the down`,
            `tribute band`,
            `system of the down tribute band`,
          ]}
        />
        <div className="setlist-page">
          <div className="content">
            <h1>Set List</h1>

            <div className="album-tabs">
              <button
                className="tab-link"
                onClick={event => this.openAlbum(event, "system-of-a-down")}
              >
                <img
                  src={SystemOfADownAlbum}
                  alt="Steal This Album! Album"
                  width="64"
                  height="64"
                />
                System of a Down
              </button>
              <button
                className="tab-link"
                onClick={event => this.openAlbum(event, "toxicity")}
              >
                <img
                  src={ToxicityAlbum}
                  alt="Steal This Album! Album"
                  width="64"
                  height="64"
                />
                Toxicity
              </button>
              <button
                className="tab-link"
                onClick={event => this.openAlbum(event, "steal-this-album")}
              >
                <img
                  src={StealThisAlbumAlbum}
                  alt="Steal This Album! Album"
                  width="64"
                  height="64"
                />
                Steal This Album!
              </button>
              <button
                className="tab-link"
                onClick={event => this.openAlbum(event, "hypnotize")}
              >
                <img
                  src={HypnotizeAlbum}
                  alt="Steal This Album! Album"
                  width="64"
                  height="64"
                />
                Hypnotize
              </button>
              <button
                className="tab-link"
                onClick={event => this.openAlbum(event, "mezmerize")}
              >
                <img
                  src={MezmerizeAlbum}
                  alt="Steal This Album! Album"
                  width="64"
                  height="64"
                />
                Mezmerize
              </button>
            </div>

            <div className="album-content" id="system-of-a-down">
              <ul className="song-list">
                <li>Suite Pee</li>
                <li>Sugar</li>
                <li>Suggestions</li>
                <li>Spiders</li>
                <li>War?</li>
                <li>Cubert</li>
                <li>P.L.U.C.K.</li>
              </ul>
            </div>

            <div className="album-content" id="toxicity">
              <ul className="song-list">
                <li>Prison Song</li>
                <li>Needles</li>
                <li>Deer Dance</li>
                <li>Chop Suey!</li>
                <li>Forest</li>
                <li>ATWA</li>
                <li>Science</li>
                <li>Toxicity</li>
                <li>Psycho</li>
                <li>Aerials</li>
              </ul>
            </div>

            <div className="album-content" id="steal-this-album">
              <ul className="song-list">
                <li>Innervision</li>
                <li>A.D.D.</li>
                <li>I-E-A-I-A-I-O</li>
                <li>Pictures</li>
                <li>Fuck the System</li>
                <li>Roulette</li>
              </ul>
            </div>

            <div className="album-content" id="hypnotize">
              <ul className="song-list">
                <li>Hypnotize</li>
                <li>Holy Mountains</li>
                <li>Lonely Day</li>
              </ul>
            </div>

            <div className="album-content" id="mezmerize">
              <ul className="song-list">
                <li> Soldier Side – Intro</li>
                <li>B.Y.O.B.</li>
                <li>Radio/Video</li>
                <li>Violent Pornography</li>
                <li>Lost in Hollywood</li>
              </ul>
            </div>

            {/* <div className="album-list">
              <div className="col">
                <div className="album">
                  <div className="album-title">
                    <img
                      src={SystemOfADownAlbum}
                      alt="System of a Down Album"
                      width="150"
                      height="150"
                    />
                    <h2>System of a Down</h2>
                  </div>

                  <ul className="song-list">
                    <li>Suite Pee</li>
                    <li>Sugar</li>
                    <li>Suggestions</li>
                    <li>Spiders</li>
                    <li>War?</li>
                    <li>Cubert</li>
                    <li>P.L.U.C.K.</li>
                  </ul>
                </div>
                <div className="album">
                  <div className="album-title">
                    <img
                      src={ToxicityAlbum}
                      alt="Toxicity Album"
                      width="150"
                      height="150"
                    />
                    <h2>Toxicity</h2>
                  </div>

                  <ul className="song-list">
                    <li>Prison Song</li>
                    <li>Needles</li>
                    <li>Deer Dance</li>
                    <li>Chop Suey!</li>
                    <li>Forest</li>
                    <li>ATWA</li>
                    <li>Science</li>
                    <li>Toxicity</li>
                    <li>Psycho</li>
                    <li>Aerials</li>
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="album">
                  <div className="album-title">
                    <img
                      src={StealThisAlbumAlbum}
                      alt="Steal This Album! Album"
                      width="150"
                      height="150"
                    />
                    <h2>Steal This Album!</h2>
                  </div>

                  <ul className="song-list">
                    <li>Innervision</li>
                    <li>A.D.D.</li>
                    <li>I-E-A-I-A-I-O</li>
                    <li>Pictures</li>
                    <li>Fuck the System</li>
                    <li>Roulette</li>
                  </ul>
                </div>

                <div className="album">
                  <div className="album-title">
                    <img
                      src={HypnotizeAlbum}
                      alt="Hypnotize Album"
                      width="150"
                      height="150"
                    />
                    <h2>Hypnotize</h2>
                  </div>

                  <ul className="song-list">
                    <li>Hypnotize</li>
                    <li>Holy Mountains</li>
                    <li>Lonely Day</li>
                  </ul>
                </div>

                <div className="album">
                  <div className="album-title">
                    <img
                      src={MezmerizeAlbum}
                      alt="Mesmerize Album"
                      width="150"
                      height="150"
                    />
                    <h2>Mezmerize</h2>
                  </div>

                  <ul className="song-list">
                    <li> Soldier Side – Intro</li>
                    <li>B.Y.O.B.</li>
                    <li>Radio/Video</li>
                    <li>Violent Pornography</li>
                    <li>Lost in Hollywood</li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default SetListPage;
