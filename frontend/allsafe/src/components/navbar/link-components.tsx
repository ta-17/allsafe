import Link from 'next/link'
import React, { useState } from 'react'
import { PopoverDemo } from './popover-navbar'
import { PopoverInteractive } from './popover-interactive'

const NavbarLinks = ({
    setIsOpen,
}: {
    setIsOpen?: (open: boolean) => void
}) => {
    return (
        <div
            className="flex flex-col md:flex-row gap-y-1 md:gap-x-4 items-end justify-items-end"
            onClick={() => {
                if (setIsOpen !== undefined) setIsOpen(false)
            }}
        >
            <Link href="/scams" className="hover:text-gray-400">
                Scam Tactic
            </Link>
            <Link
                href="/data-sources"
                className="block sm:hidden hover:text-gray-400"
            >
                Data Sources
            </Link>
            <PopoverInteractive className="hidden sm:block" />
            <Link
                href="/resources/news"
                className="block sm:hidden hover:text-gray-400"
            >
                News
            </Link>
            <PopoverDemo className="hidden sm:block" />
            <Link href="/about" className="hover:text-gray-400">
                About Us
            </Link>
        </div>
    )
}

export default NavbarLinks
