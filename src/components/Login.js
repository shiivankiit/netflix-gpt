import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  // This will change the state from sign-in to sign-up form.
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
     //Validate the form data for validation we create a utility inside utils.
    //use validate function here which is define inside utility in validate.js.
   //To acess the data of email and password we use useRef hook
    console.log(email.current.value);//email.current is refering to my input box.
    console.log(password.current.value);//passoword.current is refering to my input box.
    console.log(name.current.value);
      //Validation
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    console.log(message);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    
    <div>
      <Header />
      {/* Scrollable background */}
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
          alt="background"
        />
        <div className="bg-black opacity-50 absolute inset-0" />
      </div>

      {/* Fixed form */}
      <form
        onSubmit={(e) => {e.preventDefault();
          handleButtonClick();}
        }
        className="w-full md:w-3/12 max-w-lg min-w-min absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
        <h1 className="font-bold text-4xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
         {/*This input display when form is not a signin form.*/}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-lg"
            arial-label="Full Name"
          />
        )}

        <input
         //here we use ref from useref hook and
         //this email is a refrence to this input boox
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-5 my-5 w-full bg-gray-700 text-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-5 my-5 w-full bg-gray-700 text-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-5 my-8 bg-red-700 w-full rounded-lg text-xl"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-8 cursor-pointer text-lg" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign in Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;


