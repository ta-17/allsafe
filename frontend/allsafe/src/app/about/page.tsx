'use client'

import Image from 'next/image'
import NavBar from '../../components/NavBar'
import Biography from '../../components/assets/Biography'
import Header from '@/components/hero/header-two'
import Footer from '@/components/footer/footer-four'

export default function AboutUs() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NavBar />
            <Header
                title="Our Team"
                subtitle="We are a group of student from Monash University."
            />
            <Biography
                heading="Roy"
                subheading="Data Science"
                description="Hello world."
            />
            <Biography
                heading="Lyn"
                subheading="Data Science"
                description="Hello world."
            />
            <Biography
                heading="Paris"
                subheading="AI"
                description="Hello world."
            />
            <Biography
                heading="Ibrahim"
                subheading="Computer Science"
                description="Hello world."
            />
            <Biography
                heading="Jo"
                subheading="My Custom Subheading"
                description="Business Information System."
            />
            <Footer />
        </main>
    )
}
