import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
export default function FacebookReportingGuide() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Facebook Reporting Guide
            </h1>

            <p className="mb-4 italic">
                https://www.facebook.com/help/263149623790594
            </p>
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Report profile</AccordionTrigger>
                    <AccordionContent>
                        <ol className="list-decimal list-inside">
                            <li>Log in to Facebook.</li>
                            <li>
                                Go to the profile that you want to report by
                                clicking its name in your Feed or searching for
                                it.
                            </li>
                            <li>Click to the right.</li>
                            <li>Click Find support or report.</li>
                            <li>
                                To give feedback, click the option that best
                                describes how this profile goes against our
                                Community Standards.
                            </li>
                            <li>Click Done.</li>
                        </ol>
                        <p className="mt-2 text-sm italic">
                            Note: Depending on your feedback, you may then be
                            able to submit a report to Meta. For some types of
                            content, we don&apos;t ask you to submit a report,
                            but we use your feedback to help our systems learn.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Report a Page</AccordionTrigger>
                    <AccordionContent>
                        <ol className="list-decimal list-inside">
                            <li>
                                Go to the Page you want to report by clicking
                                its name in your Feed or searching for it.
                            </li>
                            <li>Click below the Page&apos;s cover photo.</li>
                            <li>Select Find support or report.</li>
                            <li>
                                To give feedback, click the option that best
                                describes how this Page goes against our
                                Community Standards.
                            </li>
                        </ol>
                        <p className="mt-2">
                            Depending on your feedback, you may then be able to
                            submit a report to Meta. For some types of content,
                            we don&apos;t ask you to submit a report, but we use
                            your feedback to help our systems learn.
                        </p>
                        <p className="mt-2">
                            If you can&apos;t access the Page that you want to
                            report, consider asking a friend to report it.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Report a post on your timeline
                    </AccordionTrigger>
                    <AccordionContent>
                        <ol className="list-decimal list-inside">
                            <li>
                                Click your profile picture in the top right of
                                Facebook.
                            </li>
                            <li>Go to the post and click in the top right.</li>
                            <li>
                                Click Report post and then click the option that
                                best describes how this post goes against our
                                Community Standards.
                            </li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Report a post</AccordionTrigger>
                    <AccordionContent>
                        <ol className="list-decimal list-inside">
                            <li>Go to the post that you want to report.</li>
                            <li>Click in the top right of the post.</li>
                            <li>Click Report post.</li>
                            <li>
                                To report, select the option that best describes
                                how this post goes against our Community
                                Standards. On the summary screen, click Submit.
                            </li>
                            <li>
                                Reports help us keep our platforms safe and help
                                our systems learn when something isn&apos;t
                                right. We remove things if they go against our
                                Community Standards, but you can also unfollow,
                                block or unfriend to avoid seeing similar things
                                in future. Click Done.
                            </li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Report a seller</AccordionTrigger>
                    <AccordionContent>
                        <ol className="list-decimal list-inside">
                            <li>Log in to Facebook.</li>
                            <li>
                                In the left menu on your News Feed, click
                                Marketplace.
                            </li>
                            <li>
                                Click a listing from the seller that you want to
                                report, then click the seller&apos;s name below
                                Seller information.
                            </li>
                            <li>Click , then click Report.</li>
                            <li>Follow the on-screen instructions.</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <section className="py-6">
                <h4 className="font-semibold mb-2">
                    How do I report something on Facebook if I don&apos;t have
                    an account or can&apos;t see it?
                </h4>
                <p>
                    If you want to report something that goes against our
                    Community Standards, but you don&apos;t have an account or
                    can&apos;t see the content (e.g. someone blocked you), you
                    may need to ask a friend to help you.
                </p>
                <p className="mt-2">
                    Ask a friend with an account to report the content using the
                    Find support or report link near the post, photo or comment
                    on Facebook. Bear in mind that we won&apos;t be able to take
                    action on your report until we can find the content that
                    you&apos;re reporting. In your report, please provide us
                    with as much detail as possible, including links and
                    screenshots of the content you&apos;re reporting.
                </p>
            </section>
        </div>
    )
}
