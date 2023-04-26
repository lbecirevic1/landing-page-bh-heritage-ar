import React from "react";
import { DownloadButtons } from "./download";
import { useTranslation } from "react-i18next";
import { FaAndroid, FaApple } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Services = (props) => {
  const [t] = useTranslation();
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="row section-title" id="downloadtxt">
          <h2>Download</h2>
          <h3>{t("download_p")}</h3>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div className="col-sm-2">
            <a href="http://drive.google.com/uc?export-download&id=1iCkCr_bllM9q8okfIOBpLoB0sqcYHEXM" target="_blank" rel="noopener noreferrer">
              <FaAndroid  color="black" size={100}/>
            </a>
          </div>
          <div className="col-sm-2">
          <a href="http://drive.google.com/uc?export-download&id=1iCkCr_bllM9q8okfIOBpLoB0sqcYHEXM" target="_blank" rel="noopener noreferrer">
            <FaApple  color="black" size={100}/>
          </a>
          </div>

        </div>
      </div>
    </div>
  );
};
