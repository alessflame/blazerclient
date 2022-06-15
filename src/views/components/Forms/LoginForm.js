import React, { useCallback, useEffect, useRef } from "react";
import stile from "./forms.module.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../../redux/helper/auth";

function LoginForm() {
  const formRef = useRef(null);

  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Authentication = useCallback(() => {
    const formData = new FormData(formRef.current);
    dispatch(getAuthUser(formData));
  }, [dispatch]);

  const controlToNavigate = useCallback(() => {
    if (auth.userInfo.username) navigate("/dashboard");
  }, [auth.userInfo.username, navigate]);

  useEffect(() => {
    controlToNavigate();
  }, [controlToNavigate]);

  return (
    <div>
      <form ref={formRef} method="POST" id="loginForm" className={stile.form}>
        <label htmlFor="username"> Username</label>
        <input name="username" type="text" placeholder="username" />
        <label htmlFor="password"> Password</label>
        <input name="password" type="password" placeholder="password" />
        <input
          type="submit"
          value="accedi"
          onClick={(e) => {
            e.preventDefault();
            Authentication();
          }}
        />
      </form>
    </div>
  );
}

export default LoginForm;
