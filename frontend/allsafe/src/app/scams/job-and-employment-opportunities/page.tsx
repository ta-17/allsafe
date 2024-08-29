'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import employment from '@/components/assets/scam-photo/employment.webp'

const cardData = [
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip 1:',
        body: 'The recruiter usually unofficially contacts you and is eager to be in the role. The hiring process is quick without evaluating your experience, skills, and qualifications. ',
    },
    {
        asset: (
            <div
                style={{ width: '32px', height: '32px', background: '#ccc' }}
            />
        ),
        title: 'Tip: 2',
        body: 'Before getting the role, they usually mentioned that you should pay the money to secure the role or pay an agency fee, which is not the hiring process in the real world. ',
    },
]

export default function JobAndEmployment() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />
                <ScamDetail
                    imageSrc={employment}
                    altText="Always use image alt"
                    heading="Jobs and Employment Opportunities"
                    subheading="Subheading"
                    paragraphs={[
                        'This scam type can be related to gaining personal information or money. There are different tricks that scammers can use to get what they want, for instance, mentioning that you need to pay first to be onboard and pretending they are an agency to get your identity details. This type of job opportunity offers high salaries without the skills requirement or effort to put in, which usually do not really exist.',
                    ]}
                    cardData={cardData}
                />
                <div>
                    <ScamTips cards={cardData} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
