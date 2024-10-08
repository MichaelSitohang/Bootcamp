import React from "react";
// import RealTimeClock from "./realTimeClock";


// Buat menampilkan elemen
const Nav = () => {
  return (
    <div>
      <nav className="bg-gray-600 p-4 text-white flex items-center justify-between">
        <a className="mr-2" href="/">
          Index
        </a>
        <a className="mr-2" href="/about">
          About
        </a>
        <a className="mr-2" href="/contact">
          Contact
        </a>


        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
        </svg>

      </nav>
    </div>
  )
};

export default Nav;
