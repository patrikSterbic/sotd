import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./setlist.scss";

import SystemOfADownAlbum from "../images/system_of_a_down_album.jpg";
import StealThisAlbumAlbum from "../images/steal_this_album_album.jpg";
import ToxicityAlbum from "../images/toxicity_album.jpg";
import HypnotizeAlbum from "../images/hypnotize_album.jpg";
import MesmerizeAlbum from "../images/mesmerize_album.jpg";

const SetListPage = () => (
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

        <div className="album-list">
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
                  src={MesmerizeAlbum}
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
        </div>
      </div>
    </div>
  </Layout>
);

export default SetListPage;
