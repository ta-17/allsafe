import FacebookReportingGuide from '@/components/help/facebook'
import Facebook from '@/components/help/facebook'
import InstagramReportingGuide from '@/components/help/instagram'
import Instagram from '@/components/help/instagram'
import { PlatformTabs } from '@/components/help/tabs'
import TiktokReportingGuide from '@/components/help/tiktok'
import Tiktok from '@/components/help/tiktok'
import Header from '@/components/hero/header-two'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1 } from '@/typography/h1'
import { TypographyH2 } from '@/typography/h2'
import { TypographyH3 } from '@/typography/h3'
import { TypographyLead } from '@/typography/lead'
import Image from 'next/image'
import Link from 'next/link'

export default function ReportScam() {
    return (
        <div className="flex flex-1 flex-col h-full w-5/6 p-6 gap-y-40">
            <div className="flex flex-col justify-center items-center gap-y-20">
                <Header
                    title="How to report a scam"
                    subtitle="Are you seeing something or experiencing something that you
                    believe is a scam or exhibiting fraudulent behavior? Below are guides on how to report a scam on the three most popular social media platforms."
                />
                <PlatformTabs />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-8 pb-6">
                <TypographyH2 className="border-0">
                    Prevent this from happening again by learning about
                    different scams tactics.
                </TypographyH2>
                <Button asChild>
                    <Link href="/scams">Go to scam tactics</Link>
                </Button>
            </div>
        </div>
    )
}
