'use client'

import Hero from '@/components/hero/hero-two'
import FeatureLeft from '@/components/features/feature-three'
import FeatureRight from '@/components/features/feature-four'
import Header from '@/components/hero/header-two'
import visualizations from '@/components/assets/homepage/visualizations-2.jpeg'
import aimodel from '@/components/assets/homepage/feature2-scams.jpg'
import quiz from '@/components/assets/homepage/feature3-quiz.jpg'
import { useEffect, useRef } from 'react'
import { MotionValue, useScroll, useTransform } from 'framer-motion'
import { ReactLenis, useLenis } from 'lenis/react'
import CTA from '@/components/cta/cta-one'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

export default function Homepage() {
    useEffect(() => {
        // Disable body scrolling
        document.body.style.overflow = 'hidden'

        // Re-enable body scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        // TODO add ref={ref} to all divs
        <ReactLenis root>
            <div className="w-full">
                <div className="snap-start min-h-screen w-full flex items-center justify-center">
                    <Hero />
                </div>
                <div className="snap-start min-h-screen w-full flex flex-col items-center justify-center">
                    <Header
                        title="Think you have spotted a fake account? "
                        subtitle="Checkout out
                            our AI tool that detects if the account is
                            legitimate or not."
                    />
                    <Button asChild>
                        <Link href="/ai/fake-insta">
                            Check Instagram Account
                        </Link>
                    </Button>
                </div>
                <div className="snap-start min-h-screen w-full flex items-center justify-center bg-slate-200">
                    <FeatureLeft
                        title="Explore Scam Trends with Data Insights"
                        body="Dive into our data visualization section, where we present insightful analytics related to scams. This interactive feature offers a visual representation of various scam trends, allowing you to better understand the current landscape. With regularly updated charts and graphs, you can explore the data that informs our community and enhances your awareness of prevalent scams."
                        img={visualizations}
                        link="/resources/news"
                    />
                </div>
                <div className="snap-start min-h-screen w-full flex items-center justify-center ">
                    <FeatureRight
                        title="Immerse Yourself in Realistic Scam Scenarios"
                        body="Think you can spot a scam? Step into the shoes of a savvy user with our text-based game designed to simulate interactions with scammers. Experience the tension and decision-making involved in real-life scenarios as you navigate through conversations. Choose your responses and actions wisely, as each decision shapes the outcome of the encounter. This engaging tool will not only entertain but also educate you on how to effectively handle potential scams."
                        img={quiz}
                        link="/quiz/"
                    />
                </div>
            </div>
        </ReactLenis>
    )
}
