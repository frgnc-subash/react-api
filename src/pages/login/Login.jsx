import axios from "axios";
import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const LOGIN_URL = "https://api.escuelajs.co/api/v1/auth/login";
  const hitLogin = async () => {
    const payload = {
      email,
      password: password,
    };
    const response = await axios.post(LOGIN_URL, payload);
    localStorage.setItem("token", response.data.access_token);
  };
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={hitLogin} disabled={!email || !password}>
        Login
      </button>
    </div>
  );
};

export default Login;
