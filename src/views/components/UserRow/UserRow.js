import React from "react";
import stile from "./userRow.module.css";
import { Link } from "react-router-dom";

function User({ _id, username, iconAvatar, isAgency }) {
  return (
    <div className={stile.container}>
      <section className={stile.user} key={_id}>
        <img className={stile.icon} src={`https://blazertravels.herokuapp.com${iconAvatar}`} alt="iconAvatar" />
        <Link to={`/dashboard/world/users/${_id}`}>{username}</Link>
      </section>
      {isAgency === true ? <samp>agenzia</samp> : " "}
    </div>
  );
}

export default User;
