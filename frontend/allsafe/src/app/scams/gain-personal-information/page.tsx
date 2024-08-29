'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import personalInfo from '@/components/assets/scam-photo/personal-info.webp'

const cardData = [
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip 1:',
        body: 'Keep your social media account at a high privacy standard, following platform recommendations for leveraging account privacy.',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip: 2',
        body: 'Do not provide your personal information through chats on social media without verifying the other status. The platform usually will not ask you to provide personal information through the chat.',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip: 3',
        body: 'Do not click on unofficial warning signs, pop-up boxes, or links provided by others. This may be one of the ways that lead you to other pages to gain your personal information.',
    },
]

export default function PersonalInfo() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />
                <ScamDetail
                    imageSrc={personalInfo}
                    altText="Always use image alt"
                    heading="Gain Personal Information"
                    subheading="Identity Theft | Hacking | Phishing "
                    paragraphs={[
                        ' Scammers will attempt to gain personal information, mainly focusing on hacking and phishing young adults. Either accidentally providing personal information through social media or being hacked by scammers, it may lead to personal detail leakage with money lost in the end. ',
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
