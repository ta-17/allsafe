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
        subheading: 'Backend',
        description: 'Hello world.',
    },
    {
        image: lynImage,
        heading: 'Master of Data Science',
        subheading: 'Backend',
        description: 'Hello world.',
    },
    {
        image: parisImage,
        heading: 'Master of AI',
        subheading: 'Backend',
        description: 'Hello world.',
    },
    {
        image: ibrahimImage,
        heading: 'Master of IT',
        subheading: 'Front/Backend',
        description: 'Hello world.',
    },
    {
        image: joImage,
        heading: 'Master of Busness Information System',
        subheading: 'Frontend',
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
                    subtitle="We are a group of students from Monash University."
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
                                                <CardTitle>
                                                    {individual.heading}
                                                </CardTitle>
                                                <CardDescription>
                                                    {individual.subheading}
                                                </CardDescription>
                                            </CardHeader>
                                            <p>
                                                <strong>Warning signs</strong>
                                                <br />
                                                <ul>
                                                    <li>
                                                        Very low prices from a
                                                        very new website or
                                                        seller;
                                                    </li>
                                                    <li>
                                                        The website encouraged
                                                        the buyer to pay via
                                                        direct bank transfer by
                                                        offering a discount for
                                                        this payment method, and
                                                        charged a higher fee for
                                                        credit card payment.
                                                    </li>
                                                </ul>
                                                <strong>
                                                    Precautionary steps
                                                </strong>
                                                <br />
                                                <li>
                                                    Precautionary steps Do some
                                                    research on the seller and
                                                    check independent reviews
                                                    from other consumers;
                                                </li>
                                                <li>
                                                    and Use a secure payment
                                                    method such as credit card
                                                    or PayPal.
                                                </li>
                                            </p>
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
        </div>
    )
}
