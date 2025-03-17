import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.username === "" ||
      userData.password === "" ||
      userData.confirmPassword === ""
    ) {
      alert("Please fill in all fields");
    }
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match");
    }

    if (userData.password === userData.confirmPassword) {
      alert("Successfully registered");
      navigate("/");
    }
  };

  return (
    <>
      <h1>Register form</h1>
      <form className="myform">
        <label>Username:</label>
        <input type="text" onChange={handleChange} name="username" />
        <br />
        <label>Password:</label>
        <input type="password" onChange={handleChange} name="password" />
        <br />
        <label>Confirm Password:</label>
        <input type="password" onChange={handleChange} name="confirmPassword" />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
