'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import NavbarLinks from './link-components'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'

// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: 'Alert Dialog',
//         href: '/docs/primitives/alert-dialog',
//         description:
//             'A modal dialog that interrupts the user with important content and expects a response.',
//     },
//     {
//         title: 'Hover Card',
//         href: '/docs/primitives/hover-card',
//         description:
//             'For sighted users to preview content available behind a link.',
//     },
//     {
//         title: 'Progress',
//         href: '/docs/primitives/progress',
//         description:
//             'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//     },
//     {
//         title: 'Scroll-area',
//         href: '/docs/primitives/scroll-area',
//         description: 'Visually or semantically separates content.',
//     },
//     {
//         title: 'Tabs',
//         href: '/docs/primitives/tabs',
//         description:
//             'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//     },
//     {
//         title: 'Tooltip',
//         href: '/docs/primitives/tooltip',
//         description:
//             'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//     },
// ]

const resources: { title: string; href: string; description: string }[] = [
    {
        title: 'News',
        href: '/resources/news',
        description:
            'Get the latest news and keep up to date with the latest scams.',
    },
    {
        title: 'Data sources',
        href: '/data-sources',
        description:
            ' Learn about our data sources, their reliability and source.',
    },
    {
        title: 'Report scams',
        href: '/help',
        description:
            'Learn to report scams on the three most popular social media platforms.',
    },
    {
        title: 'Get help',
        href: '/data-sources',
        description:
            'Guides on securing your accounts, and taking steps to recover from fraudulent activities',
    },
    // {
    //     title: 'Hover Card',
    //     href: '/docs/primitives/hover-card',
    //     description:
    //         'For sighted users to preview content available behind a link.',
    // },
]

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const funOpen = (open: boolean) => {
        setIsOpen(open)
    }

    const pathname = usePathname()
    const isGamePage = pathname === '/game'

    if (isGamePage) {
        return null
    }

    return (
        <div className="z-10">
            <div className="hidden sm:flex items-center justify-around w-full p-2">
                <div className="text-xl font-bold">
                    <Link href="/">AllSafe</Link>
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="flex justify-center">
                        {/* Add flex and justify-center */}
                        <NavigationMenuItem>
                            <Link href="/scams" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Scam Tactics
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Playground
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <Icons.logo className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Beautifully designed
                                                    components that you can copy
                                                    and paste into your apps.
                                                    Accessible. Customizable.
                                                    Open Source.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {/* <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI
                                    and Tailwind CSS.
                                </ListItem> */}
                                    <ListItem href="/quiz" title="Quiz">
                                        Test your ability to detect scams.
                                    </ListItem>
                                    <ListItem href="/game" title="Game">
                                        Play the AllSafe game. Immerse yourself
                                        in realistic scenarios.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Resources
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {resources.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex flex-col sm:hidden w-full z-20">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <Button
                        onClick={() => {
                            console.log('Hey i was clicked')
                        }}
                        className="md:hidden"
                    >
                        Click me{' '}
                    </Button>
                    <div className="text-xl font-bold">
                        <Link href="/">AllSafe</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col items-end px-9 pt-2 pb-3 space-y-1">
                            <NavbarLinks setIsOpen={funOpen} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'
