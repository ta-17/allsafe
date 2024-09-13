export const buyingAndSelling = {
    q0: {
        id: 0,
        question:
            "You're browsing an online marketplace looking for a great deal on [Item X] (it could be a phone, gaming console, etc.). You come across an offer that looks almost too good to be true — a brand-new item for a significantly lower price than usual. You decide to reach out to the seller. You message the seller, and they reply almost immediately:\n\nScammer (as Seller):\nHey! Thanks for your interest in [Item X]. I'm selling it because I need the cash urgently. It's brand new, and I can ship it to you right away for just $200. Normally it goes for $500, so you're getting a great deal! Let me know if you're ready to buy.",
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
            "You agree to buy the item and transfer $200 to the seller using their preferred method of payment. After you send the money, the seller responds:\n\nScammer (as Seller):\nThanks for the payment! I'll ship the item today, and you should receive it within the next few days. I'll send you the tracking information as soon as it's available.\n\nAfter a couple of days, you ask for an update, but the seller becomes unresponsive. You check the tracking number they gave you, and it either doesn't work or shows that no package was shipped. You realize you've been scammed.",
        answers: [
            {
                text: 'Try to contact the seller again and demand a refund.',
                link: 'q5',
            },
            {
                text: 'File a dispute with the payment platform (e.g., PayPal) to try and recover your money.',
                link: 'q6',
            },
            {
                text: 'Report the seller to the marketplace and authorities.',
                link: 'q7',
            },
        ],
    },
    q2: {
        id: 2,
        question:
            "Before I send the payment, could you provide more pictures of the item and confirm how you'll ship it to me? I just want to make sure everything is legit.\n\nScammer (as Seller):\nSure! Here are a few more photos. I'll be shipping it via [reputable shipping service], and I'll send you a tracking number as soon as it's shipped. Don't worry, I've sold a few of these before without any problems. You'll get the item within 3 days.\n\nThe photos look genuine, but there's still something that feels off. The price is still too good to be true.",
        answers: [
            {
                text: 'Trust the seller and proceed with the payment.',
                link: 'q1',
            },
            {
                text: 'Ask for proof of past successful transactions or reviews from other buyers.',
                link: 'q8',
            },
        ],
    },
    q3: {
        id: 3,
        question:
            "I'd prefer to meet in person to make the purchase. Can we arrange a time to meet so I can inspect the item before I pay?\n\nScammer (as Seller):\nI'd love to, but I'm currently out of town/on a business trip. I can't meet right now, but I can ship it to you immediately. If you don't like it when it arrives, you can always return it.",
        answers: [
            {
                text: "Accept the seller's reasoning and proceed with payment.",
                link: 'q1',
            },
            {
                text: 'Insist on an in-person meeting or drop the deal.',
                link: 'q9',
            },
        ],
    },
    q4: {
        id: 4,
        question:
            "You take a step back and do some research on the seller, looking for any reviews, previous sales, or comments from other buyers. After a few minutes, you find some alarming signs:\n\n• The seller's account is only a few days old.\n• There are no ratings or reviews, or some reviews mention unfulfilled orders and suspicious activity.\n• The price is much lower than any other listing for the same item, raising red flags.",
        answers: [
            {
                text: 'Confront the seller with your findings.',
                link: 'q10',
            },
            {
                text: 'Report the seller to the marketplace platform.',
                link: 'q11',
            },
        ],
    },
    q5: {
        id: 5,
        question:
            "You try to contact the seller, but they either stop responding altogether or continue to give excuses like:\n\nScammer (as Seller):\nHey, sorry about the delay! The package is stuck with the shipping company. I'm trying to get it sorted out. Please give me a couple more days.\n\nAfter another week of waiting, it becomes clear that you won't be receiving the item.",
        answers: [
            {
                text: 'Accept the loss.',
                link: 'q12',
            },
            {
                text: 'Escalate the issue with the payment platform.',
                link: 'q6',
            },
        ],
    },
    q6: {
        id: 6,
        question:
            "You file a dispute with the payment platform (e.g., PayPal, Venmo, etc.), providing evidence that the seller hasn't shipped the item and that you suspect it's a scam. The platform may initiate an investigation:",
        answers: [
            {
                text: 'Wait for the outcome (buyer protection method used).',
                link: 'q13',
            },
            {
                text: 'Wait for the outcome (non-refundable method used).',
                link: 'q14',
            },
        ],
    },
    q7: {
        id: 7,
        question:
            'You decide to report the seller to the online marketplace and local authorities, providing all the necessary documentation (screenshots of messages, proof of payment, etc.). The marketplace may:',
        answers: [
            {
                text: "Ban the scammer's account and remove the listing.",
                link: 'q15',
            },
            {
                text: 'Provide guidance on how to file a report with authorities.',
                link: 'q16',
            },
        ],
    },
    q8: {
        id: 8,
        question:
            "Could you show me proof of any successful sales you've done before? I'd just feel more comfortable if I knew other buyers were happy with their purchases.\n\nScammer (as Seller):\nSure! Here's a screenshot of the last sale I made for the same item. The buyer was really happy, and I can even give you their contact info if you want.\n\nThe screenshot looks convincing, but you're unsure whether it's genuine or doctored.",
        answers: [
            {
                text: 'Trust the proof and proceed with the purchase.',
                link: 'q1',
            },
            {
                text: 'Ask to contact the previous buyer to confirm the sale.',
                link: 'q17',
            },
            {
                text: 'Become suspicious and decide not to go through with the transaction.',
                link: 'q18',
            },
        ],
    },
    q9: {
        id: 9,
        question:
            "I'm sorry, but I'm only comfortable with meeting in person. If we can't meet, I'll have to pass on the deal.\n\nThe seller tries to convince you, but eventually backs off:\n\nScammer (as Seller):\nI understand. If you change your mind, let me know. I'll keep it available for now.",
        answers: [
            {
                text: 'End the conversation and avoid the scam.',
                link: 'q19',
            },
        ],
    },
    q10: {
        id: 10,
        question:
            "I looked into your account, and there are a lot of red flags. Your account is new, and there are reports from other buyers about missing items. I'm not comfortable moving forward with this.\n\nScammer (as Seller):\nThose are fake reviews left by competitors. I can assure you that I'm legitimate. I've sold many items without any issues. If you don't trust me, that's fine, but you're going to miss out on a great deal.",
        answers: [
            {
                text: "Trust the seller's explanation and proceed with the payment.",
                link: 'q1',
            },
            {
                text: 'Walk away from the deal entirely, avoiding the scam.',
                link: 'q20',
            },
        ],
    },
    q11: {
        id: 11,
        question:
            "You've reported the seller to the marketplace platform. What would you like to do next?",
        answers: [
            {
                text: "Wait for the platform's response and avoid further contact with the seller.",
                link: 'q21',
            },
            {
                text: 'Look for a different seller for the item you want.',
                link: 'q22',
            },
        ],
    },
    q12: {
        id: 12,
        question:
            "You've lost the $200, and the scammer has disappeared. You've decided to accept the loss. What would you like to do next?",
        answers: [
            {
                text: 'Share your experience to warn others about this scam.',
                link: 'q23',
            },
            {
                text: 'Research ways to protect yourself from similar scams in the future.',
                link: 'q24',
            },
        ],
    },
    q13: {
        id: 13,
        question:
            'After a few days of investigation, the payment platform decides in your favor since you used a method that offers buyer protection. They refund your $200.',
        answers: [
            {
                text: 'Feel relieved and decide to be more cautious in future online transactions.',
                link: 'q25',
            },
            {
                text: 'Report the scammer to the marketplace to prevent others from being victimized.',
                link: 'q7',
            },
        ],
    },
    q14: {
        id: 14,
        question:
            'Unfortunately, since you used a non-refundable payment method, the platform denies your request for a refund. Your $200 is gone.',
        answers: [
            {
                text: 'Accept the loss and learn from the experience.',
                link: 'q12',
            },
            {
                text: 'Explore other options for recourse, such as reporting to authorities.',
                link: 'q7',
            },
        ],
    },
    q15: {
        id: 15,
        question:
            "The marketplace has banned the scammer's account and removed the listing. While this doesn't recover your money, it helps prevent others from falling victim to the same scam.",
        answers: [
            {
                text: "Feel satisfied that you've helped protect others and move on.",
                link: 'q26',
            },
            {
                text: 'Continue to pursue the case with local authorities.',
                link: 'q27',
            },
        ],
    },
    q16: {
        id: 16,
        question:
            'The marketplace provides you with guidance on how to file a report with local authorities. They explain that while it may be difficult to track down the scammer, filing a report can help build a case if the scammer is caught in the future.',
        answers: [
            {
                text: 'Follow through and file a report with the authorities.',
                link: 'q27',
            },
            {
                text: "Decide it's not worth the effort and move on from the experience.",
                link: 'q26',
            },
        ],
    },
    q17: {
        id: 17,
        question:
            'You contact the "previous buyer," who happens to be an accomplice of the scammer. They tell you how happy they are with the purchase and how everything went smoothly. This reassures you, and you proceed with the transaction, leading to eventual loss.',
        answers: [
            {
                text: "Realize you've been scammed and try to recover your money.",
                link: 'q5',
            },
            {
                text: 'Accept the loss and report the scammer to prevent future victims.',
                link: 'q7',
            },
        ],
    },
    q18: {
        id: 18,
        question:
            'You decide to investigate the photos by doing a reverse image search. After a few moments, you find that the images are from a completely different listing on another website.',
        answers: [
            {
                text: 'Confront the seller about the stolen images.',
                link: 'q28',
            },
            {
                text: 'Report the seller to the marketplace without confrontation.',
                link: 'q11',
            },
        ],
    },
    q19: {
        id: 19,
        question:
            "You've successfully avoided the scam by insisting on meeting in person. The scammer backed off when they realized you wouldn't fall for their trick. What would you like to do next?",
        answers: [
            {
                text: 'Look for a legitimate seller for the item you want.',
                link: 'q22',
            },
            {
                text: 'Report the suspicious seller to the marketplace.',
                link: 'q11',
            },
        ],
    },
    q20: {
        id: 20,
        question:
            "You've decided to walk away from the deal, successfully avoiding the scam. Your suspicions about the seller's account and the too-good-to-be-true offer were well-founded. What's your next step?",
        answers: [
            {
                text: 'Report the suspicious seller to the marketplace.',
                link: 'q11',
            },
            {
                text: 'Look for a more reputable seller for the item you want.',
                link: 'q22',
            },
        ],
    },
    q21: {
        id: 21,
        question:
            "You've successfully prevented the scam from progressing by reporting the seller to the marketplace platform. What would you like to do next?",
        answers: [
            {
                text: "Wait for the platform's response before taking any further action.",
                link: 'q29',
            },
            {
                text: 'Start looking for a legitimate seller for the item you want.',
                link: 'q22',
            },
        ],
    },
    q22: {
        id: 22,
        question:
            "You've decided to look for a different seller for the item you want. This time, you're more cautious and aware of potential scams. How would you like to proceed?",
        answers: [
            {
                text: 'Search for sellers with good ratings and reviews.',
                link: 'q30',
            },
            {
                text: 'Look for local sellers to enable in-person transactions.',
                link: 'q31',
            },
        ],
    },
}
const gameData = {
    q0: {
        id: 0,
        question:
            "The scammer reaches out to the player with a direct message, claiming they found the player's profile through a job posting platform, social media, or online résumé. The scammer's offer seems attractive, offering a high salary for remote work or a part-time job that doesn't require special qualifications.",
        answers: [
            {
                text: 'Show interest and ask for more details about the job.',
                link: 'q1',
            },
            {
                text: "Ask how they found your profile and why they think you're a good fit.",
                link: 'q2',
            },
            {
                text: 'Ignore the message and block the scammer.',
                link: 'q3',
            },
        ],
    },
    q1: {
        id: 1,
        question:
            'You express interest in the job offer and ask for more details. The scammer responds enthusiastically but quickly shifts focus to the next steps involving personal information.',
        answers: [
            {
                text: "Agree to provide the information and proceed with the 'hiring process.'",
                link: 'q4',
            },
            {
                text: 'Ask for a company website or references to verify the legitimacy of the job offer.',
                link: 'q5',
            },
            {
                text: 'Recognize the red flags and stop responding.',
                link: 'q6',
            },
        ],
    },
    q2: {
        id: 2,
        question:
            "You're cautious and ask the scammer how they found your profile and why they believe you're a good fit.",
        answers: [
            {
                text: 'Ask for more specific details about where they found your profile.',
                link: 'q7',
            },
            {
                text: "Ask why they're reaching out if you haven't applied for jobs recently.",
                link: 'q8',
            },
            {
                text: 'Express suspicion and end the conversation.',
                link: 'q6',
            },
        ],
    },
    q3: {
        id: 3,
        question:
            "You decide to ignore the message and block the scammer. You've heard about job scams before and don't want to take any chances.",
        answers: [
            {
                text: 'End the conversation and block the scammer.',
                link: 'end',
            },
        ],
    },
    q4: {
        id: 4,
        question:
            "You agree to provide the information and proceed with the 'hiring process.' The scammer continues to ask for more personal details, such as your Social Security number, credit card information, or passwords.",
        answers: [
            {
                text: "Provide the information, trusting the scammer's promises of a high-paying job.",
                link: 'q9',
            },
            {
                text: 'Become suspicious and refuse to provide any more information.',
                link: 'q10',
            },
        ],
    },
    q5: {
        id: 5,
        question:
            "You ask for a company website or references to verify the legitimacy of the job offer. The scammer avoids providing this information, claiming that the company is new or that they can't share it for confidentiality reasons.",
        answers: [
            {
                text: 'Continue to press for more information, suspecting something is wrong.',
                link: 'q10',
            },
            {
                text: 'Trust their explanation and proceed with the job offer.',
                link: 'q4',
            },
        ],
    },
    q6: {
        id: 6,
        question:
            "You express suspicion and end the conversation. You've heard about job scams before and don't want to take any chances.",
        answers: [
            {
                text: 'End the conversation and block the scammer.',
                link: 'end',
            },
        ],
    },
    q7: {
        id: 7,
        question:
            "You ask for more specific details about where they found your profile. The scammer provides a vague answer, such as 'a job board' or 'a database of resumes.'",
        answers: [
            {
                text: 'Continue to press for more information, suspecting something is wrong.',
                link: 'q10',
            },
            {
                text: 'Trust their explanation and proceed with the job offer.',
                link: 'q4',
            },
        ],
    },
    q8: {
        id: 8,
        question:
            "You ask why they're reaching out if you haven't applied for jobs recently. The scammer claims that they were impressed by your profile and think you'd be a great fit.",
        answers: [
            {
                text: 'Continue to press for more information, suspecting something is wrong.',
                link: 'q10',
            },
            {
                text: 'Trust their explanation and proceed with the job offer.',
                link: 'q4',
            },
        ],
    },
    q9: {
        id: 9,
        question:
            "You provide the information, trusting the scammer's promises of a high-paying job. The scammer disappears after receiving your personal information.",
        answers: [
            {
                text: 'End the conversation and report the scammer to the authorities.',
                link: 'end',
            },
        ],
    },
    q10: {
        id: 10,
        question:
            'You become suspicious and refuse to provide any more information. You end the conversation and block the scammer.',
        answers: [
            {
                text: 'End the conversation and block the scammer.',
                link: 'end',
            },
        ],
    },
    end: {
        id: 'end',
        question: 'You successfully avoided the job scam.',
        answers: [],
    },
}
