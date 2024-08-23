import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/quiz" className="hover:text-gray-400">
            Quiz
          </Link>
          <Link href="/check" className="hover:text-gray-400">
            Check
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
