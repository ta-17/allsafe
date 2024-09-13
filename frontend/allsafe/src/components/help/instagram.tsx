import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
export default function InstagramReportingGuide() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Instagram Reporting Guide
            </h1>

            <p className="mb-4 italic">
                Bear in mind that your report is anonymous, except if you're
                reporting an intellectual property infringement. The account you
                reported won't see who reported them.
            </p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    Report someone through their profile
                </h2>
                <ol className="list-decimal list-inside">
                    <li>
                        Click their username from their Feed or story post, or
                        click and search their username to go to their profile.
                    </li>
                    <li>Click next to their username.</li>
                    <li>
                        Select Report, then select the type of account that you
                        want to report and follow the on-screen instructions.
                    </li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Report a message</h2>
                <ol className="list-decimal list-inside">
                    <li>Open the conversation in the Instagram app.</li>
                    <li>
                        Hover over the individual message you'd like to report.
                    </li>
                    <li>Click next to the message.</li>
                    <li>Click Report.</li>
                    <li>
                        Select a reason for why you're reporting the message,
                        then follow the on-screen instructions.
                    </li>
                    <li>Click Submit report.</li>
                </ol>
                <p className="mt-2">
                    If you'd like to report a post from feed that was sent to
                    you in a message, you can tap the post and report it. If you
                    want to stop someone from sending you messages or message
                    requests, you can block that person or report their profile.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    Report a conversation
                </h2>
                <p className="mb-2">
                    If you have a conversation with one other person, you can
                    report the entire chat you have with them. Note: You cannot
                    report entire group chats, only messages, photos, videos and
                    people in the group chat.
                </p>
                <ol className="list-decimal list-inside">
                    <li>Go to the conversation.</li>
                    <li>Click in the top right.</li>
                    <li>
                        Click Report. Note: You will not see this option in a
                        group chat.
                    </li>
                    <li>
                        Select a reason why you're reporting the message, then
                        follow the on-screen instructions.
                    </li>
                    <li>Click Submit report.</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Report a seller</h2>
                <ol className="list-decimal list-inside">
                    <li>
                        Go to the profile of the seller that you want to report.
                    </li>
                    <li>Tap (iPhone) or (Android) in the top right.</li>
                    <li>Tap Report and follow the on-screen instructions.</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    Report a seller for misleading content or a possible scam
                </h2>
                <ol className="list-decimal list-inside">
                    <li>
                        Go to the profile of the seller that you want to report.
                    </li>
                    <li>Tap (iPhone) or (Android) in the top right.</li>
                    <li>
                        Tap Report (iPhone) or Report…(Android), then tap Report
                        account.
                    </li>
                    <li>
                        Tap It's posting content that shouldn't be on Instagram.
                    </li>
                    <li>
                        Scroll down, then select Misleading or possible scam.
                    </li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Report a product</h2>
                <ol className="list-decimal list-inside">
                    <li>
                        Go to the product page of the product that you want to
                        report.
                    </li>
                    <li>Tap (iPhone) or (Android) in the top right.</li>
                    <li>Tap Report product and select a reason.</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    Report a post containing a tagged product
                </h2>
                <ol className="list-decimal list-inside">
                    <li>Go to the post with a tagged product.</li>
                    <li>Tap (iPhone) or (Android) in the top right.</li>
                    <li>Tap Report and select a reason.</li>
                </ol>
            </section>
        </div>
    )
}
