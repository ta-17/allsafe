export const jobAndEmployment = {
    q0: {
        id: 0,
        question:
            'The Recruiter reaches out to the player with a direct message, claiming they found the player’s profile through a job posting platform, social media, or online résumé. The Recruiter’s offer seems attractive, offering a high salary for remote work or a part-time job that doesn’t require special qualifications.\n\nRecruiter:\nHi, I came across your profile, and I think you’d be a perfect fit for a remote position at our company. We offer flexible hours and a competitive salary of $5,000 a month working from home. Would you be interested?',
        answers: [
            {
                text: 'Show interest and ask for more details about the job.',
                link: 'q1',
            },
            {
                text: 'Ask how they found your profile and why they think you’re a good fit.',
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
            'You express interest in the job offer and ask for more details. The scammer responds enthusiastically but quickly shifts focus to the next steps involving personal information.\n\nPlayer:\nThis sounds great! Can you tell me more about the position and the company?\n\nRecruiter:\nIt’s a remote administrative role. We’ll need some basic details like your full name, address, and bank account information for payroll.',
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
            'You’re cautious and ask the scammer how they found your profile and why they believe you’re a good fit.\n\nPlayer:\nHow did you find my profile? I haven’t been applying for jobs recently.\n\nRecruiter:\nWe found your profile through a job board we work with. Your experience seemed like a great fit for what we need.',
        answers: [
            {
                text: 'Ask for more specific details about where they found your profile.',
                link: 'q7',
            },
            {
                text: 'Ask why they’re reaching out if you haven’t applied for jobs recently.',
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
            'You recognize the unsolicited job offer as suspicious from the beginning and decide to block the scammer.',
        answers: [
            {
                text: 'You successfully protect yourself from potential harm.',
                link: 'q6',
            },
        ],
    },
    q4: {
        id: 4,
        question:
            "You provide personal information, thinking it’s part of the hiring process. The scammer now asks for a small upfront payment to 'finalize' your onboarding.\n\nRecruiter:\nGreat! There’s a small training fee of $100 to cover onboarding materials. Once you pay, we’ll get you started!",
        answers: [
            {
                text: "Realize it's a scam and stop communication.",
                link: 'q6',

                # more options needed
            },
        ],
    },
    q5: {
        id: 5,
        question:
            'You ask for verification. The scammer provides a link to a fake website or references that seem suspicious.\n\nRecruiter:\nHere’s the link to our company website. We’re also on LinkedIn.\n\nThe website seems suspicious and raises doubts.',
        answers: [
            {
                text: 'Decide to investigate further or cut off communication.', #2 options at once
                link: 'q6',
            },
        ],
    },
    q6: {
        id: 6,
        question:
            'You’ve successfully recognized the scam and protected yourself from potential identity theft or financial loss.',
        answers: [
            {
                text: 'End the conversation.',
                link: 'q6',
            },
        ],
    },
    q7: {
        id: 7,
        question:
            'You press the scammer for more details about where they found your profile.\n\nRecruiter:\nI think it was from a general résumé database—we work with a lot of them, so I’m not sure which one exactly.',
        answers: [
            {
                text: 'Realize their explanation is unreliable and stop responding.',
                link: 'q6',
            },
        ],
    },
    q8: {
        id: 8,
        question:
            'You ask why they’re reaching out if you haven’t applied for jobs recently.\n\nRecruiter:\nWe reach out to potential candidates based on their skills, even if they haven’t applied.',
        answers: [
            {
                text: 'Recognize their vague explanation and decide to stop responding.',
                link: 'q6',
            },
        ],
    },
}
