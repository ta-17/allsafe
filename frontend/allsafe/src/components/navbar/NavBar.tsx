'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavbarLinks from './link-components'

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-gray-800 text-white w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-xl font-bold">
                    <Link href="/">AllSafe</Link>
                </div>
                <div className="hidden md:flex space-x-4 sm:px-9">
                    <NavbarLinks setIsOpen={undefined} />
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
                    <div className="flex flex-col items-end px-9 pt-2 pb-3 space-y-1">
                        <NavbarLinks setIsOpen={setIsOpen} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar
