import React from "react";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo.png";
export const Header = (props) => {
  const [t] = useTranslation();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro-text">
                <h1>
                  {t("intro_h1")}
                </h1>
                <p>{t("intro_p")}</p>
              </div>
              <div className="col-md-6 intro-text" id="divImg">
                <img id="logoImg" src={logoImg} alt="logopic" height={"270px"} width={"470px"}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
