// Third-party library imports
import Balancer from 'react-wrap-balancer'

// Local component imports
import { Container, Section } from '@/components/craft'
import { Button } from '../ui/button'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <Section>
            <Container className="flex flex-col text-center">
                <TypographyH1 className="!mb-0">{title}</TypographyH1>
                <TypographyLead className="text-muted-foreground">
                    <Balancer>{subtitle}</Balancer>
                </TypographyLead>
                <div className="mx-auto !mt-8 flex items-center gap-2"></div>
            </Container>
        </Section>
    )
}

export default Header
