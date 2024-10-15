import Header from "./Header";
import { useState } from "react";

const Login = () => {
  // This will change the state from sign-in to sign-up form.
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 overflow-auto ">
        <img
          className="object-cover w-full min-h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
          alt="background"
        />
      </div>
      <form className="w-full md:w-4/12 absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-4xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/*This input display when form is not a signin form.*/}
        {!isSignInForm && <input
        type="text"
        placeholder="Full Name"
        className="p-4 my-4 w-full bg-gray-700"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-5 my-5 w-full bg-gray-700 text-lg"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="p-5 my-5 w-full bg-gray-700 text-lg"
        />
        <button className="p-5 my-8 bg-red-700 w-full rounded-lg text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-8 cursor-pointer text-lg" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;