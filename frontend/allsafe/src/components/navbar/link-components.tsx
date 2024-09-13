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
            <Link href="/scams" className="hover:text-gray-400">
                Scam Tactic
            </Link>
            <Link href="/quiz" className="hover:text-gray-400">
                Quiz
            </Link>
            <Link href="/game" className="hover:text-gray-400">
                Game
            </Link>
            <PopoverInteractive className="hidden sm:block" />
            <Link
                href="/resources/news"
                className="block sm:hidden hover:text-gray-400"
            >
                News
            </Link>
            <Link href="/data-sources" className="hover:text-gray-400">
                Data Sources
            </Link>
            <Link href="/help" className="hover:text-gray-400">
                Report a scam
            </Link>
            <Link href="/help/post" className="hover:text-gray-400">
                Get help
            </Link>
            <Link href="/about" className="hover:text-gray-400">
                About Us
            </Link>
        </div>
    )
}

export default NavbarLinks
