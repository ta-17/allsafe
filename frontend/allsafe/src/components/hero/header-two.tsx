// Third-party library imports
import Balancer from 'react-wrap-balancer'

// Local component imports
import { Container, Section } from '@/components/craft'
import { Button } from '../ui/button'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const Header = ({
    title,
    subtitle,
    className = '',
}: {
    title: string
    subtitle: string
    className?: string
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log('Element is in view: ', isInView)
    }, [isInView])

    return (
        <div ref={ref}>
            <Section className={className}>
                <Container className="flex flex-col text-center">
                    <div
                        style={{
                            transform: isInView ? 'none' : 'translateY(200px)',
                            opacity: isInView ? 1 : 0,
                            transition:
                                'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }}
                    >
                        <TypographyH1 className="!mb-0">{title}</TypographyH1>
                        <TypographyLead className="text-muted-foreground">
                            <Balancer>{subtitle}</Balancer>
                        </TypographyLead>
                        {/* <div className="mx-auto !mt-8 flex items-center gap-2"></div> */}
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default Header
