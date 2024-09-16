'use client'

import { useEffect } from 'react'
import * as d3 from 'd3'

import parseData from 'barChart'
import createLineChart from 'lineChart'
import createSunbrustChart from 'sunbrustChart'
import createBarChart from 'barChart'
import '../style.css' // Assuming your CSS is in the src/styles folder
import Script from 'next/script'

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
        <>
            {/* <Script
                src="https://d3js.org/d3.v7.min.js"
                strategy="beforeInteractive"
            /> */}
            {/* <div className="bg-gray-50 text-gray-800">
                <section id="scam-trend-section">
                    <h1>
                        Do you know how fast the scam growth in the past few
                        years?
                    </h1>
                    <div id="line-chart-container">
                        <div id="scam-line-chart" className="chart"></div>
                    </div>
                    <p>
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
                        we don't have related knowledge to take proper action
                        <br />
                        <br />
                        User Guide: Scroll to the left to discover the trend of
                        social media scams that have occurred with young adults
                        since 2020; hover over the graph to find the number of
                        scams in each month and throughout the whole period.
                    </p>
                </section>

                <section id="word-cloud-section">
                    <h1>Have you ever received this kind of message?</h1>
                    <div id="word-cloud">
                        <img src="/wordcloud.png" alt="Word Cloud Image" />
                    </div>
                    <p>
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
                </section>

                <section id="slogan-section" className="slogan">
                    <h2>Click Inside Each Section To Discover More!!!</h2>
                </section>

                <section id="year-filter-section">
                    <select id="year-dropdown" className="dropdown">
                        <option value="all">All Years</option>
                        <option value="2024">2024</option>
                    </select>
                </section>

                <section id="scam-category-section">
                    <h2>
                        Do you know what are the top 5 scams in number of
                        reports?
                    </h2>
                    <div id="scam-sunbrust-chart" className="chart"></div>
                    <p>
                        The sunburst chart shows the top 5 scams by the number
                        of reports, with each section showing their percentage
                        and sub-types.
                        <br />
                        <br />
                        "Buying or Selling" scams are the most common, making up
                        over 44% of the total and over 427 reports within 2024.
                        "Online Shopping Scams" being the largest sub-type at
                        around 41% and having 1369 reports over the years.
                        <br />
                        <br />
                        Meanwhile, The smallest section, "Mobile Premium Service
                        Scams," only contributes about 1% which also among the
                        "Buying or Selling". "Personal Information" scams are
                        the second-largest, with 1643 reports all over the year.
                        "Investment Scams" in the same time treated as the main
                        sub-type.
                        <br />
                        <br />
                        This highlights how common online shopping scams and
                        personal data fraud are becoming.
                    </p>
                </section>

                <section id="scam-reports-money-section">
                    <h2>
                        Does the money lost follow a similar pattern as the
                        number of reports?
                    </h2>
                    <div id="money-bar-chart" className="chart"></div>
                    <p>
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
                        User Guide: Click on the bars to explore more detailed
                        information about money lost among the 5 scam types.
                    </p>
                </section>

                <div id="tooltip"></div>
            </div> */}
            <div className="bg-gray-50 text-gray-800">
                <section id="scam-trend-section">
                    <h1>
                        Do you know how fast the scam growth in the past few
                        years?
                    </h1>
                    <div id="line-chart-container">
                        <div id="scam-line-chart" className="chart"></div>
                    </div>
                    <p>
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
                        we don't have related knowledge to take proper action
                        <br />
                        <br />
                        User Guide: Scroll to the left to discover the trend of
                        social media scams that have occurred with young adults
                        since 2020; hover over the graph to find the number of
                        scams in each month and throughout the whole period.
                    </p>
                </section>

                <section id="word-cloud-section">
                    <h1>Have you ever received this kind of message?</h1>
                    <div id="word-cloud">
                        <img src="/wordcloud.png" alt="Word Cloud Image" />
                    </div>
                    <p>
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
                </section>

                <section id="slogan-section" className="slogan">
                    <h2>Click Inside Each Section To Discover More!!!</h2>
                </section>

                <section id="year-filter-section">
                    <select id="year-dropdown" className="dropdown">
                        <option value="all">All Years</option>
                        <option value="2024">2024</option>
                    </select>
                </section>

                <section id="scam-category-section">
                    <h2>
                        Do you know what are the top 5 scams in number of
                        reports?
                    </h2>
                    <div id="scam-sunbrust-chart" className="chart"></div>
                    <p>
                        The sunburst chart shows the top 5 scams by the number
                        of reports, with each section showing their percentage
                        and sub-types.
                        <br />
                        <br />
                        "Buying or Selling" scams are the most common, making up
                        over 44% of the total and over 427 reports within 2024.
                        "Online Shopping Scams" being the largest sub-type at
                        around 41% and having 1369 reports over the years.
                        <br />
                        <br />
                        Meanwhile, The smallest section, "Mobile Premium Service
                        Scams," only contributes about 1% which also among the
                        "Buying or Selling". "Personal Information" scams are
                        the second-largest, with 1643 reports all over the year.
                        "Investment Scams" in the same time treated as the main
                        sub-type.
                        <br />
                        <br />
                        This highlights how common online shopping scams and
                        personal data fraud are becoming.
                    </p>
                </section>

                <section id="scam-reports-money-section">
                    <h2>
                        Does the money lost follow a similar pattern as the
                        number of reports?
                    </h2>
                    <div id="money-bar-chart" className="chart"></div>
                    <p>
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
                        User Guide: Click on the bars to explore more detailed
                        information about money lost among the 5 scam types.
                    </p>
                </section>

                <div id="tooltip"></div>
            </div>
        </>
    )
}

export default Insights
