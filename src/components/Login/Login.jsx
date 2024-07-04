import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = (e) => {
    let isValid = true;
    if (!formData.number || formData.number.length !== 10) {
      isValid = false;
    }
    if (!formData.password) {
      isValid = false;
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // API call
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center text-center">
      <form
        className="flex flex-col w-60  sm:w-80 md:w-96 justify-center text-center py-8 px-4 border-2 border-orange-600 rounded-xl shadow-lg shadow-orange-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500 hover:shadow-orange-500"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold mt-1 mb-4 text-orange-600">Login</h1>
        <div className="w-full flex justify-center gap-2 items-center">
          <h2 className="mx-auto border-2 py-3 px-2 rounded-2xl text-stone-400">
            +91
          </h2>
          <input
            type="text"
            name="number"
            value={formData.number}
            placeholder="Mobile Number"
            onChange={handleInputChange}
            className=" w-10/12 border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
        <input
          type="text"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          className="w-full border-2 mx-auto rounded-3xl py-3 px-4 my-2 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
        />

        <button className="mt-2 text-white py-2 border-2 border-orange-600 px-3 rounded-3xl bg-orange-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 active:bg-orange-700">
          Login
        </button>
        <p className="text-[10px] text-left px-3 my-1">
          By clicking on Login, I accept the{" "}
          <span className="font-semibold">Terms & Conditions</span> &{" "}
          <span className="font-semibold">Privacy Policy</span>
        </p>
        <p className="mt-5 text-sm">
          Don't have an account?{" "}
          <Link className="underline font-semibold hover:text-orange-600 active:text-orange-700" to="/register">
            Sign Up
          </Link>
        </p>
        <div className="text-center"></div>
      </form>
    </div>
  );
};

export default SignUp;