'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import investment from '@/components/assets/scam-photo/investment.webp'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { TypographyLead } from '@/typography/lead'
import ReturnButton from '@/components/button/ReturnButton'

const cardData = [
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip 1:',
        body: 'Before making any type of investment, ensure that you understand what you are investing in. Do not forget to pay more attention when searching online; there may be websites with misinformation that lead you to believe them.',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip: 2',
        body: 'Low risk with high returns investment usually can be a scam.',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip: 3',
        body: 'Confirm whether they have Australian Financial Services Licence (AFSL) or Australian Business Number (ABN). If they do not have AFSL/ ABN or claim they do not provide it, a high percentage can be a scam.',
    },
]

export default function Investment() {
    return (
        <div className="flex flex-col gap-y-16">
            <div className="absolute top-18 left-4">
                <ReturnButton href="/scams" /> {/* Pass the link as a prop */}
            </div>
            <ScamDetail
                imageSrc={investment}
                altText="Always use image alt"
                heading="Investment"
                subheading="Subheading"
                paragraphs={[
                    'Scammers usually build up trust with you by chatting unrelated to investment from the beginning. They often offer the opportunity with high returns within a short period. Commonly, they have many “successful” cases to share with you to convince people they are not scamming. It usually starts with a positive outcome from the beginning and turns out negative after you increase the amount of your investment.',
                ]}
                cardData={cardData}
            />
            <div className="flex flex-col gap-y-4">
                <TypographyLead className="">Case Study:</TypographyLead>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Investment scam – Lily lost $50,000
                        </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        Lily was called by an online trader who specialised in
                        binary options and cryptocurrency. He said his company
                        used the latest technology and offered guaranteed
                        returns. Lily invested a few thousand dollars on the
                        company&apos;s online platform. She could see good
                        profits and continued to invest at their insistence.
                        When she wanted to withdraw some money she was told she
                        would need to pay taxes on the profits. When she
                        continued asking for her money, her trades started to
                        fail and her profits fall. She faced continuous pressure
                        to keep investing otherwise she would lose everything.
                        Eventually Lily got back 3% of her initial investment
                        but had realised it was a scam.
                        <br />
                        <strong>Warning signs</strong>
                        <br />
                        <li>
                            VShe was phoned out of the blue by a stranger
                            offering unsolicited advice on investments;
                        </li>
                        <li>She was offered ‘guaranteed returns’; and</li>
                        <li>
                            She was pressured to invest more to ensure she
                            didn&apos;t lose all her money.
                        </li>
                        <strong>Precautionary steps</strong>
                        <br />
                        <li>
                            She could have hung up on the caller and taken some
                            time to think about it;
                        </li>
                        <li>
                            researched and sought trusted or independent
                            financial or legal advice; and
                        </li>
                        <li>
                            checked on the ASIC website to ensure the business
                            was a registered financial advisor.
                        </li>
                    </CardContent>
                    <CardFooter>
                        <a
                            href="https://ndh.org.au/complex-situations/scams/scams-case-studies-2/"
                            className="underline"
                        >
                            Read more.
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
