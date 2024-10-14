'use client'

// React and Next.js imports
import Link from 'next/link'
import Image from 'next/image'

// Third-party library imports
import Balancer from 'react-wrap-balancer'

// Local component imports
import { Button } from '@/components/ui/button'

// Asset imports
// import Logo from "@/public/logo.svg";
import { Container, Section } from '../craft'
import { TypographyH1 } from '@/typography/h1'
import { TypographyH3 } from '@/typography/h3'
import { TypographyLead } from '@/typography/lead'
import { TypographyH2 } from '@/typography/h2'
import FlickeringGrid from '../magicui/flickering-grid'
import AnimatedGridPattern from '../magicui/animated-grid-pattern'
import { cn } from '@/libs/utils'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { ArrowDown, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useDetectScamStore } from '@/data/store/detect-scam'
import { set } from 'zod'

const Hero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const router = useRouter()

    const [msg, onMsg] = useState('')

    const setSharedMsg = useDetectScamStore((state) => state.setSharedMsg)
    const setSharedSubmit = useDetectScamStore((state) => state.setSharedSubmit)

    const handleSubmit = () => {
        // window.localStorage.getItem('detectScam')
        const message = window.localStorage.getItem('detectScam')

        setSharedMsg(msg)

        if (message !== null && message.length > 0) {
            setSharedMsg(message)
        } else {
            window.localStorage.setItem('detectScam', msg)
        }

        setSharedSubmit()
        router.push('/ai/detect-scams')
    }

    useEffect(() => {
        console.log('Element is in view: ', isInView)
    }, [isInView])

    return (
        <div ref={ref}>
            <Section className="md:mb-60">
                <Container className="flex flex-col justify-center items-center text-center">
                    <>
                        <TypographyH2 className="mb-6 dark:invert md:mb-8">
                            <Balancer>AllSafe</Balancer>
                        </TypographyH2>
                        <TypographyH1 className="">
                            <Balancer>
                                Are you sick of getting scammed online?
                            </Balancer>
                        </TypographyH1>
                        <TypographyLead className="mt-4 text-muted-foreground">
                            <Balancer>
                                Our AI model is designed to assist in
                                identifying whether a message you received may
                                be a scam. Kindly input the message below for
                                analysis.
                            </Balancer>
                        </TypographyLead>
                    </>
                    <div className="flex w-2/3 z-10 gap-x-6 pt-24">
                        <Input
                            type="text"
                            className="flex justify-between bg-white"
                            value={msg}
                            placeholder="Enter message here"
                            onChange={(e) => onMsg(e.target.value)}
                        />
                        <Button
                            onClick={() => {
                                handleSubmit()
                            }}
                        >
                            Check for Scams
                            {/* <Search /> */}
                        </Button>
                    </div>
                    {/* <div className="not-prose mt-6 flex gap-2 md:mt-12">
                        <Button asChild>
                            <Link href="/">Get Started</Link>
                        </Button>
                        <Button variant={'ghost'} asChild>
                            <Link href="/posts">Learn More -{'>'}</Link>
                        </Button>
                    </div> */}
                </Container>
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                        'inset-x-0 inset-y-[-40%] h-[200%] skew-y-12'
                    )}
                />
            </Section>
        </div>
    )
}

export default Hero
