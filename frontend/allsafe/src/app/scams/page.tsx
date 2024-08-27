'use client'

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamMenu from '@/components/assets/ScamMenu'
import Link from 'next/link'

export default function ScamInfo() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4">
                    <div
                        style={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <ScamMenu
                            imageSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            altText="Placeholder Image"
                            heading="Buying or Selling"
                            description="This happens when having transactions, either you are a buyer or a seller, via social media to a website, marketplace, or just pretending to be a business with a fake invoice."
                            link="/scams/buying-or-selling"
                        />
                    </div>

                    <div
                        style={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <ScamMenu
                            imageSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            altText="Placeholder Image"
                            heading="Gain Personal Information"
                            description="Scammers will attempt to get your personal details and bank account or try to hack or phishing you. Your personal information may be used in various situations, which may ultimately lead to your money loss."
                            link="/scams/gain-personal-information"
                        />
                    </div>

                    <div
                        style={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <ScamMenu
                            imageSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            altText="Placeholder Image"
                            heading="Investment"
                            description="Scammers usually build up trust with you by chatting unrelated to investment from the beginning. They often offer the opportunity with high returns within a short period."
                            link="/scams/investment"
                        />
                    </div>

                    <div
                        style={{
                            boxSizing: 'border-box',
                            minHeight: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ScamMenu
                            imageSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            altText="Placeholder Image"
                            heading="Jobs and Employment"
                            description="It can be related to gaining personal information or money. Scammers offer jobs with high salaries with low effort or unrealistic hourly rates; it sometimes also requires you to pay first to earn the money."
                            link="/scams/job-and-employment-opportunities"
                        />
                    </div>

                    <div
                        style={{
                            boxSizing: 'border-box',
                            minHeight: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ScamMenu
                            imageSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            altText="Placeholder Image"
                            heading="Dating and Romance"
                            description="Scammers usually build up trust with you through dating, romance or friend relationships. After building up the trust, they will use the emotional connection with you to trick you for money."
                            link="/scams/dating-and-romance"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
