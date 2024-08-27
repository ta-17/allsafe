import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const Biography = ({
    heading = 'Heading',
    subheading = 'Subheading',
    description = 'Biography',
}) => (
    <Card className="w-[350px] h-[500px]">
        <CardHeader>
            <Image
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                alt="heading"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
                className="w-full"
            />
            <CardTitle>{heading}</CardTitle>
            <CardDescription>{subheading}</CardDescription>
        </CardHeader>
    </Card>
)

export default Biography
