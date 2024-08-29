'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import dating from '@/components/assets/scam-photo/dating.webp'

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
    )
}
