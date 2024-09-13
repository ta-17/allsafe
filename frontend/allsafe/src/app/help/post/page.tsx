import HasDeviceAccess from '@/components/help/postpartum/has-device'
import HasPersonalInformation from '@/components/help/postpartum/has-pi'
import SentMoney from '@/components/help/postpartum/sent-money'
import Header from '@/components/hero/header-two'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export default function PostPartum() {
    return (
        <div className="flex flex-1 flex-col w-5/6">
            <Header
                title="Help me i've been scammed"
                subtitle="It is inevitable that some of you will be scammed. Therefore we have create a guide below to help you with the vulnerable recovery process. It is key to act fast as to reduce further damage."
            />
            <Accordion type="single" collapsible className="w-full pb-6">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        If you&apos;ve paid a scammer ?
                    </AccordionTrigger>
                    <AccordionContent>
                        <SentMoney />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        If a scammer has your personal information ?
                    </AccordionTrigger>
                    <AccordionContent>
                        <HasPersonalInformation />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        If a scammer has accessed your computer or phone
                    </AccordionTrigger>
                    <AccordionContent>
                        <HasDeviceAccess />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
