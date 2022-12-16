import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { user, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({
        msg: "All fields are required",
        error: true,
      });
      return;
    }

    if (email !== user.email) {
      setAlert({
        msg: "User does not exist",
        error: true,
      });
      return;
    }

    if (password !== user.password) {
      setAlert({
        msg: "Incorrect password",
        error: true,
      });
      return;
    }

    setAlert({});
    setAuth(user);
    localStorage.setItem("token", user.token);
    navigate("/home");
  };

  const { msg } = alert;

  return (
    <div className='w-full h-[92vh] bg-white flex justify-center items-center px-5'>
      <div className='w-full md:w-1/2 bg-gray-200 rounded-md flex flex-col'>
        <h1 className=' w-full flex py-2 justify-center uppercase text-xl text-gray-600 font-bold'>
          Login
        </h1>

        <form className='w-full px-2 md:px-5' onSubmit={handleSubmit}>
          {msg && <Alert alert={alert} />}
          <div className='my-5'>
            <label
              className='uppercase text-gray-600 block font-bold pl-1'
              htmlFor='email'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your Email'
              className='w-full mt-1 p-3 border rounded-xl bg-gray-50'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='my-5'>
            <label
              className='uppercase text-gray-600 block font-bold pl-1'
              htmlFor='paswword'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Enter your Password'
              className='w-full mt-1 p-3 border rounded-xl bg-gray-50'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className='w-full py-2 flex justify-center items-center bg-blue-400 hover:bg-blue-500 rounded-md mb-2 md:mb-5 uppercase text-white'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
