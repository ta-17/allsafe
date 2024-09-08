'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import buySell from '@/components/assets/scam-photo/buy-sell.webp'
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
        body: 'Be cautious when the price is too low or too high on the marketplace. It frequently happens when the seller mentions they are currently overseas; ensure you can check the product in person.',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip: 2',
        body: 'Do not take action right away. When you receive the information related to the transfer, check whether the information is really from the business or not through their official website. Also, ensure that the invoice is correctly billed.',
    },
]

export default function BuyingOrSelling() {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="self-start">
                <ReturnButton /> {/* Pass the link as a prop */}
            </div>
            <div className="flex flex-col gap-y-16">
                <ScamDetail
                    imageSrc={buySell}
                    altText="Always use image alt"
                    heading="Buying or Selling"
                    subheading="Online Shopping | Classified | False Billing"
                    paragraphs={[
                        ' Different kinds of buying or selling scams can happen through social media. The most popular ways are related to online shopping and classified and false billing tricks. Scammers will pretend there are payment differences, offer an unreasonable price, or pretend the business you made an order before. People fall into the trap because it sounds like the truth without confirming the information again with their previous action or buying/ selling things urgently.',
                    ]}
                    cardData={cardData}
                />
                <div className="flex flex-col gap-y-4">
                    <TypographyLead className="">Case Study:</TypographyLead>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Online shopping scam – Sarah lost $160
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            A clever website advertised cheap BBQs. Payment was
                            required via credit card with a 2.99% fee, or direct
                            transfer with a 5% discount. Then Sarah received an
                            email saying that due to logistic emails, her order
                            was cancelled and the money was being refunded. The
                            money has not been refunded.
                            <br />
                            <strong>Warning signs</strong>
                            <br />
                            <li>
                                Very low prices from a very new website or
                                seller;
                            </li>
                            <li>
                                The website encouraged the buyer to pay via
                                direct bank transfer by offering a discount for
                                this payment method, and charged a higher fee
                                for credit card payment.
                            </li>
                            <strong>Precautionary steps</strong>
                            <br />
                            <li>
                                Precautionary steps Do some research on the
                                seller and check independent reviews from other
                                consumers;
                            </li>
                            <li>
                                and Use a secure payment method such as credit
                                card or PayPal.
                            </li>
                        </CardContent>
                        <CardFooter>
                            <a
                                href="https://ndh.org.au/complex-situations/scams/scams-case-studies-2/"
                                className="underline"
                                target="_blank"
                            >
                                Read more.
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
