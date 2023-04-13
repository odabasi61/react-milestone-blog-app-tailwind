import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthCall from "../../hooks/useAuthCall";

const Register = () => {
  // register için api işlemlerini useauthcall de yaptık ve buraya registeri çağırdık. state kullanımı ile register bilgilerini form submitte göndereceğiz. state kullanırken verdiğimiz değerler backenddekiyle aynı olmalı (user_name gibi). ayrıca inputta value kısmına ne yazdıysak (mesela formdata.email) name de de aynı olmalı (name='email'). aynı işlemleri loginde de yapıyoruz.
  const { register } = useAuthCall();

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    bio: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
    setFormData({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
      bio: "",
      image: "",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-center p-4 bg-white/60 shadow-2xl w-1/4 mx-auto text-orange-500 rounded-full mt-4 mb-12 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        REGISTER NOW
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white/60 rounded-lg p-4 shadow-2xl w-full md:w-4/5 xl:w-3/5 m-auto"
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="username"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.username}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.password}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password2"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.password2}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.first_name}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.last_name}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="image"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.image}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Profile picture
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="bio"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.bio}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Bio
            </label>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/2 xl:w-1/4 px-5 py-2.5 text-center shadow-xl"
          >
            Submit
          </button>
        </div>
      </form>
      <h2 className="py-16 font-bold text-center text-xl">
        Have you already registered?{" "}
        <Link
          className="text-blue-900 underline hover:text-white duration-300"
          to={"/login"}
        >
          Sign in
        </Link>
      </h2>
    </div>
  );
};

export default Register;
