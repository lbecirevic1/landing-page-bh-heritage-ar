import React from "react";
import { useTranslation } from "react-i18next";

export const About = (props) => {
  const [t] = useTranslation();
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <h2>{t("about_h1")}</h2>
              <p>
                {t("about_p1")}
              </p>
              <p> 
               {t("about_p2")}
              </p>
          </div>
          </div>
        </div>
      </div>
  );
};
