import React from "react";
import style from "./LoaderSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.loadingSpinner}>
      </div>
    </div>
  );
}