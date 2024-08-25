'use client'

import Header from '@/components/hero/header-two'
import NavBar from '@/components/NavBar'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export default function DataSource() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <NavBar />
            <Header
                title="Data Sources"
                subtitle="We aim to provide transparency on where our data comes from."
            />
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Scam Text</AccordionTrigger>
                        <AccordionContent>
                            Our information on legitimate messages and scams are
                            provided by{'  '}
                            <a
                                href="https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset/data"
                                className="underline"
                            >
                                Kaggle.
                            </a>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Data Insights (Historical Data)
                        </AccordionTrigger>
                        <AccordionContent>
                            The data used to created our interactive graphs and
                            charts is provided by{' '}
                            <a
                                href="https://www.scamwatch.gov.au/research-and-resources/scam-statistics"
                                className="underline"
                            >
                                Scam Watch.
                            </a>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Social Media Scams</AccordionTrigger>
                        <AccordionContent>
                            The data used to detect whether social media
                            dm&apos;s is from{' '}
                            <a href="https://github.com/ScamSpot/scamspot_ig-comment-scraper/blob/main/data/comments-rated-plus-reported.csv">
                                Github.
                            </a>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    )
}
