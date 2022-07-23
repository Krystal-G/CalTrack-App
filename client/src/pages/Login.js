import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";
import "boxicons";

const url = "http://localhost:8080";
const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { User, userName } = useContext(GlobalContext);

  const handleChange = (fieldName) => (e) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (
        !formData.username ||
        !formData.email ||
        !formData.password ||
        !formData.verifyPassword
      ) {
        alert("Please provide all details!!!");
      } else if (formData.password !== formData.verifyPassword) {
        alert("Passwords do not match...Please check again!!!");
      } else {
        const userData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };
        axios
          .post(`${url}/api/register`, userData)
          .then((res) => {
            alert("Registered Succesfully");
            setIsSignUp(false);
            navigate("/login");
          })
          .catch((err) => {
            alert(err.response.data.msg);
          });
      }
    } else {
      if (!formData.username || !formData.password) {
        alert("Please provide all details");
      } else {
        const userData = {
          username: formData.username,
          password: formData.password,
        };
        axios
          .post(`${url}/api/login`, userData)
          .then((res) => {
            User(userData.username);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    setFormData({
      username: "",
      email: "",
      password: "",
      verifyPassword: "",
    });
    setShowPassword(false);
  };
  return (
    <div className="login-container h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full flex flex-col justify-center items-start">
        <p className="px-20 text-8xl text-white">CalTrack</p>
        <p className="px-20 pt-5 text-3xl text-white">Track what you eat.</p>
        <p className="px-20 py-3 text-3xl text-white">Stay Healthy.</p>
      </div>
      <div className="flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray p-8 px-8 rounded-lg"
        >
          <div className="flex flex-col py-4">
            <label className="font-bold txt-dkgreen">UserName</label>
            <input
              className="rounded-lg bg-gray mt-2 p-2 focus:border-green-500 focus:bg-gray-200"
              type="text"
              placeholder="Enter your username"
              autoComplete="off"
              name="username"
              value={formData.username}
              onChange={handleChange("username")}
            ></input>
          </div>
          {isSignUp && (
            <div className="flex flex-col py-4">
              <label className="font-bold txt-dkgreen">Email</label>
              <input
                className="rounded-lg bg-gray mt-2 p-2 focus:border-green-500 focus:bg-gray-200"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                value={formData.email}
                onChange={handleChange("email")}
              ></input>
            </div>
          )}
          <div className="flex flex-col py-4">
            <label className="font-bold txt-dkgreen">Password</label>
            <div className="flex flex-row justify-between">
              <input
                className="rounded-lg bg-gray mt-2 p-2 focus:border-green-500 focus:bg-gray-200"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="off"
                name="password"
                value={formData.password}
                onChange={handleChange("password")}
              ></input>
              <p
                onClick={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true);
                }}
                className="hover:cursor-pointer"
              >
                {showPassword ? (
                  <box-icon name="hide"></box-icon>
                ) : (
                  <box-icon name="show"></box-icon>
                )}
              </p>
            </div>
          </div>
          {isSignUp && (
            <div className="flex flex-col py-4">
              <label className="font-bold txt-dkgreen">Verify Password</label>
              <input
                className="rounded-lg bg-gray mt-2 p-2 focus:border-green-500 focus:bg-gray-200"
                type="text"
                placeholder="Enter your password again"
                autoComplete="off"
                name="verifyPassword"
                value={formData.verifyPassword}
                onChange={handleChange("verifyPassword")}
              ></input>
            </div>
          )}
          <button
            className="w-full my-5 py-2 bg-dkgreen txt-ltgreen"
            type="submit"
          >
            {isSignUp ? "SignUp" : "Login"}
          </button>
          {isSignUp ? (
            <div className="flex flex-row-reverse">
              <p
                className="hover:cursor-pointer underline"
                onClick={() => setIsSignUp(false)}
              >
                Already have an account? Login
              </p>
            </div>
          ) : (
            <div className="flex flex-row-reverse">
              <p
                className="hover:cursor-pointer underline"
                onClick={() => setIsSignUp(true)}
              >
                Don't have an account? Register
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
