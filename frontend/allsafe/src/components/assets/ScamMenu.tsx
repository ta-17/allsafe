import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypographyH3 } from '@/typography/h3'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

interface ScamMenuProps {
    imageSrc: string
    altText: string
    heading: string
    description: string
    link: string // Prop to specify the URL to navigate to
}

const ScamMenu: React.FC<ScamMenuProps> = ({
    imageSrc,
    altText,
    heading,
    description,
    link,
}) => {
    return (
        <Link href={link}>
            <Card className="w-[350px] h-[500px]">
                <CardHeader>
                    <Image
                        src={imageSrc}
                        alt={altText}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                        className="w-full"
                    />
                    <CardTitle>{heading}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}

export default ScamMenu
