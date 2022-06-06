import React from "react";

export const NavBar = () => {
  return (
    <nav className="bg-blue-900 flex justify-between py-4 px-6">
      <h3 className="text-gray-100 text-2xl font-bold">JSX Inc</h3>
      <ul className="flex gap-x-7 text-gray-200 text-lg font-medium px-4">
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};
