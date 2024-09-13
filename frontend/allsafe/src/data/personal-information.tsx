export const personalInformation = {
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

export const personalInformation2 = {
    q0: {
        id: 0,
        question:
            'You receive a friend request from someone you don’t know. Their profile looks interesting—they have a few photos, and it seems like they have mutual friends with you. You decide to accept the request and start chatting with them over Facebook Messenger. What do you do?',
        answers: [
            {
                text: 'Respond to the scammer and engage in casual conversation.',
                link: 'q1',
            },
            {
                text: 'Check out their profile more thoroughly (photos, posts, mutual friends).',
                link: 'q2',
            },
            {
                text: 'Ignore the request and block the scammer.',
                link: 'q3',
            },
        ],
    },
    q1: {
        id: 1,
        question:
            'Scammer (as Facebook Friend): Hey! Thanks for accepting my friend request. I saw we had a few mutual friends, and I thought you seemed like a cool person. How’s it going? What do you do next?',
        answers: [
            {
                text: 'Continue chatting and answering their questions.',
                link: 'q1a',
            },
            {
                text: 'Ask them more questions about their life and interests.',
                link: 'q1b',
            },
        ],
    },
    q1a: {
        id: 2,
        question:
            'Scammer (as Facebook Friend): So, what do you like to do for fun? I love traveling and photography—maybe we have something in common! What do you do next?',
        answers: [
            {
                text: 'Continue sharing more personal information (e.g., your neighborhood, favorite places).',
                link: 'q1a1',
            },
            {
                text: 'Grow cautious and start limiting the information you share.',
                link: 'q1a2',
            },
        ],
    },
    q1a1: {
        id: 3,
        question:
            'Scammer (as Facebook Friend): That sounds amazing! Hey, could I get your phone number or email? It’d be easier to chat off Facebook. Or maybe you could share your address so I can send you something! What do you do?',
        answers: [
            {
                text: 'Continue revealing personal information.',
                link: 'q1a1a',
            },
            {
                text: 'Grow cautious and start limiting the information you share.',
                link: 'q1a1b',
            },
        ],
    },
    q1a1a: {
        id: 4,
        question:
            'Outcome: You continue revealing personal information, and the scammer uses this to exploit your trust, potentially leading to identity theft or fraud. End Result: You unknowingly provide enough personal details to make yourself vulnerable to further scams or personal attacks.',
        answers: [],
    },
    q1a1b: {
        id: 5,
        question:
            'Scammer (as Facebook Friend): It’s been great chatting with you! By the way, what part of [your city] do you live in? Maybe we could meet up sometime! What do you do next?',
        answers: [
            {
                text: 'Continue giving vague answers and deflect the conversation.',
                link: 'q1a1b1',
            },
            {
                text: 'Confront the scammer about why they’re asking for so much personal information.',
                link: 'q1a1b2',
            },
            {
                text: 'Stop responding and block the scammer.',
                link: 'q1a1b3',
            },
        ],
    },
    q1a1b1: {
        id: 6,
        question:
            'Scammer (as Facebook Friend): That sounds nice! But what part of town exactly? I’ve been thinking about visiting [your city] soon, so I’d love to know where the best spots are. Do you live near [specific area]? What do you do next?',
        answers: [
            {
                text: 'Continue giving vague answers and deflect the conversation.',
                link: 'q1a1b1a',
            },
            {
                text: 'Confront the scammer about why they’re asking for so much personal information.',
                link: 'q1a1b1b',
            },
        ],
    },
    q1a1b1a: {
        id: 7,
        question:
            'Outcome: You manage to protect your personal information, but the scammer continues to try different angles to gather more specific details about your life.',
        answers: [],
    },
    q1a1b1b: {
        id: 8,
        question:
            'Outcome: The scammer might backpedal and try to make you feel guilty for questioning them, but you’ve made it clear you’re suspicious. End Result: You successfully protect your personal information and maintain control of the conversation, but the scammer may change tactics to manipulate you later.',
        answers: [],
    },
    q1a1b2: {
        id: 9,
        question:
            'Scammer (as Facebook Friend): I’m sorry! I didn’t mean to make you uncomfortable—I just thought we could get to know each other better. I didn’t think it was a big deal. What do you do next?',
        answers: [
            {
                text: 'Continue chatting while staying cautious about what you reveal.',
                link: 'q1a1b2a',
            },
            {
                text: 'Recognize the tactic and block the scammer before they try again.',
                link: 'q1a1b2b',
            },
        ],
    },
    q1a1b2a: {
        id: 10,
        question:
            'Outcome: You manage to keep the conversation on your terms but might still feel pressure as the scammer continues trying to push for more.',
        answers: [],
    },
    q1a1b2b: {
        id: 11,
        question:
            'Outcome: You take proactive action to protect your personal details and cut off contact before the scammer can try again.',
        answers: [],
    },
    q1a1b3: {
        id: 12,
        question:
            'Outcome: You take immediate action to protect yourself by cutting off communication and preventing the scammer from contacting you again.',
        answers: [],
    },
    q1b: {
        id: 13,
        question:
            'Scammer (as Facebook Friend): It’s been great getting to know you! You seem like such an interesting person. I’d love to learn more about you—what do you do for work? Do you have any fun plans coming up? What do you do next?',
        answers: [
            {
                text: 'The scammer gives vague or generic answers.',
                link: 'q1b1',
            },
            {
                text: 'Express suspicion about their vague responses and ask why they’re being evasive.',
                link: 'q1b2',
            },
        ],
    },
    q1b1: {
        id: 14,
        question:
            'Scammer (as Facebook Friend): Oh, you know, I do a bit of everything. I work in business, and I travel a lot for work, so it’s hard to explain. I like to keep things flexible. What do you do next?',
        answers: [
            {
                text: 'Ask for more specific details to clarify their answers.',
                link: 'q1b1a',
            },
            {
                text: 'Express suspicion about their vague responses and ask why they’re being evasive.',
                link: 'q1b1b',
            },
        ],
    },
    q1b1a: {
        id: 15,
        question:
            'Scammer (as Facebook Friend): I mostly freelance, so it’s hard to explain what I do exactly. I just take different jobs as they come, you know? What do you do next?',
        answers: [
            {
                text: 'Recognize the lack of detail as a red flag and stop engaging.',
                link: 'q1b1a1',
            },
        ],
    },
    q1b1a1: {
        id: 16,
        question:
            'Outcome: You become more cautious, realizing they’re deliberately avoiding detailed questions, which might indicate they are not who they claim to be.',
        answers: [],
    },
    q1b1b: {
        id: 17,
        question:
            'Scammer (as Facebook Friend): I didn’t mean to be vague—I’m just a private person. I didn’t think it was a big deal. Why are you questioning me? What do you do next?',
        answers: [
            {
                text: 'Recognize the evasiveness as a red flag and stop engaging.',
                link: 'q1b1b1',
            },
        ],
    },
    q1b1b1: {
        id: 18,
        question:
            'Outcome: You grow more suspicious of their evasiveness, realizing that they may not be trustworthy.',
        answers: [],
    },
    q1b2: {
        id: 19,
        question:
            'Scammer (as Facebook Friend): I’m sorry if I made you uncomfortable. I’m just trying to be friendly. I really do want to get to know you. What do you do next?',
        answers: [
            {
                text: 'Continue expressing suspicion and question their motives.',
                link: 'q1b2a',
            },
            {
                text: 'Decide to block the scammer to avoid further issues.',
                link: 'q1b2b',
            },
        ],
    },
    q1b2a: {
        id: 20,
        question:
            'Outcome: You make it clear that their behavior is not acceptable and continue questioning them to protect yourself.',
        answers: [],
    },
    q1b2b: {
        id: 21,
        question:
            'Outcome: You take proactive action to protect yourself and prevent the scammer from contacting you further.',
        answers: [],
    },
    q2: {
        id: 22,
        question:
            'You look at their profile more closely and find that they have a few mutual friends and seem to have an authentic profile. However, you still feel unsure. What do you do next?',
        answers: [
            {
                text: 'Send them a message asking more about themselves before deciding to accept the request.',
                link: 'q2a',
            },
            {
                text: 'Search for information online about the person to verify their authenticity.',
                link: 'q2b',
            },
            {
                text: 'Accept the request and wait to see if anything seems suspicious after further interaction.',
                link: 'q2c',
            },
        ],
    },
    q2a: {
        id: 23,
        question:
            'Scammer (as Facebook Friend): Thanks for reaching out! I just wanted to connect with you because we have some mutual interests. I saw that you like [shared interest] too. What do you do next?',
        answers: [
            {
                text: 'Engage in the conversation and share more about your interests.',
                link: 'q2a1',
            },
            {
                text: 'Ask more specific questions to verify their background and interests.',
                link: 'q2a2',
            },
        ],
    },
    q2a1: {
        id: 24,
        question:
            'Scammer (as Facebook Friend): That’s so interesting! I’d love to know more about your experiences with [shared interest]. Maybe we could chat more about it over a call or message. What do you do next?',
        answers: [
            {
                text: 'Continue the conversation and share your experiences.',
                link: 'q2a1a',
            },
            {
                text: 'Ask why they want to have a more personal conversation outside of Facebook.',
                link: 'q2a1b',
            },
        ],
    },
    q2a1a: {
        id: 25,
        question:
            'Scammer (as Facebook Friend): This has been great! I feel like we really hit it off. How about we exchange phone numbers or email addresses so we can stay in touch more easily? What do you do next?',
        answers: [
            {
                text: 'Share your contact information.',
                link: 'q2a1a1',
            },
            {
                text: 'Ask why they want to move the conversation to a different platform.',
                link: 'q2a1a2',
            },
        ],
    },
    q2a1a1: {
        id: 26,
        question:
            'Outcome: Sharing your contact information might lead to further attempts by the scammer to gather more personal details or pressure you into a scam.',
        answers: [],
    },
    q2a1a2: {
        id: 27,
        question:
            'Outcome: You question their motives, making the scammer back off or attempt to reassure you. You may still face pressure to share more personal information later.',
        answers: [],
    },
    q2a2: {
        id: 28,
        question:
            'Scammer (as Facebook Friend): I’m happy to answer any questions you have! I’m just here to make friends and connect with people who share my interests. What do you do next?',
        answers: [
            {
                text: 'Continue asking specific questions about their background and interests.',
                link: 'q2a2a',
            },
            {
                text: 'Decide to block them if they continue to be vague or avoid answering.',
                link: 'q2a2b',
            },
        ],
    },
    q2a2a: {
        id: 29,
        question:
            'Outcome: Asking more specific questions might reveal inconsistencies or cause the scammer to back off.',
        answers: [],
    },
    q2a2b: {
        id: 30,
        question:
            'Outcome: You take proactive steps to protect yourself by cutting off contact with someone who seems suspicious.',
        answers: [],
    },
    q2b: {
        id: 31,
        question:
            'You find some information that seems inconsistent or raises a red flag. What do you do next?',
        answers: [
            {
                text: 'Ignore the inconsistencies and proceed with caution.',
                link: 'q2b1',
            },
            {
                text: 'Conduct further research or reach out to mutual friends for verification.',
                link: 'q2b2',
            },
            {
                text: 'Block the user and report the profile if you suspect it’s a scam.',
                link: 'q2b3',
            },
        ],
    },
    q2b1: {
        id: 32,
        question:
            'Outcome: Ignoring red flags might lead to further complications or attempts by the scammer to exploit your trust.',
        answers: [],
    },
    q2b2: {
        id: 33,
        question:
            'Outcome: Conducting further research or asking for verification may help you determine if the profile is legitimate or a scam.',
        answers: [],
    },
    q2b3: {
        id: 34,
        question:
            'Outcome: Blocking and reporting the profile helps protect yourself and others from potential scams.',
        answers: [],
    },
    q3: {
        id: 35,
        question:
            'Outcome: By ignoring the request and blocking the scammer, you protect yourself from potential scams and prevent further attempts to exploit you.',
        answers: [],
    },
}
