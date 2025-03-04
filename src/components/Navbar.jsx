import React from "react";
import Logo from "../assets/logo.svg";

import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar bg-base-100 shadow shadow-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-sm font-custom">
            <img src={Logo} alt="" className="w-7 translate-x-2 pb-1" />
            Celluloid
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={() => navigate("/dashboard")}>
            Get started
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
}
