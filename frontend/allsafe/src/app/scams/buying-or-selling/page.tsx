'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import buySell from '@/components/assets/scam-photo/buy-sell.webp'

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
        <div>
            <main className="flex min-h-screen gap-y-16 flex-col items-center justify-between p-24">
                <NavBar />
                <ScamDetail
                    imageSrc={buySell}
                    altText="Always use image alt"
                    heading="Buying or Selling"
                    subheading="Online Shopping | Classified | False Billing"
                    paragraphs={[
                        ' Different kinds of buying or selling scams can happen through social media. The most popular ways are related to online shopping and classified and false billing tricks. Scammers will pretend there are payment differences, offer an unreasonable price, or pretend the business you made an order before. People fall into the trap because it sounds like the truth without confirming the information again with their previous action or buying/ selling things urgently.',
                    ]}
                />
                <div>
                    <ScamTips cards={cardData} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
