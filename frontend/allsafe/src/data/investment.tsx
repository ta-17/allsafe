export const investment = {
    q0: {
        id: 0,
        question:
            'You receive a message from a stranger named “EliteInvesting123” on social media:\n\nEliteInvesting123:\nHey there! We’ve been following your profile, and based on what we see, you’re a perfect fit for our exclusive investment platform. Right now, our members are making 200% returns on cryptocurrency investments! No risk, guaranteed profits. Would you be interested in learning more?',
        answers: [
            {
                text: 'Ignore the message.',
                link: 'qEnd1',
                feedback:
                    'You’ve successfully avoided a potential scam. Ignoring messages like this is a safe approach when something feels off.',
            },
            {
                text: 'Ask for more details about the investment.',
                link: 'q1',
                feedback:
                    'It’s always good to gather more information, but be cautious with offers that sound too good to be true.',
            },
        ],
    },
    q1: {
        id: 1,
        question:
            'EliteInvesting123:\nGreat to hear you’re interested! We are currently offering an exclusive deal: invest just $200, and within a few weeks, you’ll see a return of $600 or more. To make things easier for new investors, we guide you every step of the way. All you need to do is make a deposit to get started.',
        answers: [
            {
                text: 'Ask for more information about the company.',
                link: 'q2',
                feedback:
                    'Asking for more information is smart. Always verify companies before making any financial commitments.',
            },
            {
                text: 'Conduct your own research on “EliteInvesting123.”',
                link: 'q7',
                feedback:
                    'Doing your own research is essential when it comes to potential investments. It helps uncover any red flags.',
            },
            {
                text: 'Express interest and ask how to make the deposit.',
                link: 'q3',
                feedback:
                    'Expressing interest without research can put you at risk of falling into a scam. Always verify before proceeding.',
            },
        ],
    },
    q2: {
        id: 2,
        question:
            'EliteInvesting123:\nOur company has been in business for over 5 years, with an incredible track record. Here are some screenshots of our investors’ profits, showing how easy it is to earn. We are completely legit, and we can even send you documents if you want.',
        answers: [
            {
                text: 'Ask for official company documents and verify their legitimacy.',
                link: 'q4',
                feedback:
                    'Asking for documentation is a step in the right direction. Always verify company claims independently.',
            },
            {
                text: 'Ask for proof of successful transactions from real investors.',
                link: 'q5',
                feedback:
                    'Requesting proof from real investors can help you determine if the company is legitimate or if it’s a scam.',
            },
        ],
    },
    q3: {
        id: 3,
        question:
            'EliteInvesting123:\nAwesome! All you need to do is send $200 via our secure platform. You’ll start seeing profits within days. We’ve had so many happy customers.',
        answers: [
            {
                text: 'Send $200.',
                link: 'q6',
                feedback:
                    'Sending money without proper verification puts you at risk. It’s better to be cautious with your investments.',
            },
            {
                text: 'Ask for a refund policy before sending money.',
                link: 'q9',
                feedback:
                    'Asking for a refund policy is wise, especially when dealing with online investments.',
            },
            {
                text: 'Ask if you can start with a smaller amount.',
                link: 'q10',
                feedback:
                    'Requesting to start with a smaller amount shows caution. However, watch out for high-pressure tactics.',
            },
        ],
    },
    q4: {
        id: 4,
        question:
            'You research the registration number using a business verification website. After searching, you find that the number either doesn’t exist or belongs to a completely unrelated business. Additionally, some online reviews or reports suggest the company is associated with scams.',
        answers: [
            {
                text: 'Confront EliteInvesting123 about the fake documents.',
                link: 'qEnd2',
                feedback:
                    'Confronting scammers is one option, but walking away and reporting them might be safer.',
            },
            {
                text: 'Trust them and proceed with the investment.',
                link: 'q6',
                feedback:
                    'Proceeding with an investment after finding red flags is risky. It’s better to walk away at this point.',
            },
        ],
    },
    q5: {
        id: 5,
        question:
            'EliteInvesting123:\nAbsolutely! Here are some testimonials from our satisfied clients, and I can even connect you with one of our top investors if you’d like to hear from them directly.\n\nYou are provided with screenshots showing large sums of money deposited and withdrawn from trading accounts. In addition, you’re given contact information for a supposed “top investor,” who is actually part of the scam.',
        answers: [
            {
                text: 'Contact the “top investor” and ask about their experience.',
                link: 'q6',
                feedback:
                    'Contacting someone recommended by a scammer is risky. They are likely part of the scam.',
            },
            {
                text: 'Ask for more verifiable documentation of these transactions.',
                link: 'q8',
                feedback:
                    'Asking for more proof can help you verify the legitimacy of the company, but be cautious of fake documents.',
            },
            {
                text: 'Ignore the testimonials and conduct your own research.',
                link: 'q7',
                feedback:
                    'Ignoring testimonials and doing your own research is a wise choice, as scammers often provide fake proof.',
            },
        ],
    },
    q6: {
        id: 6,
        question:
            'You’ve made your first investment. A few days pass, and you receive a message from EliteInvesting123:\n\nEliteInvesting123:\nGreat news! Your investment has already grown. You now have $600 in your account! You can either withdraw this amount, or reinvest for even bigger returns! We recommend reinvesting, as our top investors are seeing 300% gains.',
        answers: [
            {
                text: 'Try to withdraw your money.',
                link: 'q11',
                feedback:
                    'Trying to withdraw is smart, but beware of withdrawal fees and stall tactics.',
            },
            {
                text: 'Reinvest the $600 for bigger returns.',
                link: 'q12',
                feedback:
                    'Reinvesting without seeing proof of withdrawal can lead to further losses in scams like this.',
            },
        ],
    },
    q7: {
        id: 7,
        question:
            'You start researching EliteInvesting123 online. After a few minutes, you find several warning signs:\n• The company website has only been live for a few months, despite claims of a 5-year track record.\n• There are numerous reports on forums and websites about people being scammed by this company or others using similar tactics.\n• The company’s social media accounts are filled with bot-like comments, and all their followers seem fake.',
        answers: [
            {
                text: 'Immediately confront EliteInvesting123 and express your suspicion.',
                link: 'qEnd3',
                feedback:
                    'Confronting scammers is one approach, but it’s safer to report and disengage.',
            },
            {
                text: 'Report the account to authorities or social media platforms for fraud.',
                link: 'q7Report',
                feedback:
                    'Reporting the account helps protect others from falling for the same scam.',
            },
            {
                text: 'Walk away without engaging further.',
                link: 'qEnd5',
                feedback:
                    'Walking away is a safe and smart move after identifying the scam.',
            },
        ],
    },

    q7Report: {
        id: 7,
        question:
            "You decide to report EliteInvesting123's account to the platform. \n\nOn which platform do you want to report this account?",
        answers: [
            {
                text: 'Facebook',
                link: 'q7ReportFacebook',
            },
            {
                text: 'Instagram',
                link: 'q7ReportInstagram',
            },
            {
                text: 'TikTok',
                link: 'q7ReportTikTok',
            },
        ],
    },

    q7ReportFacebook: {
        id: 7,
        question:
            "You report EliteInvesting123's account on Facebook.\n\nGo to the profile that you want to report by clicking its name in your Feed or searching for it.\n\nClick **more ...** to the right.\n\nClick **Find support or report**.\n\nTo give feedback, click the option that best describes how this profile goes against our Community Standards.\n\n   **Note:** Depending on your feedback, you may then be able to submit a report to Meta. For some types of content, we don't ask you to submit a report, but we use your feedback to help our systems learn.\n\nClick **Done**.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer.",
        answers: [],
        end: true,
    },

    q7ReportInstagram: {
        id: 7,
        question:
            "You report EliteInvesting123's account on Instagram.\n\nClick their username from their Feed or story post, or click explore and search their username to go to their profile.\n\nClick more actions next to their username.\n\nSelect Report, then select the type of account you want to report and follow the on-screen instructions.\n\nConclusion: By reporting the scam, you can help to make social media and the community safer.",
        answers: [],
        end: true,
    },

    q7ReportTikTok: {
        id: 7,
        question:
            "You report EliteInvesting123's account on TikTok.\n\nIn the TikTok app, go to the person's profile.\n\nTap the **Share** button at the top.\n\nTap **Report**.\n\nTap **Report account**.\n\nSelect a reason for the report and tap **Submit**.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer.",
        answers: [],
        end: true,
    },

    q8: {
        id: 8,
        question:
            'The scammer stalls or provides fake documents that look suspicious (e.g., inconsistent amounts, incorrect bank names). You realize it’s a scam.',
        answers: [
            {
                text: 'Confront them and walk away.',
                link: 'qEnd6',
                feedback:
                    'Confronting scammers can be risky. Walking away and reporting is a safer option.',
            },
            {
                text: 'Trust them and proceed.',
                link: 'q6',
                feedback:
                    'Trusting them at this stage is highly risky. Scam signs are clear.',
            },
        ],
    },
    q9: {
        id: 9,
        question:
            'EliteInvesting123:\nOf course! We pride ourselves on being transparent. You can request a refund at any time before the initial profit is generated. After that, your money is locked in with the market, and we can’t issue refunds, but you’ll definitely make money with us—no one has ever asked for a refund!',
        answers: [
            {
                text: 'Accept the refund policy and proceed to send $200.',
                link: 'q6',
                feedback:
                    'Accepting this policy is risky. Refund guarantees after profits are highly suspicious.',
            },
            {
                text: 'Become suspicious due to the “no refunds after profits” clause and ask more questions.',
                link: 'qEnd7',
                feedback:
                    'Your suspicion is valid—no legitimate investment would operate this way.',
            },
        ],
    },
    q10: {
        id: 10,
        question:
            'EliteInvesting123:\nI understand you’re being cautious, but $200 is the minimum required for this particular opportunity. Anything less, and you won’t see the same great returns. I’d hate for you to miss out because of a small difference!',
        answers: [
            {
                text: 'Agree to invest the full $200.',
                link: 'q6',
                feedback:
                    'Agreeing to invest without fully verifying is risky. Always ensure you’re confident in the offer.',
            },
            {
                text: 'Walk away, sensing the aggressiveness as a red flag.',
                link: 'qEnd8',
                feedback:
                    'Aggressiveness is a red flag. Walking away is the best decision.',
            },
        ],
    },
    q11: {
        id: 11,
        question:
            'EliteInvesting123:\nThere’s just one small fee of $50 to process the withdrawal. As soon as you pay, your money will be sent right away.',
        answers: [
            {
                text: 'Pay the $50 withdrawal fee.',
                link: 'q13',
                feedback:
                    'Paying withdrawal fees is a common scam tactic. Avoid this and demand your money back.',
            },
            {
                text: 'Refuse and demand a full refund immediately.',
                link: 'qEnd9',
                feedback:
                    'Refusing and demanding a refund shows you’re aware of the scam.',
            },
        ],
    },
    q12: {
        id: 12,
        question:
            'EliteInvesting123:\nFantastic news! Your investment has grown to $1,800! However, to access your full earnings and unlock the withdrawal feature, we recommend an additional investment of $500. This will allow you to reach the next tier of profits and increase your total return to $4,000.',
        answers: [
            {
                text: 'Invest the additional $500 to unlock the next tier.',
                link: 'q6',
                feedback:
                    'Requesting more money after your investment grows is a scam sign. Do not send additional funds.',
            },
            {
                text: 'Refuse to pay any fees and demand your money back.',
                link: 'qEnd10',
                feedback:
                    'Refusing to pay shows you’re taking control of the situation and avoiding further losses.',
            },
        ],
    },
    q13: {
        id: 13,
        question:
            'EliteInvesting123:\nThere’s been a delay. We’re working on your withdrawal and will need you to pay a security fee of $100 to expedite it.',
        answers: [
            {
                text: 'Pay the additional $100 fee.',
                link: 'qEnd11',
                feedback:
                    'Paying additional fees is a common scam trap. Avoid this and cut off communication.',
            },
            {
                text: 'Refuse to pay the fee and ask to cancel the investment.',
                link: 'qEnd12',
                feedback:
                    'Refusing to pay shows you’re avoiding further losses in the scam.',
            },
        ],
    },
    qEnd1: {
        id: 'End1',
        question:
            'You successfully prevent the scam. You’ve recognized the risk and taken steps to protect yourself.\n\n**Conclusion:** Besides ignoring the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always be cautious when the investment is high return without risks.',
        answers: [],
        end: true,
    },
    qEnd2: {
        id: 'End2',
        question:
            'You successfully called out the scam and walked away from the situation. \n\n**Conclusion:** Besides confronting and walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always be cautious when the information of investment associate is not found.',
        answers: [],
        end: true,
    },
    qEnd3: {
        id: 'End3',
        question:
            'You confronted the scammer and ended the interaction.\n\n**Conclusion:** Besides confronting the scam, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always searching for information before you start the investment.',
        answers: [],
        end: true,
    },
    qEnd4: {
        id: 'End4',
        question:
            'You reported the scammer to authorities and helped prevent others from falling victim.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer. Always searching for information before you start the investment.',
        answers: [],
        end: true,
    },
    qEnd5: {
        id: 'End5',
        question:
            'You decided not to engage with the scam and moved on safely.\n\n**Conclusion:** Besides walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always searching for information before you start the investment.',
        end: true,
    },
    qEnd6: {
        id: 'End6',
        question:
            'You walked away from the scam after realizing the scammer’s tactics.\n\n**Conclusion:** Besides walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always be cautious when the information is unclear.',

        end: true,
    },
    qEnd7: {
        id: 'End7',
        question:
            'You became suspicious and ended the conversation without sending any money.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer. Always be cautious when the information is unclear.',
        answers: [],
        end: true,
    },
    qEnd8: {
        id: 'End8',
        question:
            'You walked away from the scam after sensing red flags.\n\n**Conclusion:** Besides walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer.',
        answers: [],
        end: true,
    },
    qEnd9: {
        id: 'End9',
        question:
            'You refused to pay any withdrawal fees and ended the scam attempt.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer.',
        answers: [],
        end: true,
    },
    qEnd10: {
        id: 'End10',
        question:
            'You refused to invest further and demanded a refund.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer. Always be cautious when the investment is high return without risks.',
        answers: [],
        end: true,
    },
    qEnd11: {
        id: 'End11',
        question:
            'You paid the additional fee, but the scammer disappeared with your money.\n\n**Conclusion:** The action you need to take isreporting the scam via government and the platform. By reporting the scam, you can help to make social media and the community safer. Always be cautious when the investment is high return without risks.',
        answers: [],
        end: true,
    },
    qEnd12: {
        id: 'End12',
        question:
            'You refused to pay the security fee, and the scammer blocked you from further communication. \n\nConclusion: By reporting the scam, you can help to make social media and the community safer.',
        answers: [],
        end: true,
    },
}
