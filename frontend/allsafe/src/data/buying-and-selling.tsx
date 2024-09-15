export const buyingAndSelling = {
    q0: {
        id: 0,
        question:
            "You're browsing an online marketplace looking for a great deal on [Item X] (it could be a phone, gaming console, etc.). You come across an offer that looks almost too good to be true — a brand-new item for a significantly lower price than usual. You decide to reach out to the seller. You message the seller, and they reply almost immediately:\n\nSeller:\nHey! Thanks for your interest in [Item X]. I'm selling it because I need the cash urgently. It's brand new, and I can ship it to you right away for just $200. Normally it goes for $500, so you're getting a great deal! Let me know if you're ready to buy.",
        answers: [
            {
                text: 'Agree to buy the item at $200.',
                link: 'q1',
            },
            {
                text: 'Ask for more details about the item and shipping process.',
                link: 'q2',
            },
            {
                text: 'Ask to meet in person before buying.',
                link: 'q3',
            },
            {
                text: 'Conduct your own research on the seller.',
                link: 'q4',
            },
        ],
    },

    q1: {
        id: 1,
        question:
            "You agree to buy the item at $200. The seller responds:\n\nSeller:\nGreat! To proceed, please send the payment via wire transfer to this account number [Account Number]. Once I receive the payment, I'll ship the item immediately.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Proceed to send the payment via wire transfer.',
                link: 'q5',
            },
            {
                text: 'Express concern about using wire transfer and ask for a more secure payment method.',
                link: 'q6',
            },
            {
                text: 'Decide not to proceed with the purchase and ignore the seller.',
                link: 'q7',
            },
        ],
    },

    q2: {
        id: 2,
        question:
            "You ask for more details about the item and the shipping process. The seller replies:\n\nSeller:\nIt's the latest model, unopened box. As for shipping, I'll send it out as soon as I receive payment. I prefer wire transfer to avoid extra fees. Trust me, you won't regret this deal!\n\nWhat do you do next?",
        answers: [
            {
                text: 'Agree to proceed with the purchase via wire transfer.',
                link: 'q5',
            },
            {
                text: 'Ask if you can use a more secure payment method like PayPal or meet in person.',
                link: 'q6',
            },
            {
                text: 'Decide not to proceed with the purchase and ignore the seller.',
                link: 'q7',
            },
        ],
    },

    q3: {
        id: 3,
        question:
            "You ask to meet in person before buying. The seller responds:\n\nSeller:\nI'd love to, but I'm currently out of town for work. That's why I'm offering to ship it to you. Don't worry, I'll make sure it gets to you safely after the payment.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Proceed to agree and send the payment via wire transfer.',
                link: 'q5',
            },
            {
                text: 'Insist on waiting until they return to meet in person.',
                link: 'q8',
            },
            {
                text: 'Decide to cancel the transaction and ignore the seller.',
                link: 'q7',
            },
        ],
    },

    q4: {
        id: 4,
        question:
            "You conduct your own research on the seller. You find that their profile is new and lacks previous activity. There are no reviews or feedback from other buyers. This raises suspicion.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Proceed with caution and ask the seller for verification or more details.',
                link: 'q2',
            },
            {
                text: 'Decide not to proceed with the purchase and ignore the seller.',
                link: 'q7',
            },
        ],
    },

    q5: {
        id: 5,
        question:
            "You send the payment via wire transfer. After confirming the transfer, the seller stops responding to your messages. Days pass and you don't receive the item. You realize you've been scammed.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Report the seller to the marketplace platform.',
                link: 'q9',
            },
            {
                text: 'Contact your bank to see if the transfer can be reversed.',
                link: 'q10',
            },
            {
                text: 'Do nothing and accept the loss.',
                link: 'q11',
            },
        ],
    },

    q6: {
        id: 6,
        question:
            "You express concern about using wire transfer and ask for a more secure payment method. The seller responds:\n\nSeller:\nSorry, I can only accept wire transfers right now. It's the quickest way for me to get the funds. Do you still want to proceed?\n\nWhat do you do next?",
        answers: [
            {
                text: 'Agree to proceed with the wire transfer despite your concerns.',
                link: 'q5',
            },
            {
                text: 'Decide not to proceed with the purchase and ignore the seller.',
                link: 'q7',
            },
        ],
    },

    q7: {
        id: 7,
        question:
            "You decide not to proceed with the purchase and ignore the seller. However, you wonder if you should report this person to prevent others from being scammed.\n\nDo you want to report the seller?",
        answers: [
            {
                text: 'Yes, report the seller to the marketplace platform.',
                link: 'q12',
            },
            {
                text: 'No, do nothing further.',
                link: 'q15',
            },
        ],
    },

    q8: {
        id: 8,
        question:
            "You insist on waiting until they return to meet in person. The seller replies:\n\nSeller:\nI understand, but I really need to sell this quickly. If you're not interested, I might have to offer it to someone else.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Decide to proceed with the wire transfer to secure the deal.',
                link: 'q5',
            },
            {
                text: 'Stick to your decision to meet in person, even if it means losing the deal.',
                link: 'q7',
            },
        ],
    },

    q9: {
        id: 9,
        question:
            "You report the seller to the marketplace platform.\n\nOn which platform do you want to learn how to report this seller?",
        answers: [
            {
                text: 'Facebook Marketplace',
                link: 'q9Facebook',
            },
            {
                text: 'Instagram Marketplace',
                link: 'q9Instagram',
            },
            {
                text: 'TikTok Marketplace',
                link: 'q9TikTok',
            },
        ],
    },

    q9Facebook: {
        id: 9,
        question:
            "You report the seller on Facebook Marketplace.\n\n[Instructions on how to report a seller on Facebook Marketplace.]\n\nThe platform acknowledges your report and promises to investigate. You've taken the right step to protect yourself and others from potential scams.\n\n**Conclusion:** By reporting the suspicious seller, you help make the online marketplace safer for everyone. Always be cautious when deals seem too good to be true, and prefer secure payment methods.",
        answers: [],
    },

    q9Instagram: {
        id: 9,
        question:
            "You report the seller on Instagram Marketplace.\n\n[Instructions on how to report a seller on Instagram Marketplace.]\n\nThe platform acknowledges your report and promises to investigate. You've taken the right step to protect yourself and others from potential scams.\n\n**Conclusion:** By reporting the suspicious seller, you help make the online marketplace safer for everyone. Always be cautious when deals seem too good to be true, and prefer secure payment methods.",
        answers: [],
    },

    q9TikTok: {
        id: 9,
        question:
            "You report the seller on TikTok Marketplace.\n\n[Instructions on how to report a seller on TikTok Marketplace.]\n\nThe platform acknowledges your report and promises to investigate. You've taken the right step to protect yourself and others from potential scams.\n\n**Conclusion:** By reporting the suspicious seller, you help make the online marketplace safer for everyone. Always be cautious when deals seem too good to be true, and prefer secure payment methods.",
        answers: [],
    },

    q10: {
        id: 10,
        question:
            "You contact your bank to inquire about reversing the wire transfer. The bank informs you that wire transfers are difficult to reverse, but they will investigate. Unfortunately, recovering the funds may not be possible.\n\n**Conclusion:** It's important to use secure payment methods that offer buyer protection. Be wary of sellers who insist on wire transfers.\n\n**Feedback:** While it's unfortunate that you lost money, contacting your bank was a proactive step.",
        answers: [],
    },

    q11: {
        id: 11,
        question:
            "You decide to accept the loss and move on, feeling disappointed and more cautious about future online purchases.\n\n**Conclusion:** Scams can happen to anyone. In the future, consider using secure payment methods and verifying sellers before making purchases.\n\n**Feedback:** It's important to learn from this experience to avoid similar situations.",
        answers: [],
    },

    q12: {
        id: 12,
        question:
            "You report the seller to the marketplace platform.\n\nOn which platform do you want to learn how to report this seller?",
        answers: [
            {
                text: 'Facebook Marketplace',
                link: 'q9Facebook',
            },
            {
                text: 'Instagram Marketplace',
                link: 'q9Instagram',
            },
            {
                text: 'TikTok Marketplace',
                link: 'q9TikTok',
            },
        ],
    },

    q15: {
        id: 15,
        question:
            "You choose not to report the seller. However, reporting suspicious accounts helps protect others from scams. It's important to report such incidents to keep the community safe.\n\n[Placeholder for instructions on how to report a seller on the marketplace platform.]\n\nDo you want to reconsider and report the seller?",
        answers: [
            {
                text: 'Yes, I will report the seller now.',
                link: 'q12',
            },
            {
                text: 'No, I still prefer not to report.',
                link: 'q14',
            },
        ],
    },

    q14: {
        id: 14,
        question:
            "You decide not to take any further action. The seller may continue to operate on the platform and potentially scam others.\n\n**Conclusion:** By not reporting, others may fall victim to the same scam. Consider reporting in the future to help protect the community.\n\n**Feedback:** Next time, reporting suspicious activity can make a significant difference in preventing scams.",
        answers: [],
    }
};
