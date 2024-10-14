// React and Next.js imports
import Link from 'next/link'
import Image from 'next/image'

// UI component imports
import { Section, Container } from '@/components/craft'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/typography/h3'
import { cn } from '@/libs/utils'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { TypographyH2 } from '@/typography/h2'

// Asset imports
// import Placeholder from "@/public/placeholder.jpg";

const FeatureRight = ({
    title,
    body,
    className,
    img,
    link,
}: {
    title: string
    body: string
    className?: string
    img?: any
    link?: string
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log('Element is in view: ', isInView)
    }, [isInView])

    return (
        <div ref={ref}>
            <Section>
                <Container
                    className={cn(
                        'grid items-stretch md:grid-cols-2 md:gap-12',
                        className
                    )}
                >
                    <div
                        className="flex flex-col gap-6 py-8"
                        style={{
                            transform: isInView ? 'none' : 'translateX(-200px)',
                            opacity: isInView ? 1 : 0,
                            transition:
                                'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }}
                    >
                        <TypographyH2 className="!my-0 text-left">
                            {title}
                        </TypographyH2>
                        <p className="font-light leading-[1.4] opacity-70">
                            {body}
                        </p>
                        <div className="not-prose flex gap-2">
                            {/* <Button className="w-fit" asChild>
                            <Link href="#">Get Started</Link>
                        </Button> */}
                            {link !== undefined && (
                                // <Button
                                //     className="w-fit"
                                //     variant="link"
                                //     asChild
                                // >
                                <Link href={link} className="underline">
                                    Explore {'->'}
                                </Link>
                                // </Button>
                            )}
                        </div>
                    </div>
                    <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
                        <Image
                            src={img}
                            width={0}
                            height={0}
                            alt="placeholder"
                            sizes="100vw"
                            layout="fill"
                            className="fill object-cover"
                        />
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default FeatureRight
