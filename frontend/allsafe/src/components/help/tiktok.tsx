import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
export default function TikTokReportingGuide() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">TikTok Reporting Guide</h1>

            <p className="mb-4 italic">
                https://support.tiktok.com/en/safety-hc/report-a-problem
            </p>

            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Report a comment</AccordionTrigger>
                    <AccordionContent>
                        <h2 className="text-xl font-semibold mb-2">
                            Report a comment
                        </h2>
                        <p className="mb-2">
                            To report a comment on a video or on LIVE:
                        </p>
                        <ol className="list-decimal list-inside mb-2">
                            <li>
                                In the TikTok app, press and hold on the comment
                                that you want to report.
                            </li>
                            <li>
                                Select Report and follow the instructions
                                provided.
                            </li>
                        </ol>
                        <p className="mb-2">
                            To report comments in bulk on your own videos:
                        </p>
                        <ol className="list-decimal list-inside">
                            <li>
                                In the TikTok app, go to your video comments.
                                From here:
                                <ul className="list-disc list-inside ml-4">
                                    <li>
                                        Press and hold on a comment, then tap
                                        Manage multiple comments.
                                    </li>
                                    <li>Tap the Filters button.</li>
                                </ul>
                            </li>
                            <li>
                                Select the comments you&apos;d like to report.
                                You can select up to 100 comments.
                            </li>
                            <li>Tap More.</li>
                            <li>Tap Report comments.</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Report a direct message</AccordionTrigger>
                    <AccordionContent>
                        <p className="mb-2">To report a direct message:</p>
                        <ol className="list-decimal list-inside">
                            <li>In the TikTok app, tap Inbox at the bottom.</li>
                            <li>
                                Tap a name to go to the chat that you&apos;d
                                like to report.
                            </li>
                            <li>Tap the More options … button at the top.</li>
                            <li>
                                Select Report and follow the instructions
                                provided.
                            </li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Report an impersonation account
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="mb-2">In the TikTok app:</p>
                        <ol className="list-decimal list-inside mb-4">
                            <li>
                                Go to the profile and tap the Share button at
                                the top.
                            </li>
                            <li>Tap Report and select Report account.</li>
                            <li>Select Pretending to Be Someone.</li>
                            <li>
                                Specify if the account is impersonating you or
                                someone else by tapping Me or Celebrity. For
                                celebrity, search for the account of the person
                                being impersonated.
                            </li>
                            <li>Tap Submit.</li>
                        </ol>
                        <p className="mb-2">For TikTok on your web browser:</p>
                        <ol className="list-decimal list-inside">
                            <li>
                                Go to the profile and hover over the More
                                options button at the top.
                            </li>
                            <li>Click Report and select Report account.</li>
                            <li>Select Pretending to Be Someone.</li>
                            <li>
                                Identify whether the account is impersonating
                                you or someone else by tapping Me or Celebrity.
                                For celebrity, search for the account of the
                                person being impersonated.
                            </li>
                            <li>Click Submit.</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger> Report an account</AccordionTrigger>
                    <AccordionContent>
                        <p className="mb-2">To report an account:</p>
                        <p className="font-semibold mb-2">In the TikTok app:</p>
                        <ol className="list-decimal list-inside mb-4">
                            <li>
                                In the TikTok app, go to the person&apos;s
                                profile.
                            </li>
                            <li>Tap the Share button at the top.</li>
                            <li>Tap Report.</li>
                            <li>Tap Report account.</li>
                            <li>
                                Select a reason for the report and tap Submit.
                            </li>
                        </ol>
                        <p className="font-semibold mb-2">
                            For TikTok on your web browser:
                        </p>
                        <ol className="list-decimal list-inside">
                            <li>On TikTok, go to the person&apos;s profile.</li>
                            <li>Tap the More options button at the top.</li>
                            <li>Tap Report.</li>
                            <li>Tap Report account.</li>
                            <li>
                                Select a reason for the report and tap Submit.
                            </li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
