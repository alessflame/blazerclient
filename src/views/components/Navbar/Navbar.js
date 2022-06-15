import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome, BiIdCard, BiWorld, BiDownArrow } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import {logoutUser} from "../../../helper/auth"


import stile from "./navBar.module.css";

function NavBar() {
  const { auth, tema } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [select, setSelect] = useState(1);
  const [showLogout, setShowLogout] = useState(false);

  const control = (num) => {
    if (select === num) {
      return { backgroundColor: "var(--blue--dark)" };
    }
  };

  return (
    <div className={stile.container}>
      <div className={stile.navbarBox}>
        <nav className={stile.nav}>
          <Link to="/dashboard" style={control(1)} onClick={() => setSelect(1)}>
            <BiHome />
          </Link>
          <Link
            to="/dashboard/world/posts"
            style={control(2)}
            onClick={() => setSelect(2)}
          >
            <BiWorld />
          </Link>
          <Link
            to="/dashboard/profile"
            style={control(3)}
            onClick={() => setSelect(3)}
          >
            <BiIdCard />
          </Link>
          <Link
            to="/dashboard/settings"
            style={control(4)}
            onClick={() => setSelect(4)}
          >
            <FiSettings />
          </Link>
        </nav>

        <span
          className={
            tema.darkMode === true ? stile.userSpanDark : stile.userSpan
          }
        >
          <b>
            {" "}
            Hi ,
            <Link to="/dashboard/profile" onClick={() => setSelect(3)}>
              {auth.userInfo.username}
            </Link>{" "}
            <BiDownArrow
              className={stile.iconLogout}
              onClick={() => setShowLogout(!showLogout)}
            />{" "}
          </b>
          {showLogout === true ? (
            <b className="button" onClick={() => dispatch(logoutUser())}>
              Logout
            </b>
          ) : null}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
