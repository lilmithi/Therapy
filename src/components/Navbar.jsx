import React from "react";

function Navbar() {
  return (
    <div className="w-full relative z-10">
      <div className=" absolute top-0 left-0 w-full flex items-center flex-wrap justify-between p-4 lg:pr-12">
        <h3 className="text-xl md:text-2xl uppercase font-extrabold tracking-wider text-[#2595be] first-letter:text-green-600 first-letter:text-3xl">
          Therapy
        </h3>
        <ul className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap items-center">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
