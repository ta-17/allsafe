import Link from 'next/link'
import React, { useState } from 'react'

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-gray-800 text-white fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-xl font-bold">
                    <Link href="/">AllSafe</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:text-gray-400">
                        Home
                    </Link>
                    <Link href="/scams" className="hover:text-gray-400">
                        Scam Information
                    </Link>
                    <Link href="/check" className="hover:text-gray-400">
                        Check
                    </Link>
                    <Link href="/data-sources" className="hover:text-gray-400">
                        Data Sources
                    </Link>
                    <Link href="/about" className="hover:text-gray-400">
                        About Us
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-200 hover:text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 6h16M4 12h16m-7 6h7'
                                }
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/quiz"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400"
                        >
                            Quiz
                        </Link>
                        <Link
                            href="/check"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400"
                        >
                            Check
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar
