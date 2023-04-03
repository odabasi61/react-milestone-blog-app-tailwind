import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuthCall from "../../hooks/useAuthCall";
import { useState } from "react";

const Login = () => {
  const { login } = useAuthCall();

  return (
    <div className="p-4">
      <div className="text-center py-12">
        <AiOutlineLock
          size={80}
          className="m-auto p-4 bg-white/80 text-orange-500 rounded-full"
        />
        <h2 className="pt-8 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          SIGN IN NOW
        </h2>
      </div>
      <div>
        <form className="bg-white/60 rounded-lg p-4 shadow-2xl w-full md:w-4/5 xl:w-3/5 m-auto">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/2 xl:w-1/4 px-5 py-2.5 text-center shadow-xl"
            >
              Sign in
            </button>
          </div>
        </form>
        <h2 className="pt-16 pb-20 font-bold text-center text-xl">
          You haven't registered yet?{" "}
          <Link
            className="text-blue-900 underline hover:text-white duration-300"
            to={"/register"}
          >
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
