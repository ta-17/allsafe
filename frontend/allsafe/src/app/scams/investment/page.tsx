'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import investment from '@/components/assets/scam-photo/investment.webp'

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
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />
                <ScamDetail
                    imageSrc={investment}
                    altText="Always use image alt"
                    heading="Investment"
                    subheading="Subheading"
                    paragraphs={[
                        'Scammers usually build up trust with you by chatting unrelated to investment from the beginning. They often offer the opportunity with high returns within a short period. Commonly, they have many “successful” cases to share with you to convince people they are not scamming. It usually starts with a positive outcome from the beginning and turns out negative after you increase the amount of your investment.',
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
