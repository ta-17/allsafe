// React and Next.js imports
import Image from 'next/image'
import Link from 'next/link'

// Third-party library imports
import Balancer from 'react-wrap-balancer'

// UI component imports
import { Button } from '../ui/button'

// Icon imports
import { Github, Twitter, Facebook } from 'lucide-react'

// Local component imports
import { Section, Container } from '../craft'

// Asset imports
import Logo from '@/public/next.svg'
import { TypographyH3 } from '@/typography/h3'

export default function Footer() {
    return (
        <footer className="p-0">
            <Section className="w-full bg-black text-background m-0">
                <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr]">
                    <div className="not-prose flex flex-col gap-6">
                        <Link href="/">
                            <TypographyH3 className="">AllSafe</TypographyH3>
                            {/* <Image
                                src={'../public/next.svg'}
                                alt="Logo"
                                width={120}
                                height={27.27}
                                className="transition-all hover:opacity-75 dark:invert"
                            ></Image> */}
                        </Link>
                        <p>
                            <Balancer>
                                AllSafe is a platform that provides youth&apos;s
                                with the ability to protect themselves online
                                from digital scams.
                            </Balancer>
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Website</h5>
                        <Link className="underline" href="/scams">
                            Scam Tactic
                        </Link>
                        <Link className="underline" href="/quiz">
                            Quiz
                        </Link>
                        <Link className="underline" href="/game">
                            Game
                        </Link>
                        {/* <Link className="underline" href="/">
                            AI Model
                        </Link> */}
                        <Link className="underline" href="/data-sources">
                            Data Sources
                        </Link>
                        <Link className="underline" href="/about">
                            About Us
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Resources</h5>
                        <Link href="/data-sources" className="underline">
                            Data Sources
                        </Link>
                        <Link href="/resources/news" className="underline">
                            News
                        </Link>
                        <Link href="/help" className="underline">
                            Report a scam.
                        </Link>
                        <Link href="/help/post" className="underline">
                            Get help.
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5>Legal</h5>
                        {/* <Link className="underline" href="/privacy-policy">
                            Privacy Policy
                        </Link>
                        <Link className="underline" href="/terms-of-service">
                            Terms of Service
                        </Link>
                        <Link className="underline" href="/cookie-policy">
                            Cookie Policy
                        </Link> */}
                    </div>
                </Container>
                <Container className="not-prose flex flex-col justify-end gap-6 border-t md:flex-row md:items-center md:gap-2">
                    {/* <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <Github />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Twitter />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Facebook />
                        </Button>
                    </div> */}
                    <p>© allsafe. All rights reserved. 2024-present.</p>
                </Container>
            </Section>
        </footer>
    )
}
