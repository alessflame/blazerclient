import React from "react";
import "../../index.css";

function Page404() {
  return (
    <div>
      <h1
        className="title"
        style={{
          position: "absolute",
          top: "10px",
          left: "20px",
          fontSize: "50px",
          color: "#2d44a0",
        }}
      >
        Blazer
      </h1>
      <section className="page404">
        <h2>404 Not Found</h2>
        <b>La pagina cercata non esiste</b>
      </section>
    </div>
  );
}

export default Page404;
