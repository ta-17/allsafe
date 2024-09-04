'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import dating from '@/components/assets/scam-photo/dating.webp'
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
        body: 'Check the social media profile when meeting them and see if their image aligns with what they mentioned through the chat.',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip: 2',
        body: 'If you are not meeting in person or just meeting each other on social media, and the person is urgent to have you on a free messaging platform, like WhatsApp or WeChat, it may be considered a scam. ',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip 3:',
        body: 'When they are facing urgent situations that need money, provide them alternative ways to lend the money to banks or other organisations; do not provide money support on your own.',
    },
]

export default function DatingAndRomance() {
    return (
        <div className="flex flex-col gap-y-16">
            <div className="absolute top-18 left-4">
                <ReturnButton href="/scams" /> {/* Pass the link as a prop */}
            </div>
            <ScamDetail
                imageSrc={dating}
                altText="Always use image alt"
                heading="Dating and Romance"
                subheading="Subheading"
                paragraphs={[
                    'Scammers usually build up trust with you in dating, romance or friend relationships. They usually set up attractive profiles using pictures of other people or even celebrities. Instead of texting you, they may make phone calls to make you feel inclusive. After building up trust and a relationship with you, it will be mentioned that they are facing an urgent situation and want you to help them by transferring money using your empathy.',
                ]}
                cardData={cardData}
            />
            <div className="flex flex-col gap-y-4">
                <TypographyLead className="">Case Study:</TypographyLead>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Dating and romance scam – Dan lost $20,000
                        </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        Dan was contacted by a person on Facebook who claimed to
                        be a US military officer in Afghanistan. After Dan was
                        persuaded to send iTunes cards, the person told him he
                        would come and see him and marry him. Soon after the
                        officer was delayed for another “special mission”.
                        Excuse after excuse followed as to why the officer could
                        not visit. He also had gold he wanted to send back (for
                        some reason) but it was seized and then the officer was
                        jailed and needed $8000 to get out.
                        <br />
                        <strong>Warning signs</strong>
                        <br />
                        <li>The promise to marry Dan;</li>
                        <li>The scammer claimed he was overseas for work;</li>
                        <li>Dan was told to buy iTunes cards;</li>
                        <li>
                            The scammer always had excuses why he couldn&apos;t
                            visit Dan.
                        </li>
                        <strong>Precautionary steps</strong>
                        <br />
                        <li>
                            Run a reverse-image Google search of their
                            prospective partner&apos;s profile photo; and
                        </li>
                        <li>
                            Refuse to buy gift cards or make up-front payments.
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
