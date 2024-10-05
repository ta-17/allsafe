import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

export const Navigation = ({
    isOpen,
    toggle,
}: {
    isOpen: boolean
    toggle: any
}) => {
    return (
        <motion.ul
            variants={variants}
            className="p-6 top-24"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
        >
            {navItems.map((item, index) => (
                <MenuItem
                    item={item}
                    key={index}
                    index={index}
                    toggle={toggle}
                />
            ))}
        </motion.ul>
    )
}

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
        trigger: '',
        link: { href: '/ai/detect-scams', text: 'Detect Scam' },
    },
    {
        trigger: '',
        link: {
            href: '/ai/detect-fake-profile',
            text: 'Fake Profile Detector',
        },
    },
]
