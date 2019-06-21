import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  cs: "CZ",
  en: "EN",
};

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#e74c3c` : `white`,
                margin: 15,
                cursor: `pointer`,
                fontFamily: "Montserrat",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
