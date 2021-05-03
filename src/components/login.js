import React, { useState } from "react";
import axios from "axios";

import { auth } from "../actions/auth";

import "../style/login.css";

const Login = (props) => {
  const [account, setAccount] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://reqres.in/api/login",
        account,
        config
      );

      if (response.status === 200) {
        auth(response.data, () => {
          props.history.push("/");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner shadow-sm">
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={account.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={account.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
