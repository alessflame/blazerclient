import React from "react";
import Travel from "../Travel/Travel";
import stile from "./sectionTravels.module.css";

function SectionTravels({ travels, isWrap, message }) {
  return (
    <div className={isWrap === true ? stile.containerWrap : stile.container}>
      {travels.data.length > 0 ? (
        travels.data.map((travel) => (
          <Travel key={travel._id} {...travel} />
        ))
      ) : (
        <h3>{message} </h3>
      )}
    </div>
  );
}

SectionTravels.defaultProps = {
  message: "Nessun Viaggio",
  isWrap: false,
};

export default SectionTravels;
