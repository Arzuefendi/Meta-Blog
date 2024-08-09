import React, { useState } from "react";
import Navbarr from "./Navbarr";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../images/login-img.png";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email) {
      errors.email = "Email boş buraxıla bilməz!";
    }

    if (!password) {
      errors.password = "Password boş buraxıla bilməz!";
    } else if (password.length < 6) {
      errors.password = "Password 6 simvoldan az olmamalıdır";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (
        userData &&
        userData.email === email &&
        userData.password === password
      ) {
        navigate("/dashboard");
      } else {
        setErrors({ email: "Email or password is incorrect" });
      }
    }
  };

  return (
    <div className="login">
      <Navbarr />
      <div className="login-box">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="text-center">LOGIN</h1>
          <div>
            <input
              className="input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register </Link>
          </p>
        </form>
        <div className="img-box">
          <img src={loginImg} alt="Login Visual" />
        </div>
      </div>
    </div>
  );
};
export default Login;
