import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import backgroundVideo from "../../assets/video/backgroundblaze.mp4";
import "../../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";

function Login() {
  const { loader } = useSelector((state) => state);
  console.log(loader);

  return (
    <div className="loginPage">
      <h1
        className="title"
        style={{
          position: "absolute",
          top: "10px",
          left: "20px",
          fontSize: "50px",
          color: "#2d44a0",
          textShadow: "1px 1px 1px #8197b5",
        }}
      >
        Blazer
      </h1>

      <section id="videoBackground" style={{ width: "100%", height: "100vh" }}>
        <video loop={true} autoPlay={true} muted={true}>
          <source src={backgroundVideo} type="video/mp4" />
          Il tuo browser non supporta il video
        </video>{" "}
      </section>

      <section
        className="loginModule"
        style={{ position: "absolute", top: "35%" }}
      >
        <LoginForm />

        {loader.isLoad===true ? <LoaderSpinner/>: 
        <span className="registerSpan">
          {" "}
          Non hai un account?{" "}
          <Link style={{ color: "#1bb7ff", fontWeight: "600" }} to="/register">
            Registrati
          </Link>{" "}
        </span>}
      </section>
    </div>
  );
}

export default Login;
