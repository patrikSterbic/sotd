import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./bio.scss";

import BioImage from "../images/bio_image.png";

const BioPage = () => {
  return (
    <Layout>
      <SEO
        title="Bio"
        keywords={[
          `bio`,
          `system of the down`,
          `tribute band`,
          `system of the down tribute band`,
        ]}
      />
      <div className="bio-page">
        <div className="content">
          <h1>Bio</h1>

          <p>
            <i>System Of The Down - Tribute Band</i> vznikl v létě 2018 spojením
            čtyř SOAD nadšenců s cílem hrát hudbu, která nás baví a skrze kterou
            bychom chtěli prokázat úctu této famózní skupině. Vznik kapely
            proběhl velmi rychle a to dá se říct dvěma telefonáty. Problémem
            zůstávala zkušebna, kterou se po několika měsících povedlo sehnat a
            kapela mohla v říjnu 2018 nasadit tempo, díky kterému se povedlo
            během půl roku odehrát první koncert a naplnit zlínský klub. Každý z
            členů kapely tvorbu miluje a dělá maximum pro ten nejlepší možný
            výsledek. Naším hraním bychom chtěli všem fanouškům System Of A Down
            přiblížit průřez tvorbou kapely, jež k nám moc často bohužel
            nezavítá a jejichž tvorbu znají lidé po celém světě
          </p>
          <img src={BioImage} alt="Bio" width="960" id="target" />
        </div>
      </div>
    </Layout>
  );
};

export default BioPage;
