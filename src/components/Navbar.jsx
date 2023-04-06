import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../assets/blog.png";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

const Navbar = () => {
  const { currentUser, image, username } = useSelector((state) => state.auth);
  const { logout } = useAuthCall();

  return (
    <div>
      <nav className="p-4">
        <div className="flex flex-wrap items-center justify-between rounded-lg mx-auto p-4 bg-blue-950">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-300">
              Insightful Views
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-orange-200 relative">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pl-3 pr-4 md:p-4 focus:bg-orange-400 rounded focus:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"advertising"}
                  className="block py-2 pl-3 pr-4 md:p-4  focus:bg-orange-400 rounded focus:text-white md:border-0"
                >
                  Advertising
                </Link>
              </li>
              <li>
                <Link
                  to={"about"}
                  className="block py-2 pl-3 pr-4 md:p-4  focus:bg-orange-400 rounded focus:text-white  md:border-0"
                >
                  About Us
                </Link>
              </li>
              <li className="hidden userName-hover:block">
                <span className="text-black bg-white p-2 rounded-lg absolute -bottom-6 right-20">
                  {currentUser}
                </span>
              </li>
              <li className="userName">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 md:p-2  focus:bg-orange-400 rounded focus:text-white md:border-0 md:w-auto"
                >
                  <span className="block md:hidden">Profile </span>
                  {!currentUser ? (
                    <CgProfile size={40} className="hidden md:block" />
                  ) : (
                    <img
                      className="hidden md:block rounded-full"
                      style={{ width: "40px" }}
                      src={image}
                      alt="profile pic"
                    />
                  )}
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to={"/new-blog"}
                        className="block px-4 py-2 hover:bg-orange-100  focus:bg-orange-400 rounded focus:text-white"
                      >
                        New Blog
                      </Link>
                      <Link
                        to={"/my-blogs"}
                        className="block px-4 py-2 hover:bg-orange-100  focus:bg-orange-400 rounded focus:text-white"
                      >
                        My Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/my-profile"}
                        className="block px-4 py-2 hover:bg-orange-100  focus:bg-orange-400 rounded focus:text-white"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"register"}
                        className="block px-4 py-2 hover:bg-orange-100  focus:bg-orange-400 rounded focus:text-white"
                      >
                        Register
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    {!currentUser ? (
                      <Link
                        to={"login"}
                        className="block px-4 py-2 text-sm hover:bg-orange-100  focus:bg-orange-400 rounded focus:text-white"
                      >
                        Sign in
                      </Link>
                    ) : (
                      <Link
                        to={"/"}
                        onClick={() => logout()}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-orange-100  focus:bg-orange-400 rounded focus:text-white"
                      >
                        Sign out
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
