'use client'

import Footer from '@/components/footer/footer-four'
import Header from '@/components/hero/header-two'
import NavBar from '@/components/NavBar'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { TypographyBlockquote } from '@/typography/blockqoute'

export default function DataSource() {
    return (
        <div>
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
                                <TypographyBlockquote className="">
                                    The SMS Spam Collection is a set of SMS
                                    tagged messages that have been collected for
                                    SMS Spam research. It contains one set of
                                    SMS messages in English of 5,574 messages,
                                    tagged acording being ham (legitimate) or
                                    spam.
                                </TypographyBlockquote>
                                <br />
                                This is a reliable dataset, it is sourced from
                                kaggle which provide public datasets for data
                                science and machine learning engineers. This
                                dataset is used to power our ai model and our
                                quizzes.{' '}
                                <a
                                    href="https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset/data"
                                    className="underline"
                                >
                                    Found here.
                                </a>
                                <br />
                                <br />
                                <p>The original work is provided by:</p>
                                <p>
                                    Almeida, T.A., GÃ³mez Hidalgo, J.M.,
                                    Yamakami, A. Contributions to the Study of
                                    SMS Spam Filtering: New Collection and
                                    Results. Proceedings of the 2011 ACM
                                    Symposium on Document Engineering
                                    (DOCENG&apos;11), Mountain View, CA, USA,
                                    2011.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Data Insights (Historical Data)
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    ScamWatch is a government website which is
                                    ran by the National Anti-Scam Centre. They
                                    aim to helps people spot and avoid scams.
                                    Make it easier for people to report scams
                                    improves. Share information to disrupt
                                    scammers, and work with government, industry
                                    and supports law enforcement.
                                </p>
                                <br />
                                <p>
                                    This is a reliable dataset, provided by the
                                    government. It is updated frequently on a
                                    monthly basis. It can be{' '}
                                    <a
                                        href="https://www.scamwatch.gov.au/research-and-resources/scam-statistics"
                                        className="underline"
                                    >
                                        found here.
                                    </a>
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Social Media Scams
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    {' '}
                                    I should see a brief description for each
                                    source, explaining its reliability,
                                    relevance, and the role it plays in the
                                    platform.
                                </p>
                                <TypographyBlockquote className="">
                                    Collects and annotates Instagram comments in
                                    bulk for detecting spam and scam comments on
                                    Instagram.
                                </TypographyBlockquote>
                                <br />
                                <p>
                                    The is a reliable source. It is produced by
                                    a individual person who works in IT. The
                                    dataset seems to be from resources gathered
                                    for a research paper. The frequency of
                                    updates is unknown, with the last activity
                                    on Github being a year ago.
                                </p>
                                <p>
                                    The data used to detect whether social media
                                    dm&apos;s, and can be{' '}
                                    <a
                                        className="underline"
                                        href="https://github.com/ScamSpot/scamspot_ig-comment-scraper/blob/main/data/comments-rated-plus-reported.csv"
                                    >
                                        found here.
                                    </a>
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </main>
            <Footer />
        </div>
    )
}
