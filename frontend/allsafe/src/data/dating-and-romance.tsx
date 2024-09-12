export const datingAndRomance = {
    q0: {
        id: 0,
        question:
            'You’ve joined a dating app or social media platform to meet new people. After a few days of searching, you receive a message from someone who seems attractive, interesting, and genuinely interested in getting to know you. What do you do?',
        answers: [
            {
                text: 'Respond to the scammer and engage in conversation.',
                link: 'q1',
            },
            {
                text: 'Ignore the message and block the scammer.',
                link: 'q4',
            },
        ],
    },
    q1: {
        id: 1,
        question:
            'You decide to respond to the message and start talking with the scammer. They seem charming and attentive, quickly asking about your day, your interests, and things you enjoy doing. The conversation feels natural, and over the next few days, you exchange several messages. What do you do next?',
        answers: [
            {
                text: 'Continue chatting and build the connection.',
                link: 'q2',
            },
            {
                text: 'Grow suspicious and stop responding.',
                link: 'q4',
            },
        ],
    },
    q2: {
        id: 2,
        question:
            'The scammer begins to introduce problems in their life that they need help with, pretending to have a sudden financial emergency. What do you do?',
        answers: [
            {
                text: 'Offer to help them financially.',
                link: 'q3',
            },
            {
                text: 'Ask if they’ve explored other options for financial help.',
                link: 'q5',
            },
            {
                text: 'Request proof (e.g., invoices, photos of the damage).',
                link: 'q6',
            },
            {
                text: 'Express sympathy but refuse to send money.',
                link: 'q7',
            },
        ],
    },
    q3: {
        id: 3,
        question:
            "The scammer asks for $500 to cover their mother's medical bills. What do you do?",
        answers: [
            {
                text: 'Send the full amount requested ($500).',
                link: 'q8',
            },
            {
                text: 'Offer to send part of the money ($100-$200).',
                link: 'q9',
            },
            {
                text: 'Refuse to send any more money.',
                link: 'q10',
            },
        ],
    },
    q4: {
        id: 4,
        question:
            'You decide to ignore the message and block the scammer. What happens next?',
        answers: [
            {
                text: 'End Result: You avoid the scam entirely by cutting off contact and protecting yourself from potential manipulation.',
                link: null,
            },
        ],
    },
    q5: {
        id: 5,
        question:
            'You ask the scammer if they’ve asked for help from friends or family. How do they respond?',
        answers: [
            {
                text: 'They claim they’ve tried everyone and are desperate for your help.',
                link: 'q7',
            },
            {
                text: 'They become defensive and insist you’re their only hope.',
                link: 'q7',
            },
        ],
    },
    q6: {
        id: 6,
        question:
            'You ask for proof of their situation. How does the scammer respond?',
        answers: [
            {
                text: 'They promise to get you proof but delay or provide vague answers.',
                link: 'q11',
            },
            {
                text: 'They provide no proof and insist you send money immediately.',
                link: 'q12',
            },
        ],
    },
    q7: {
        id: 7,
        question:
            'The scammer continues to request money despite your refusal. How do you respond?',
        answers: [
            {
                text: "Decide to cut off contact, realizing it's a scam.",
                link: 'q13',
            },
            {
                text: 'Feel guilty and send a smaller amount.',
                link: 'q14',
            },
        ],
    },
    q8: {
        id: 8,
        question:
            'After sending $500, the scammer returns with another request for more money. What do you do?',
        answers: [
            {
                text: 'Send more money to help with additional costs.',
                link: 'q15',
            },
            {
                text: 'Express frustration and ask why they didn’t plan for extra costs.',
                link: 'q16',
            },
            {
                text: 'Grow suspicious and stop sending money.',
                link: 'q17',
            },
        ],
    },
    q9: {
        id: 9,
        question:
            'You decide to send $150 instead of $500. The scammer still asks for more money. What do you do?',
        answers: [
            {
                text: 'Send more money to cover remaining costs.',
                link: 'q18',
            },
            {
                text: 'Refuse to send more money.',
                link: 'q19',
            },
            {
                text: 'Ask if they’ve explored other financial options.',
                link: 'q20',
            },
        ],
    },
    q10: {
        id: 10,
        question: 'You refuse to send more money. What happens next?',
        answers: [
            {
                text: 'The scammer eventually stops contacting you, having taken your initial $500.',
                link: null,
            },
        ],
    },
    q11: {
        id: 11,
        question: 'The scammer avoids providing proof. What do you decide?',
        answers: [
            {
                text: 'Insist on receiving proof before sending money.',
                link: 'q13',
            },
            {
                text: 'Send the money anyway.',
                link: 'q14',
            },
        ],
    },
    q12: {
        id: 12,
        question:
            'The scammer provides no proof and insists on immediate payment. What do you do?',
        answers: [
            {
                text: 'Send the money without proof.',
                link: 'q15',
            },
            {
                text: 'Refuse to send money and cut off contact.',
                link: 'q16',
            },
        ],
    },
    q13: {
        id: 13,
        question:
            'You avoid sending money by insisting on proof. What is the outcome?',
        answers: [
            {
                text: 'You avoid further financial loss and realize it was a scam.',
                link: null,
            },
        ],
    },
    q14: {
        id: 14,
        question:
            'You send a smaller amount and the scammer returns asking for more. What do you do?',
        answers: [
            {
                text: 'Continue to send money.',
                link: 'q15',
            },
            {
                text: 'Recognize the manipulation and cut off contact.',
                link: 'q16',
            },
        ],
    },
    q15: {
        id: 15,
        question:
            'The scammer continues to ask for more money, and eventually, you realize you’ve been scammed. What happens?',
        answers: [
            {
                text: 'You lose significant amounts of money and the scammer disappears.',
                link: null,
            },
        ],
    },
    q16: {
        id: 16,
        question:
            'You recognize the manipulation and cut off contact. What happens next?',
        answers: [
            {
                text: 'You successfully avoid further losses, but you’ve already lost the initial amount.',
                link: null,
            },
        ],
    },
    q17: {
        id: 17,
        question: 'You grow suspicious and stop sending money. What happens?',
        answers: [
            {
                text: 'The scammer stops contacting you, and you avoid further loss.',
                link: null,
            },
        ],
    },
    q18: {
        id: 18,
        question:
            'You send more money to cover additional costs. What happens next?',
        answers: [
            {
                text: 'The scammer continues to ask for more money until you realize you’ve been scammed.',
                link: 'q15',
            },
        ],
    },
    q19: {
        id: 19,
        question: 'You refuse to send more money. What is the outcome?',
        answers: [
            {
                text: 'The scammer stops contacting you, but you’ve lost the initial amount sent.',
                link: null,
            },
        ],
    },
    q20: {
        id: 20,
        question: 'You suggest they ask others for help. What happens?',
        answers: [
            {
                text: 'The scammer insists you’re their only option and continues to pressure you.',
                link: 'q7',
            },
        ],
    },
}
