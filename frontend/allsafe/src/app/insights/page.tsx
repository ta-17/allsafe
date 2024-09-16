'use client'

import { useEffect } from 'react'
import * as d3 from 'd3'

import parseData from 'barChart'
import createLineChart from 'lineChart'
import createSunbrustChart from 'sunbrustChart'
import createBarChart from 'barChart'
import '../style.css' // Assuming your CSS is in the src/styles folder
import Script from 'next/script'
import { cn } from '@/lib/utils'
import { TypographyH2 } from '@/typography/h2'
import { TypographyLead } from '@/typography/lead'
import { TypographyH1 } from '@/typography/h1'
import Image from 'next/image'

const Insights = () => {
    useEffect(() => {
        // This will run after the component mounts
        const script = document.createElement('script')
        script.src = '/src/script.js'
        script.type = 'module'
        document.body.appendChild(script)

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="flex flex-col w-full p-6 gap-y-12 max-w-full">
            <section
                id="scam-trend-section"
                className="flex flex-col justify-between min-h-screen max-w-full"
            >
                <TypographyH1>
                    Do you know how fast the scam growth in the past few years?
                </TypographyH1>
                <div className="flex flex-col justify-around sm:flex-row w-full">
                    <div
                        id="line-chart-container"
                        className="overflow-y-scroll w-full sm:w-1/2"
                    >
                        <div id="scam-line-chart" className="chart"></div>
                    </div>
                    <p className="text-left sm:w-1/3">
                        From January 2020 to July 2024, there have been 18,714
                        reported social media scams affecting young adults in
                        Australia. Comparing the whole year of 2023 and 2022,
                        reported scams increased about 21%. The scam reported
                        peak is in January 2023, with 621 scams reported in just
                        a month.
                        <br />
                        <br />
                        Although the number of scam reports gradually decreased
                        from then, the monthly reported scams in 2024 are still
                        around 300.
                        <br />
                        <br />
                        If the scam is an unexploded boom without a trend for us
                        to prevent, how will scams influence the digital era if
                        we don&apos;t have related knowledge to take proper
                        action
                        <br />
                        <br />
                        User Guide: Scroll to the left to discover the trend of
                        social media scams that have occurred with young adults
                        since 2020; hover over the graph to find the number of
                        scams in each month and throughout the whole period.
                    </p>
                </div>
            </section>

            <section
                id="word-cloud-section"
                className="flex flex-col flex-wrap w-full min-h-screen justify-around items-center"
            >
                <TypographyH2 className="text-center border-0">
                    Have you ever received this kind of message?
                </TypographyH2>
                <div className="flex flex-wrap justify-center sm:justify-around gap-y-8">
                    <div id="word-cloud">
                        <Image
                            src={'/wordcloud.png'}
                            alt="Word Cloud Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                            className="w-full"
                        />
                    </div>
                    <p className="sm:w-1/3">
                        This word cloud highlights the most common words
                        scammers use to make their messages sound personal,
                        urgent, or convincing. These words are designed to trick
                        you into responding or taking action based on false
                        promises.
                        <br />
                        <br />
                        Have you ever received a message that seemed too good to
                        be true? Did it make you pause and wonder if you might
                        get easy money, or did it leave you feeling unsure?
                        Scammers use these tricks to either get you to pay for
                        something or steal your personal information.
                        <br />
                        <br />
                        Take a look at the word cloud. Can you spot the types of
                        scams that appear most often?
                    </p>
                </div>
            </section>

            <section className="min-h-screen max-w-full">
                <section
                    id="scam-category-section"
                    className="flex flex-col justify-around min-h-screen max-w-full"
                >
                    <div className="flex flex-col w-full justify-center items-center">
                        <TypographyH2 className="border-0">
                            Do you know what are the top 5 scams in number of
                            reports?
                        </TypographyH2>
                        <TypographyLead className="text-center">
                            Click inside each section to discover more.
                        </TypographyLead>
                        <section
                            id="year-filter-section"
                            className="flex items-center justify-between"
                        >
                            <p>Filter by year</p>
                            <select
                                id="year-dropdown"
                                className="dropdown"
                                defaultValue="2024"
                            >
                                <option value="all">All years</option>
                                <option value="2024">2024</option>
                            </select>
                        </section>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full">
                        <div
                            id="scam-sunbrust-chart"
                            className={cn('chart', 'w-1/3')}
                        ></div>
                        <p className="text-left sm:w-2/3">
                            The sunburst chart shows the top 5 scams by the
                            number of reports, with each section showing their
                            percentage and sub-types.
                            <br />
                            <br />
                            <strong>Buying or Selling</strong> scams are the
                            most common, making up over 44% of the total and
                            over 427 reports within 2024.
                            <strong>Online Shopping Scams</strong> being the
                            largest sub-type at around 41% and having 1369
                            reports over the years.
                            <br />
                            <br />
                            Meanwhile, The smallest section,{' '}
                            <strong>Mobile Premium Service Scams,</strong> only
                            contributes about 1% which also among the{' '}
                            <strong>Buying or Selling</strong>.{' '}
                            <strong>Personal Information</strong> scams are the
                            second-largest, with 1643 reports all over the year.{' '}
                            <strong>Investment Scams</strong> in the same time
                            treated as the main sub-type.
                            <br />
                            <br />
                            This highlights how common online shopping scams and
                            personal data fraud are becoming.
                        </p>
                    </div>
                </section>
            </section>

            <section
                id="scam-reports-money-section"
                className="flex flex-col min-h-screen justify-around items-center max-w-full"
            >
                <div className="flex flex-col w-full justify-center items-center">
                    <TypographyH2 className="border-0">
                        Does the money lost follow a similar pattern as the
                        number of reports?
                    </TypographyH2>
                    <TypographyLead className="text-center">
                        {' '}
                        User Guide: Click on the bars to explore more detailed
                        information about money lost among the 5 scam types.
                    </TypographyLead>
                </div>
                <div className="flex flex-col sm:flex-row w-full">
                    <div
                        id="money-bar-chart"
                        className={cn('chart', 'w-1/2 ')}
                    ></div>
                    <p className="text-left sm:w-2/3">
                        While the top 5 most frequent scams align with the top 5
                        scams causing the most financial loss, their patterns
                        have some differences.
                        <br />
                        <br />
                        In 2024, the top 5 scams alone accounted for
                        approximately AUD 3,003,916 in losses, representing
                        about 94.74% of the total amount lost on social media
                        scams with young adults. Among these years, investment
                        scams have the highest financial impact, making up 50.4%
                        of the total losses, followed by dating and romance
                        scams, which account for around 17.4%.
                        <br />
                        <br />
                        The different patterns from the number of reports and
                        money loss indicate that no matter which type of scam
                        you are facing, the potential loss can accumulate into a
                        vast amount and continuously influence our daily lives.
                        <br />
                        <br />
                    </p>
                </div>
            </section>

            <div id="tooltip"></div>
        </div>
    )
}

export default Insights
