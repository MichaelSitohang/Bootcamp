import React from "react";
import RealTimeClock from "./realTimeClock";


// Buat menampilkan elemen
const Nav = () => {
  return (
    <div>
      <nav className="bg-gray-600 p-3 text-white flex items-center justify-between">
        <div className="">
          <a className="mr-6" href="/"> Home
          </a>
          <a className="mr-6" href="/about">
            About
          </a>
          <a className="mr-6" href="/contact">
            Contact
          </a>
          <a className="mr-6" href="/youtube">
            Youtube
          </a>
          <a className="mr-6" href="/form">
            Form Page
          </a>
        </div>

        <div className="flex items-center">
          <RealTimeClock/>
          <svg class="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </div>

      </nav>
    </div>
  )
};

export default Nav;
