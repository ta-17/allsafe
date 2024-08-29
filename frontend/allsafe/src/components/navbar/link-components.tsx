import Link from 'next/link'
import React, { useState } from 'react'

const NavbarLinks = () => {
    return (
        <>
            <Link href="/scams" className="hover:text-gray-400">
                Scam Information
            </Link>
            <Link href="/data-sources" className="hover:text-gray-400">
                Data Sources
            </Link>
            <Link href="/quiz" className="hover:text-gray-400">
                Quiz
            </Link>
            <Link href="/about" className="hover:text-gray-400">
                About Us
            </Link>
        </>
    )
}

export default NavbarLinks
