'use client'

import Image from 'next/image'
import NavBar from '../../components/NavBar'
import Biography from '../../components/assets/Biography'
import Header from '@/components/hero/header-two'
import Footer from '@/components/footer/footer-four'

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
        image: '',
        heading: 'Roy',
        subheading: 'Data Science',
        description: 'Hello world.',
    },
    {
        image: '',
        heading: 'Lyn',
        subheading: 'Data Science',
        description: 'Hello world.',
    },
    {
        image: '',
        heading: 'Paris',
        subheading: 'AI',
        description: 'Hello world.',
    },
    {
        image: '',
        heading: 'Ibrahim',
        subheading: 'Computer Science',
        description: 'Hello world.',
    },
    {
        image: '',
        heading: 'Jo',
        subheading: 'Business Information System',
        description: 'Hello world.',
    },
]

export default function AboutUs() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />
                <Header
                    title="Our Team"
                    subtitle="We are a group of student from Monash University."
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
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="p-1">
                                        <Card>
                                            <CardHeader className="">
                                                <Image
                                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                    alt="heading"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                    }} // optional
                                                />
                                                <CardTitle>
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
            </main>
            <Footer />
        </div>
    )
}
