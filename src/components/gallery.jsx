import { Image } from "./image";
import React from "react";
import { useTranslation } from "react-i18next";

export const Gallery = (props) => {
  const [t] = useTranslation();

  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title">
           <h2>{t("gallery_h1")}</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
