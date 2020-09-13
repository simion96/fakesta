import React,  { useContext } from "react";
import { Form } from "./Login";
import logo from "../assets/logo.png";
import { login, me } from "../services/api";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";


const Signup = ({ login }) => {
  const { setUser } = useContext(UserContext);
  const email = useInput("");
  const fullname = useInput("");
  const username = useInput("");
  const password = useInput("");

  const handleLogin = async e => {
    e.preventDefault();

    const body = {
      email: email.value,
      password: password.value,
      username: username.value,
      fullname: fullname.value
    };

    const tokenResponse = await login({ url: "/auth/signup", body });

    const userResponse = await me({
      url: "/auth/me",
      token: tokenResponse.data.token
    });

    userResponse.data.data.token = tokenResponse.data.token;

    localStorage.setItem("user", JSON.stringify(userResponse.data.data));
    setUser(userResponse.data.data);

    fullname.setValue("");
    username.setValue("");
    password.setValue("");
    email.setValue("");
  };

  return (
    <Form onSubmit={handleLogin}>
      <img src={logo} alt="logo" />

      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={email.onChange}
        />
        <input type="text"
          placeholder="Full Name"
          onChange={fullname.onChange} />
        <input type="text"
          placeholder="Username"
          onChange={username.onChange} />
        <input type="password" placeholder="Password" onChange={password.onChange} />
        <input type="submit" value="Sign up" className="signup-btn" />
      </form>

      <div>
        <p>
          <span onClick={login}>Login</span>
        </p>
      </div>
    </Form>
  );
};

export default Signup;
