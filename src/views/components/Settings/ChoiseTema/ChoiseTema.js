import React from "react";
import { useDispatch } from "react-redux";
import stile from "./choiseTema.module.css";
import { darkMode } from "../../../../redux/slices/temaSlice";
import { openModal } from "../../../../redux/slices/modalSlice";

function ChoiseTema() {
  const dispatch = useDispatch();

  const setDarkMode = () => {
    localStorage.setItem("theme", "dark");
    dispatch(darkMode(true));
    dispatch(openModal("Nuovo tema impostato"));
  };

  const setLightMode = () => {
    localStorage.setItem("theme", "light");
    dispatch(darkMode(false));
    dispatch(openModal("Nuovo tema impostato"));
  };

  return (
    <div className={stile.container}>
      <section className={stile.sectionLight} onClick={setLightMode}>
        light-mode
      </section>

      <section className={stile.sectionDark} onClick={setDarkMode}>
        dark-mode
      </section>
    </div>
  );
}

export default ChoiseTema;
