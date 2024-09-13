export default function HasPersonalInformation() {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                What to Do After a Data Breach
            </h1>

            <p className="mb-4 italic">
                If your personal details (like name, phone, email, address,
                identity documents) have been leaked in a data breach,
                here&apos;s what to do:
            </p>

            <ul className="list-disc list-inside space-y-4">
                <li>
                    <strong>
                        Report the data breach to your financial institutions
                    </strong>
                    <p className="ml-6">
                        Let your bank, super fund and any other financial
                        services know.
                    </p>
                </li>

                <li>
                    <strong>Contact IDCARE</strong>
                    <p className="ml-6">
                        Call 1800 595 160 (Monday to Friday, 8am–5pm). They can
                        help you make a plan (for free) to limit the damage. Or
                        contact them through their website{' '}
                        <a
                            href="https://www.idcare.org/contact-us"
                            className="text-blue-600 hover:underline"
                        >
                            https://www.idcare.org/contact-us
                        </a>
                    </p>
                </li>

                <li>
                    <strong>Create a new, stronger password</strong>
                    <p className="ml-6">
                        Make sure you haven&apos;t used it before. If
                        you&apos;ve used the leaked password anywhere else,
                        update it there too.
                    </p>
                </li>

                <li>
                    <strong>Watch out for suspicious contact</strong>
                    <p className="ml-6">
                        Look for suspicious emails, phone calls, texts or
                        messages through social media. Block or don&apos;t
                        answer anyone you don&apos;t know. Don&apos;t click on
                        any links.
                    </p>
                </li>

                <li>
                    <strong>Monitor your bank account</strong>
                    <p className="ml-6">
                        Keep a close watch on your bank account for any
                        unauthorised transactions.
                    </p>
                </li>

                <li>
                    <strong>Monitor your credit report</strong>
                    <p className="ml-6">
                        Request a temporary ban on your credit report to ensure
                        no unauthorised loans or credit applications can be
                        made.
                    </p>
                </li>
            </ul>
        </div>
    )
}
