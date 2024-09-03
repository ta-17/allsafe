import Link from 'next/link'
import React, { useState } from 'react'

const NavbarLinks = ({ setIsOpen }: { setIsOpen: any }) => {
    return (
        <div
            className="flex flex-col md:flex-row gap-y-1 md:gap-x-4 items-end justify-items-end"
            onClick={() => setIsOpen(false)}
        >
            <Link href="/scams" className="hover:text-gray-400">
                Scam Information
            </Link>
            <Link href="/data-sources" className="hover:text-gray-400">
                Data Sources
            </Link>
            <Link href="/quiz" className="hover:text-gray-400">
                Quiz
            </Link>
            <Link href="/resources/news" className="hover:text-gray-400">
                News
            </Link>
            <Link href="/about" className="hover:text-gray-400">
                About Us
            </Link>
        </div>
    )
}

export default NavbarLinks
