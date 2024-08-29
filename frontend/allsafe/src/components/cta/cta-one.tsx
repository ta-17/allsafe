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

const CTA = () => {
    return (
        <Section>
            <Container className="flex flex-col gap-6">
                <TypographyH2 className="!my-0 border-hidden">
                    Protect Yourself from Online Scams.
                </TypographyH2>
                <TypographyH4 className="text-muted-foreground">
                    <Balancer>
                        Use AllSafe today and equip yourself with the knowledge
                        and tools to navigate the internet confidently.
                    </Balancer>
                </TypographyH4>
                {/* <div className="not-prose flex items-center gap-2">
                    <Button asChild>
                        <Link href="#">Get Started</Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link href="#">Learn More {'->'}</Link>
                    </Button>
                </div> */}
            </Container>
        </Section>
    )
}

export default CTA
