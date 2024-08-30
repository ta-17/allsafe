'use client'

import Footer from '@/components/footer/footer-four'
import Header from '@/components/hero/header-two'
import NavBar from '@/components/navbar/NavBar'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { TypographyBlockquote } from '@/typography/blockqoute'

export default function DataSource() {
    return (
        <>
            <Header
                title="Data Sources"
                subtitle="We aim to provide transparency on where our data comes from."
            />
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Spot the Scam Quiz</AccordionTrigger>
                        <AccordionContent>
                            <TypographyBlockquote className="mt-0">
                                The SMS Spam Collection is a set of SMS tagged
                                messages that have been collected for SMS Spam
                                research. It contains one set of SMS messages in
                                English of 5,574 messages, tagged acording being
                                ham (legitimate) or spam.
                            </TypographyBlockquote>
                            <br />

                            <p>
                                SMS Spam data is retrieved from{' '}
                                <a
                                    href="https://www.kaggle.com/"
                                    className="underline"
                                >
                                    Kaggle
                                </a>
                                , a platform that provides datasets, notebooks
                                and discussions with global data scientists and
                                machine learners. This dataset is used on the
                                scam-knowledge quiz and training our scam
                                detection model by providing a scam-like
                                percentage of the user input text{' '}
                                <a
                                    href="https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset/data"
                                    className="underline"
                                >
                                    found here
                                </a>
                                .
                            </p>
                            <br />
                            <p>The original work is provided by</p>
                            <p>
                                Almeida, T.A., GÃ³mez Hidalgo, J.M., Yamakami,
                                A. Contributions to the Study of SMS Spam
                                Filtering: New Collection and Results.
                                Proceedings of the 2011 ACM Symposium on
                                Document Engineering (DOCENG&apos;11), Mountain
                                View, CA, USA, 2011.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Data Insights (Historical Data)
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <p>
                                    Scam Statistics data is retrieved from{' '}
                                    <a
                                        href="https://www.scamwatch.gov.au/"
                                        className="underline"
                                    >
                                        Scam Watch
                                    </a>
                                    , the Australian Government&apos;s website,
                                    to investigate historical scams and find
                                    insight to understand how the scams via
                                    social media influence young adults. The
                                    data is also used for interactive
                                    visualisation for discovering more scam
                                    information.
                                </p>
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Social Media Scams</AccordionTrigger>
                        <AccordionContent>
                            <TypographyBlockquote className="mt-0">
                                Collects and annotates Instagram comments in
                                bulk for detecting spam and scam comments on
                                Instagram.
                            </TypographyBlockquote>
                            <br />
                            <p>
                                IG Comment data is retrieved from{' '}
                                <a
                                    href="https://github.com/"
                                    className="underline"
                                >
                                    Github
                                </a>
                                , a developer platform that enables developers
                                to discover, store, manage, and share their
                                code. The collected data is from Instagram
                                comments for decking spam and scam comments; the
                                dataset will be utilised to train our scam
                                detection model to provide a scam-like
                                percentage of the user input text.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}
