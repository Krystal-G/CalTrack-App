import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import "boxicons";

const Navbar = () => {
  const { userName } = useContext(GlobalContext);
  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="flex flex-wrap items-center mx-auto justify-between text-2xl">
        <Link className="txt-dkgreen font-bold" to="/">
          CalTrack
        </Link>
        {userName === "" ? (
          <Link to="/login">
            <button className="font-medium rounded-full bg-ltgreen txt-dkgreen hover:bg-green-800 hover:text-white px-5">
              Login
            </button>
          </Link>
        ) : (
          <div className="flex align-middle">
            <p className="txt-dkgreen px-2">{userName}</p>
            <box-icon name="user-circle"></box-icon>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
