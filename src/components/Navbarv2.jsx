import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";

export default function Navbarv2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 shadow shadow-gray-800 sticky top-0 z-30">
        <div className="">
          <a
            className="btn btn-ghost text-sm font-custom"
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="" className="w-7 translate-x-2 pb-1" />
            Celluloid
          </a>
        </div>
        <div className="hidden lg:flex flex-1 ml-4">
          <ul className="menu menu-horizontal px-1">
            <li onClick={() => navigate("/dashboard")}>
              <a>Dashboard</a>
            </li>
            <li onClick={() => navigate("/generate")}>
              <a>Ai Generate</a>
            </li>
            <li>
              <a>Help</a>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-800"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
