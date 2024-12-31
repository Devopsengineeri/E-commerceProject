import React, { useState } from "react";
import Footer from "../Components/Footer";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* Form Section */}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-[384px] m-auto mt-14 gap-4 text-gray-800"
        action=""
      >
        {/* Header Section */}
        <div className="inline-flex items-center gap-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Input Fields */}
        {currentState === "Sign Up" && (
          <input
            className="w-full px-3 py-2 border border-gray-800 rounded"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="w-full px-3 py-2 border border-gray-800 rounded"
          type="Email"
          placeholder="Email"
        />
        <input
          className="w-full px-3 py-2 border border-gray-800 rounded"
          type="password"
          placeholder="Password"
        />

        {/* Additional Options */}
        <div className="w-full flex justify-between text-sm mt-1 text-gray-800">
          <p className="cursor-pointer hover:underline">
            Forgot Your Password?
          </p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer hover:underline"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer hover:underline"
            >
              Login Here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button className="bg-black text-white font-light px-8 py-2 mt-4 rounded hover:bg-gray-800">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
