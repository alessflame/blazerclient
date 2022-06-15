import React from "react";
import RegisterFormUser from "../components/Forms/RegisterFormUser";

function Register() {
  return (
    <div className="registerPage">
      <h1
        className="title"
        style={{
          position: "absolute",
          top: "5px",
          left: "10px",
          fontSize: "50px",
          color: "#2d44a0",
        }}
      >
        Blazer
      </h1>

      <div className="registerForm">
        <RegisterFormUser />
      </div>
    </div>
  );
}

export default Register;
