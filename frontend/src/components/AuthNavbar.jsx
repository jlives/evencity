import React from "react";
import { Link } from "react-router-dom";
import { FaCottonBureau } from "react-icons/fa";

const AuthNavbar = () => {
  return (
    <nav className="bg-blue-900 px-4 md:px-6 py-4">
      <div className="flex w-full items-center justify-center space-x-4">
        <Link to="/" className="flex items-center r space-x-2">
          <FaCottonBureau className="text-white h-8 md:h-11" />
          <h1 className="text-xl font-bold text-gray-100">Evencity</h1>
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
