import React, { useRef } from "react";
import stile from "./forms.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {openModal} from "../../../redux/slices/modalSlice"

import { createUser } from "../../../helper/auth";

function RegisterFormUser() {
  const [isUser, setIsUser] = useState(true);

  const dispatch=useDispatch();

  const formRef = useRef(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const data = await createUser(formData, isUser);
    dispatch(openModal(data.message));
    if (data.status === 201) {
      return navigate("/");
    }

    
  };

  return (
    <div>
      <section className={stile.sectionButton}>
        <h3>Come vuoi registrarti?</h3>

        <b
          className="button"
          style={isUser === true ? { backgroundColor: "var(--blue--green)" } : null}
          onClick={() => setIsUser(true)}
        >
          {" "}
          Utente{" "}
        </b>
        <b
          className="button"
          style={isUser === false ? { backgroundColor: "var(--blue--green)" } : null}
          onClick={() => setIsUser(false)}
        >
          {" "}
          Agenzia{" "}
        </b>
      </section>

      {isUser === true ? (
        <form ref={formRef} className={stile.form} method="POST">
          <label htmlFor="name"> Nome</label>
          <input name="name" type="text" placeholder="nome" />
          <label htmlFor="surname"> Cognome</label>
          <input name="surname" type="text" placeholder="cognome" />
          <label htmlFor="email"> Email</label>
          <input name="email" type="text" placeholder="email" />
          <label htmlFor="username"> Username</label>
          <input name="username" type="text" placeholder="username" />
          <label htmlFor="username"> Password</label>
          <input name="password" type="password" placeholder="password" />
          <label htmlFor="confirmPassword"> Conferma Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="password"
          />

          <input
            type="submit"
            value="Registrati"
            onClick={(e) => register(e)}
          />
        </form>
      ) : (
        <form ref={formRef} className={stile.form} method="POST">
          <label htmlFor="name"> Nome Agenzia</label>
          <input name="name" type="text" placeholder="nome" />
          <label htmlFor="email"> Email</label>
          <input name="email" type="email" placeholder="email" />
          <label htmlFor="partitaiva"> Partita Iva</label>
          <input name="partitaiva" type="text" placeholder="p. iva" />
          <label htmlFor="username"> Username</label>
          <input name="username" type="text" placeholder="username" />
          <label htmlFor="username"> Password</label>
          <input name="password" type="password" placeholder="password" />
          <label htmlFor="confirmPassword"> Conferma Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="password"
          />

          <input
            type="submit"
            value="Registrati"
            onClick={(e) => register(e)}
          />
        </form>
      )}

      <span className="registerSpan">
        {" "}
        Hai già un account?{" "}
        <Link style={{ color: "#1bb7ff", fontWeight: "600" }} to="/">
          Accedi
        </Link>{" "}
      </span>
    </div>
  );
}

export default RegisterFormUser;
