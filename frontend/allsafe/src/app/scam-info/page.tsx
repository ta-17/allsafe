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
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                        borderRadius: 8,
                        border: '1px #E2E8F0 dotted',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex',
                    }}
                >
                    <div
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 3,
                            display: 'flex',
                        }}
                    >
                        <div
                            style={{
                                alignSelf: 'stretch',
                                textAlign: 'center',
                                color: 'black',
                                fontSize: 50,
                                fontFamily: 'Inter',
                                fontWeight: '700',
                                lineHeight: 10,
                                wordWrap: 'break-word',
                            }}
                        >
                            Check out all the current scams
                        </div>
                        <div
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 16,
                                display: 'flex',
                            }}
                        >
                            <div
                                style={{
                                    textAlign: 'center',
                                    color: '#64748B',
                                    fontSize: 25,
                                    fontFamily: 'Inter',
                                    fontWeight: '400',
                                    lineHeight: 5,
                                    wordWrap: 'break-word',
                                }}
                            >
                                Let check your knowledge
                            </div>
                            <div
                                style={{
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    paddingTop: 0,
                                    paddingBottom: 8,
                                    background: '#0F172A',
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 10,
                                    display: 'inline-flex',
                                }}
                            >
                                <div
                                    style={{
                                        color: '#F8FAFC',
                                        fontSize: 14,
                                        fontFamily: 'Inter',
                                        fontWeight: '500',
                                        lineHeight: 1,
                                        wordWrap: 'break-word',
                                    }}
                                >
                                    Quiz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        width: '100%',
                        gap: '20px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            flex: '1 1 30%',
                            maxWidth: '30%',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                        }}
                    >
                        <ScamMenu
                            imageSrc="https://via.placeholder.com/100"
                            altText="Placeholder Image"
                            heading="Buying or Selling"
                            description="This happens when having transactions, either you are a buyer or a seller, via social media to a website, marketplace, or just pretending to be a business with a fake invoice."
                            link="/buying-or-selling"
                        />
                    </div>

                    <div
                        style={{
                            flex: '1 1 30%',
                            maxWidth: '30%',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                        }}
                    >
                        <ScamMenu
                            imageSrc="https://via.placeholder.com/100"
                            altText="Placeholder Image"
                            heading="Gain Personal Information"
                            description="Scammers will attempt to get your personal details and bank account or try to hack or phishing you. Your personal information may be used in various situations, which may ultimately lead to your money loss."
                            link="/gain-personal-information"
                        />
                    </div>

                    <div
                        style={{
                            flex: '1 1 30%',
                            maxWidth: '30%',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                        }}
                    >
                        <ScamMenu
                            imageSrc="https://via.placeholder.com/100"
                            altText="Placeholder Image"
                            heading="Investment"
                            description="Scammers usually build up trust with you by chatting unrelated to investment from the beginning. They often offer the opportunity with high returns within a short period."
                            link="/investment"
                        />
                    </div>

                    <div
                        style={{
                            flex: '1 1 30%',
                            maxWidth: '30%',
                            boxSizing: 'border-box',
                            minHeight: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ScamMenu
                            imageSrc="https://via.placeholder.com/100"
                            altText="Placeholder Image"
                            heading="Jobs and Employment Opportunities"
                            description="It can be related to gaining personal information or money. Scammers offer jobs with high salaries with low effort or unrealistic hourly rates; it sometimes also requires you to pay first to earn the money."
                            link="/job-and-employment-opportunities"
                        />
                    </div>

                    <div
                        style={{
                            flex: '1 1 30%',
                            maxWidth: '30%',
                            boxSizing: 'border-box',
                            minHeight: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ScamMenu
                            imageSrc="https://via.placeholder.com/100"
                            altText="Placeholder Image"
                            heading="Dating and Romance"
                            description="Scammers usually build up trust with you through dating, romance or friend relationships. After building up the trust, they will use the emotional connection with you to trick you for money."
                            link="/dating-and-romance"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
