import Link from 'next/link'
import React, { useState } from 'react'
import { PopoverDemo } from './popover-navbar'
import { PopoverInteractive } from './popover-interactive'
import { PopoverHelp } from './popover-help'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const NavbarLinks = ({
    setIsOpen,
}: {
    setIsOpen?: (open: boolean) => void
}) => {
    return (
        <div
            className="flex flex-col md:flex-row gap-y-1 md:gap-x-4 items-end justify-items-end"
            onClick={() => {
                // if (setIsOpen !== undefined) setIsOpen(false)
            }}
        >
            <div className="w-full px-6">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="w-full">
                        <AccordionTrigger>Insights</AccordionTrigger>
                        <AccordionContent>
                            <Link
                                href="/scams"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Scam Tactic
                            </Link>
                        </AccordionContent>
                        <AccordionContent>
                            <Link
                                href="/insights"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Data Insights
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="w-full px-6">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="w-full">
                        <AccordionTrigger>Playground</AccordionTrigger>
                        <AccordionContent>
                            <Link
                                href="/quiz"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Quiz
                            </Link>
                        </AccordionContent>
                        <AccordionContent>
                            <Link
                                href="/game"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Game
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="w-full px-6">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="w-full">
                        <AccordionTrigger>Resources</AccordionTrigger>
                        <AccordionContent>
                            <Link
                                href="/resources/news"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                News
                            </Link>
                        </AccordionContent>
                        <AccordionContent>
                            <Link
                                href="/data-sources"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Data Sources
                            </Link>
                        </AccordionContent>
                        <AccordionContent>
                            <Link
                                href="/help"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Report a scam
                            </Link>
                        </AccordionContent>
                        <AccordionContent>
                            <Link
                                href="/help/post"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Get help
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Link
                href="/about"
                className="w-full text-left px-6 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
                About Us
            </Link>
        </div>
    )
}

export default NavbarLinks
