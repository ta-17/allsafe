import FacebookReportingGuide from '@/components/help/facebook'
import Facebook from '@/components/help/facebook'
import InstagramReportingGuide from '@/components/help/instagram'
import Instagram from '@/components/help/instagram'
import TiktokReportingGuide from '@/components/help/tiktok'
import Tiktok from '@/components/help/tiktok'
import Header from '@/components/hero/header-two'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import Image from 'next/image'

export default function ReportScam() {
    return (
        <div className="flex flex-1 flex-col h-full w-5/6 p-6">
            <Header
                title="How to report a scam"
                subtitle="Are you seeing something or experiencing something that you
                    believe is a scam or exhibiting fraudulent behavior? Below are guides on how to report a scam on the three most popular social media platforms."
            ></Header>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Instagram</AccordionTrigger>
                    <AccordionContent>
                        <InstagramReportingGuide />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Facebook</AccordionTrigger>
                    <AccordionContent>
                        <FacebookReportingGuide />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>TikTok</AccordionTrigger>
                    <AccordionContent>
                        <TiktokReportingGuide />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
