import React from "react";
import { Link } from "react-router-dom";
import stile from "./navSettings.module.css";

function NavSettings() {
  return (
    <nav className={stile.navSettings}>
      <Link to="/dashboard/settings/profile">Modifica Profilo</Link>
      <Link to="/dashboard/settings/posts">Gestisci Post</Link>
      <Link to="/dashboard/settings/layout">Modifica Tema </Link>
    </nav>
  );
}

export default NavSettings;
