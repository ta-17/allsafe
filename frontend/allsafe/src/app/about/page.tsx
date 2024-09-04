'use client'

import Image from 'next/image'
import NavBar from '../../components/navbar/NavBar'
import Header from '@/components/hero/header-two'
import Footer from '@/components/footer/footer-four'
import royImage from '@/components/assets/memoji/roy-memoji.png'
import parisImage from '@/components/assets/memoji/paris-memoji.png'
import joImage from '@/components/assets/memoji/jo-memoji.jpg'
import lynImage from '@/components/assets/memoji/lyn-memoji.png'
import ibrahimImage from '@/components/assets/memoji/ibrahim-memoji.jpg'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

const us = [
    {
        image: royImage,
        heading: 'Master of Data Science',
        subheading: 'SQL, DBMS',
        description: 'Hello world.',
    },
    {
        image: lynImage,
        heading: 'Master of Data Science',
        subheading: 'SQL, DBMS',
        description: 'Hello world.',
    },
    {
        image: parisImage,
        heading: 'Master of AI',
        subheading: 'ML, AI, API',
        description: 'Hello world.',
    },
    {
        image: ibrahimImage,
        heading: 'Master of IT',
        subheading: 'API, React',
        description: 'Hello world.',
    },
    {
        image: joImage,
        heading: 'Master of Business Information System',
        subheading: 'React',
        description: 'Hello world.',
    },
]

export default function AboutUs() {
    return (
        <>
            <Header
                title="Our Team"
                subtitle="We are a group of students from Monash University, aiming to create a platform were young adults can protect themselves from the dangers of online scams."
            />
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-5/6 mx-auto">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {us.map((individual, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-5/12"
                            >
                                <div className="p-1">
                                    <Card>
                                        <CardHeader>
                                            <Image
                                                src={
                                                    individual.image ||
                                                    '/images/placeholder.png'
                                                } // Fallback to placeholder if image is not provided
                                                alt={individual.heading}
                                                width={500} // Specify the width of the image
                                                height={500} // Specify the height of the image
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                            />
                                            <CardTitle className="text-lg">
                                                {individual.heading}
                                            </CardTitle>
                                            <CardDescription>
                                                {individual.subheading}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}
