"use client";
import { useState } from "react";
import Link from "next/link";
import { Handshake, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-800 sticky top-0 z-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between">
      <div className="flex space-x-10 text-lg">
        <Link
          href="#"
          className="text-white text-2xl font-bold hover:text-teal-800"
        >
          Portfolio
        </Link>
      </div>
      <div className="hidden lg:flex justify-center items-center flex-grow space-x-10 text-lg font-bold">
        <Link href="#" className="text-white hover:text-teal-800">
          Home
        </Link>
        <Link href="#Aboutme" className="text-white hover:text-teal-800">
          About
        </Link>
        <Link href="#ContactMe" className="text-white hover:text-teal-800">
          Contact
        </Link>
        <Link href="#" className="flex text-white hover:text-teal-800">
          <Handshake className="mr-1" /> Hire Me
        </Link>
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-teal-800 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-gray-800 w-full p-4 flex flex-col space-y-4 text-lg font-bold text-center lg:hidden">
          <Link href="#" className="text-white hover:text-teal-800">
            Home
          </Link>
          <Link href="#Aboutme" className="text-white hover:text-teal-800">
            About
          </Link>
          <Link href="#ContactMe" className="text-white hover:text-teal-800">
            Contact
          </Link>
          <Link href="#" className="flex justify-center text-white hover:text-teal-800">
            <Handshake className="mr-1" /> Hire Me
          </Link>
        </div>
      )}
    </div>
  );
}
