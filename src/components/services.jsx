import React from "react";
import { DownloadButtons } from "./download";
import { useTranslation } from "react-i18next";

export const Services = (props) => {
  const [t] = useTranslation();
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="row section-title">
          <h2>Download</h2>
          <h3>{t("download_p")}</h3>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <DownloadButtons/>
        </div>
      </div>
    </div>
  );
};
