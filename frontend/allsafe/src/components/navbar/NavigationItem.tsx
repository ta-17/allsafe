import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import Link from 'next/link'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

export const Navigation = ({ toggle }) => {
    return (
        <div>
            <motion.ul variants={variants} className="p-6 top-24">
                {navItems.map((item, index) => (
                    <MenuItem
                        item={item}
                        key={index}
                        index={index}
                        toggle={toggle}
                    />
                ))}
            </motion.ul>
        </div>
    )
}

const itemIds = [0, 1, 2, 3, 4, 5]

const navItems = [
    {
        trigger: 'Insights',
        links: [
            { href: '/scams', text: 'Scam Tactic' },
            { href: '/insights', text: 'Data Insights' },
        ],
    },
    {
        trigger: 'Playground',
        links: [
            { href: '/quiz', text: 'Quiz' },
            { href: '/game', text: 'Game' },
        ],
    },
    {
        trigger: 'Resources',
        links: [
            { href: '/resources/news', text: 'News' },
            { href: '/data-sources', text: 'Data Sources' },
            { href: '/help', text: 'Report a scam' },
            { href: '/help/post', text: 'Get help' },
        ],
    },
    {
        trigger: 'About',
        links: [
            { href: '/about', text: 'About' },
            { href: '/contact', text: 'Contact' },
        ],
    },
]
