"use client";
import React from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#615DFA] pt-4 pb-3.5 pl-6 pr-7">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex gap-3 items-center">
          <img src="./images/logo.svg" alt="" />
          <h2 className="font-poppins text-white text-xs font-bold">Socinex</h2>
        </Link>

        <button className="text-white">
          <IoMenu />
        </button>

        {/* Menu */}
        <div className="hidden lg:block max-w-88">
          <ul className="flex gap-4 xl:gap-12 items-center">
            <li className="menu">
              <Link href="/careers">Careers</Link>
            </li>
            <li className="menu">
              <Link href="/store">Store</Link>
            </li>
            <li className="menu">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="text-white">
              <HiDotsHorizontal />
            </li>
          </ul>
        </div>

        {/* Search */}
        <div className="w-75 lg:w-103.75 rounded-[11px] bg-[#4E4AC8] relative py-3 px-4">
          <input
            className="text-[#6965E0] w-full text-sm font-normal outline-none"
            placeholder="Search here ...."
            type="text"
          />
          <div className="absolute text-[#6763DF] top-[30%] right-6.5 w-3.5 h-3.5">
            <IoSearch />
          </div>
        </div>

        {/* EXP */}
        <div className="hidden lg:block">
          <div className="max-w-27.75 flex gap-11.5 font-poppins font-normal text-xs text-white mb-0.75 whitespace-nowrap">
            <p>Next</p>
            <p>35 EXP</p>
          </div>

          <div className="bg-[#4E4AC8] h-0.75 max-w-27.75">
            <div className="max-w-20.75 bg-[#41EFFF] h-0.75"></div>
          </div>
        </div>

        {/* Icons */}
        <div>
          <ul className="md:flex hidden gap-2 xl:gap-8.25 items-center">
            <li className="w-8 h-px bg-[#7A77FD] rotate-90"></li>

            <li className="w-4.5 h-4.5 text-[#7A77FD]">
              <Link href="/cart">
                <img src="./images/shopping-cart.svg" alt="" />
              </Link>
            </li>

            <li className="w-4.5 h-4.5 text-[#7A77FD]">
              <Link href="sms">
                <img src="./images/sms.svg" alt="" />
              </Link>
            </li>

            <li className="w-4.5 h-4.5 text-[#7A77FD]">
              <Link href="notification">
                <img src="./images/bell.svg" alt="" />
              </Link>
            </li>

            <li className=" w-8 h-px bg-[#7A77FD] rotate-90"></li>

            <li className="w-4.5 h-4.5 text-[#7A77FD]">
              <Link href="settings">
                <img src="./images/tools.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
