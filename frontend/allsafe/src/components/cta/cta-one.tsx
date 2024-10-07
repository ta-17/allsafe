// React and Next.js imports
import Link from 'next/link'

// Third-party library imports
import Balancer from 'react-wrap-balancer'

// UI component imports
import { Button } from '@/components/ui/button'

// Custom components
import { Container, Section } from '@/components/craft'
import { TypographyH2 } from '@/typography/h2'
import { TypographyH4 } from '@/typography/h4'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const CTA = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log('Element is in view: ', isInView)
    }, [isInView])

    return (
        <div ref={ref}>
            <Section>
                <Container className="flex flex-col gap-6">
                    <div
                        style={{
                            transform: isInView ? 'none' : 'translateY(200px)',
                            opacity: isInView ? 1 : 0,
                            transition:
                                'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }}
                    >
                        <TypographyH2 className="!my-0 border-hidden">
                            Protect Yourself from Online Scams.
                        </TypographyH2>
                        <TypographyH4 className="text-muted-foreground">
                            <Balancer>
                                Use AllSafe today and equip yourself with the
                                knowledge and tools to navigate the internet
                                confidently.
                            </Balancer>
                        </TypographyH4>
                        <TypographyH2 className="border-0">
                            <p>
                                Think you have spotted a fake account? Checkout
                                out our AI tool that detects if the account is
                                legitimate or not.
                            </p>
                        </TypographyH2>
                        <Button asChild>
                            <Link href="/ai/fake-insta">Check Here</Link>
                        </Button>
                        {/* <div className="not-prose flex items-center gap-2">
                    <Button asChild>
                        <Link href="#">Get Started</Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link href="#">Learn More {'->'}</Link>
                    </Button>
                </div> */}
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default CTA
