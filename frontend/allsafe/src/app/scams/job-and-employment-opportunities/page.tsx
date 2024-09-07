'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamDetail from '@/components/assets/ScamDetail'
import ScamTips from '@/components/assets/ScamTips'
import employment from '@/components/assets/scam-photo/employment.webp'
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
        <div className="flex flex-col gap-y-8">
            <div className="self-start">
                <ReturnButton />
            </div>
            <div className="flex flex-col gap-y-16">
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
                <div className="flex flex-col gap-y-4">
                    <TypographyLead className="">Case Study:</TypographyLead>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Elaborate online job scam steals dozens of
                                identities
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            A Brisbane man used two aliases to arrange an
                            elaborate online job scam through various companies
                            to steal the identities of 52 taxpayers. He lodged
                            62 fraudulent income tax returns and attempted to
                            obtain over $565,000 in refunds. After conducting
                            fake interviews over the phone the fraudster would
                            email applicants to confirm they had been successful
                            in their application for the job. He would also
                            request a scanned copy of their driver&apos;s
                            license, bank account details, tax file number and
                            shirt size. He used this information to fraudulently
                            create myGov accounts. If they already had an
                            account he used the information to take over their
                            account and change the details as required. He would
                            then link the myGov accounts to Australian Taxation
                            Office&apos;s online services where he would lodge
                            false income tax returns in their names. The man was
                            charged with 106 offences and was sentenced to 5
                            years in prison.
                        </CardContent>
                        <CardFooter>
                            <a
                                href="https://www.counterfraud.gov.au/case-studies/elaborate-online-job-scam-steals-dozens-identities"
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
