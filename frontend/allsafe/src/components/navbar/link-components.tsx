import Link from 'next/link'
import React, { useState } from 'react'
import { PopoverDemo } from './popover-navbar'
import { PopoverInteractive } from './popover-interactive'
import { PopoverHelp } from './popover-help'

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
            <Link
                href="/scams"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                Scam Tactic
            </Link>
            <Link
                href="/quiz"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                Quiz
            </Link>
            <Link
                href="/game"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                Game
            </Link>
            {/* <PopoverInteractive className="hidden sm:block" /> */}
            <Link
                href="/resources/news"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                News
            </Link>
            <Link
                href="/data-sources"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                Data Sources
            </Link>
            <Link
                href="/help"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                Report a scam
            </Link>
            <Link
                href="/help/post"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                Get help
            </Link>
            <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                About Us
            </Link>
        </div>
    )
}

export default NavbarLinks
