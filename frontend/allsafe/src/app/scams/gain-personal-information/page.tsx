'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import personalInfo from '@/components/assets/scam-photo/personal-info.webp'
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
        <div className="flex flex-col gap-y-8">
            <div className="self-start">
                <ReturnButton />
            </div>
            <div className="flex flex-col gap-y-16">
                <ScamDetail
                    imageSrc={personalInfo}
                    altText="Always use image alt"
                    heading="Gain Personal Information"
                    subheading="Identity Theft | Hacking | Phishing "
                    paragraphs={[
                        ' Scammers will attempt to gain personal information, mainly focusing on hacking and phishing young adults. Either accidentally providing personal information through social media or being hacked by scammers, it may lead to personal detail leakage with money lost in the end. ',
                    ]}
                    cardData={cardData}
                />
                <div className="flex flex-col gap-y-4">
                    <TypographyLead className="">Case Study:</TypographyLead>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Identity fraud – Mary lost $6,028
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            Mary received an SMS to say her mobile number was
                            being ported to a different network provider. She
                            contacted her mobile provider to find out why. She
                            immediately realised what was going on and phoned
                            her bank. While on the phone, she tried logging in
                            to her internet banking, but to no avail. As she was
                            talking to the bank, she started receiving e-mails
                            about her personal details being changed and the PIN
                            to the credit card was being changed. She had
                            ordered a credit card a month earlier but had not
                            received it. The bank started blocking my accounts
                            and cards. However, the fraudsters have stolen her
                            identity to create a new mobile account at the
                            different network provider, hacked her internet
                            banking account, and stolen funds.
                            <br />
                            <strong>Warning signs</strong>
                            <br />
                            <li>
                                The SMS advising Mary her number was being
                                ported to another provider; and
                            </li>
                            <li>
                                Mary never receiving her new credit card in the
                                mail.
                            </li>
                            <strong>Precautionary steps</strong>
                            <br />
                            <li>a lock on her mailbox.</li>
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
        </div>
    )
}
