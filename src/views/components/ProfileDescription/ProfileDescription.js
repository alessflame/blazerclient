import React from "react";
import stile from "./profileDescription.module.css";

function ProfileDescription({
  fullname,
  description,
  username,
  isAgency,
  iconAvatar,
}) {
  return (
    <div className={stile.container}>
      <img
        src={`https://blazertravels.herokuapp.com${iconAvatar}`}
        className={stile.icon}
        alt="pic"
      />

      <h3>{fullname}</h3>
      <b>{username}</b>

      <section>{description}</section>

      <span>
        {isAgency === true ? <samp>Agenzia</samp> : <samp>Utente</samp>}
      </span>
    </div>
  );
}

export default ProfileDescription;
