'use client'

import Image from 'next/image'
import NavBar from '../components/NavBar'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { Button } from '@/components/ui/button'
import Feature from '@/components/hero/feature'
import Hero from '@/components/hero/hero-two'
import FeatureLeft from '@/components/features/feature-three'
import FeatureRight from '@/components/features/feature-four'
import Header from '@/components/hero/header-two'
import Footer from '@/components/footer/footer-four'

export default function Quiz() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />
                <Hero />
                <Header
                    title="Scared of being scammed or target online?"
                    subtitle=" Our collection of resources, articles, and scam detector
                        tools can help."
                />
                <FeatureLeft
                    title="News, news, and news"
                    body="Get the latest news and updates about different types of scams. Learning from relevant sources, to familiarize you with different types of scams that are currently going around. We have curated a list of the most relevant news related to scams. Keeping them updated to always be relevant."
                />
                <FeatureRight
                    title="Scam detection model"
                    body="Coming soon is an AI model which can be used to detect scams. This model has been trained on a large dataset of social media scams from different platforms, to ensure that the model is reliable. All you need to do is paste the suspicious message and the model will detect it."
                />
                <FeatureLeft
                    title="Quiz yourself"
                    body="We have provided a series of quizzes about scams. We have created a set of learning resources to help you learn about different types of scams. And to test yourself on how well you can spot and identify them."
                />
            </main>
            <Footer />
        </div>
    )
}
