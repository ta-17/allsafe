// React and Next.js imports
import Link from 'next/link'
import Image from 'next/image'

// UI component imports
import { Section, Container } from '@/components/craft'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/typography/h3'
import { cn } from '@/lib/utils'

// Asset imports
// import Placeholder from "@/public/placeholder.jpg";

const FeatureRight = ({
    title,
    body,
    className,
    img,
}: {
    title: string
    body: string
    className?: string
    img?: string
}) => {
    return (
        <Section>
            <Container
                className={cn(
                    'grid items-stretch md:grid-cols-2 md:gap-12',
                    className
                )}
            >
                <div className="flex flex-col gap-6 py-8">
                    <TypographyH3 className="!my-0">{title}</TypographyH3>
                    <p className="font-light leading-[1.4] opacity-70">
                        {body}
                    </p>
                    {/* <div className="not-prose flex items-center gap-2">
                        <Button className="w-fit" asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                        <Button className="w-fit" variant="link" asChild>
                            <Link href="#">Learn More {'->'}</Link>
                        </Button>
                    </div> */}
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
    )
}

export default FeatureRight
