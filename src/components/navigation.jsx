import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const languageOptions = [ 
  {
    id: "en",
    name: " English",
    flagimg:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
  },
  {
    id: "bs",
    name: " Bosanski",
    flagimg: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
  },
];

const defaultLangFlag = <img src={languageOptions[0].flagimg} height="30" width="30" alt="nope" />;

export const Navigation = (props) => {
  const { t, i18n } = useTranslation();

  const [cssDisplay, setCssDisplay] = useState('none');
  const [langFlag, setLangFlag] = useState(defaultLangFlag);

  const showDropdown = () => {
    if (cssDisplay === 'none'){
      setCssDisplay('block');
    } else {
      setCssDisplay('none');
    }
  };

  const handleLanguageChange = (event) => userLanguageChange(event);
  const userLanguageChange = (event) => {
    i18n.changeLanguage(event.target.id);
  }

  const selectListItem = (event) => {
    handleLanguageChange(event);
    setCssDisplay('none');
    setLangFlag(<img src={event.target.src} height="30" width="30" alt="nope" />)
  };

  console.log('t(intro_h1)', t("intro_h1"))
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#header">
            {t("intro_h1")}
          </a>{" "}

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
                        <li>
              <a href="#about" className="page-scroll">
                {t("nav1")}
              </a>
            </li>
                        <li>
              <a href="#services" className="page-scroll">
                {t("nav2")}
              </a>
            </li>
             <li>
              <a href="#portfolio" className="page-scroll">
                {t("nav3")}
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                {t("nav4")}
              </a>
            </li>
            <li>
              <div id="language">
                <button onClick={showDropdown} >{langFlag}</button>
                <ul style={{ display: cssDisplay }}>
                  {languageOptions.map((lang) => (
                    <li id={lang.id} key={lang.id} disabled>
                      <img onClick={selectListItem} src={lang.flagimg} height="30" width="30" alt="flagpic" id={lang.id} />
                      {lang.name}
                    </li>
                  ))}
                  </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
