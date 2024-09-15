export const investment = {
    q0: {
        id: 0,
        question:
            'You receive a message from a stranger named “EliteInvesting123” on social media:\n\nEliteInvesting123:\nHey there! We’ve been following your profile, and based on what we see, you’re a perfect fit for our exclusive investment platform. Right now, our members are making 200% returns on cryptocurrency investments! No risk, guaranteed profits. Would you be interested in learning more?',
        answers: [
            {
                text: 'Ignore the message.',
                link: 'qEnd1',
            },
            {
                text: 'Ask for more details about the investment.',
                link: 'q1',
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
            },
            {
                text: 'Conduct your own research on “EliteInvesting123.”',
                link: 'q7',
            },
            {
                text: 'Express interest and ask how to make the deposit.',
                link: 'q3',
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
            },
            {
                text: 'Ask for proof of successful transactions from real investors.',
                link: 'q5',
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
            },
            {
                text: 'Ask for a refund policy before sending money.',
                link: 'q9',
            },
            {
                text: 'Ask if you can start with a smaller amount.',
                link: 'q10',
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
            },
            {
                text: 'Trust them and proceed with the investment.',
                link: 'q6',
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
            },
            {
                text: 'Ask for more verifiable documentation of these transactions.',
                link: 'q8',
            },
            {
                text: 'Ignore the testimonials and conduct your own research.',
                link: 'q7',
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
            },
            {
                text: 'Reinvest the $600 for bigger returns.',
                link: 'q12',
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
            },
            {
                text: 'Report the account to authorities or social media platforms for fraud.',
                link: 'qEnd4',
            },
            {
                text: 'Walk away without engaging further.',
                link: 'qEnd5',
            },
        ],
    },
    q8: {
        id: 8,
        question:
            'The scammer stalls or provides fake documents that look suspicious (e.g., inconsistent amounts, incorrect bank names). You realize it’s a scam.',
        answers: [
            {
                text: 'Confront them and walk away.',
                link: 'qEnd6',
            },
            {
                text: 'Trust them and proceed.',
                link: 'q6',
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
            },
            {
                text: 'Become suspicious due to the “no refunds after profits” clause and ask more questions.',
                link: 'qEnd7',
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
            },
            {
                text: 'Walk away, sensing the aggressiveness as a red flag.',
                link: 'qEnd8',
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
            },
            {
                text: 'Refuse and demand a full refund immediately.',
                link: 'qEnd9',
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
            },
            {
                text: 'Refuse to pay any fees and demand your money back.',
                link: 'qEnd10',
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
            },
            {
                text: 'Refuse to pay the fee and ask to cancel the investment.',
                link: 'qEnd12',
            },
        ],
    },
    qEnd1: {
        id: 'End1',
        question:
            'You successfully prevent the scam. You’ve recognized the risk and taken steps to protect yourself.\n\n**Conclusion:** Besides ignoring the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always be cautious when the investment is high return without risks.',
        answers: [],
    },
    qEnd2: {
        id: 'End2',
        question:
            'You successfully called out the scam and walked away from the situation. \n\n**Conclusion:** Besides confronting and walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always be cautious when the information of investment associate is not found.',
        answers: [],
    },
    qEnd3: {
        id: 'End3',
        question:
            'You confronted the scammer and ended the interaction.\n\n**Conclusion:** Besides confronting the scam, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always searching for information before you start the investment.',
        answers: [],
    },
    qEnd4: {
        id: 'End4',
        question:
            'You reported the scammer to authorities and helped prevent others from falling victim.n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer. Always searching for information before you start the investment.',
        answers: [],
    },
    qEnd5: {
        id: 'End5',
        question:
            'You decided not to engage with the scam and moved on safely.\n\n**Conclusion:** Besides walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always searching for information before you start the investment.',
    },
    qEnd6: {
        id: 'End6',
        question:
            'You walked away from the scam after realizing the scammer’s tactics.\n\n**Conclusion:** Besides walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always be cautious when the information is unclear.',
    },
    qEnd7: {
        id: 'End7',
        question:
            'You became suspicious and ended the conversation without sending any money.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer. Always be cautious when the information is unclear.',
        answers: [],
    },
    qEnd8: {
        id: 'End8',
        question:
            'You walked away from the scam after sensing red flags.\n\n**Conclusion:** Besides walking away from the message, you can also report it on social media and the government platform. By reporting the scam, you help to make social media and the community safer.',
        answers: [],
    },
    qEnd9: {
        id: 'End9',
        question:
            'You refused to pay any withdrawal fees and ended the scam attempt.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer.',
        answers: [],
    },
    qEnd10: {
        id: 'End10',
        question:
            'You refused to invest further and demanded a refund.\n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer. Always be cautious when the investment is high return without risks.',
        answers: [],
    },
    qEnd11: {
        id: 'End11',
        question:
            'You paid the additional fee, but the scammer disappeared with your money.\n\n**Conclusion:** The action you need to take is reporting the scam via government and the platform. By reporting the scam, you can help to make social media and the community safer. Always be cautious when the investment is high return without risks.',
        answers: [],
    },
    qEnd12: {
        id: 'End12',
        question:
            'You refused to pay the security fee, and the scammer blocked you from further communication. \n\n**Conclusion:** By reporting the scam, you can help to make social media and the community safer.',
        answers: [],
    },
}
