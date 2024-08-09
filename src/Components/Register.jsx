import React, { useState } from "react";
import Navbarr from "./Navbarr";
import { useNavigate } from "react-router-dom";
import loginImg from "../images/login-img.png";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!username) {
      errors.username = "Username boş buraxıla bilməz!";
    } else if (!/^[a-zA-Z]+$/.test(username)) {
      errors.username = "Username rəqəmlərdən ibarət ola bilməz";
    }
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
      const userData = { username, email, password };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/login");
    }
  };

  return (
    <div className="login">
      <Navbarr />
      <div className="login-box">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="text-center">Register</h1>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
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
          <button type="submit">Register</button>
        </form>
        <div className="img-box">
          <img src={loginImg} />
        </div>
      </div>
    </div>
  );
};

export default Register;
