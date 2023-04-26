import { useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [t] = useTranslation();
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">{" "}</div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h2>{t("contact_h1")}</h2>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                lbecirevic1@etf.unsa.ba
                aalialzaya1@etf.unsa.ba

              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            {t("intro_h1")}          
          </p>
        </div>
      </div>
    </div>
  );
};
