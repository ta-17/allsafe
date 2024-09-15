export const personalInformation = {
    q0: {
        id: 0,
        question:
            "The employer reaches out to you with a direct message, claiming they found your profile through online platforms. The job offer seems attractive, offering a high salary and flexibility that doesn't require special qualifications.",
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
                text: 'Ignore the message and block the employer.',
                link: 'q3',
            },
        ],
    },
    q1: {
        id: 1,
        question:
            'You express interest in the job offer and ask for more details. The employer responds enthusiastically but quickly shifts focus to the next steps involving personal information.',
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
            "You're cautious and ask the employer how they found your profile and why they believe you're a good fit.",
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
            "You decide to ignore the message and block the fake employer. You've heard about job scams before and don't want to take any chances. Furthermore, you also reported stating that this might be a scam account.\n\n**Conculsion:** By reporting the scam account, you help to make social media safer for everyone.",
        answers: [],
    },
    q4: {
        id: 4,
        question:
            "You agree to provide the information and proceed with the 'hiring process.' The employer continues to ask for more personal details, such as your Social Security number, credit card information, or passwords.",
        answers: [
            {
                text: "Provide the information, trusting the employer's promises of a high-paying job.",
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
            "You ask for a company website or references to verify the legitimacy of the job offer. The employer avoids providing this information, claiming that the company is new or that they can't share it for confidentiality reasons.",
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
            "You express suspicion and decide not to continue the conversation and block the fake employer from gaining your personal information. Furthermore, you also reported stating that this might be a scam account.\n\n**Conculsion:** By reporting the scam account, you help to make social media and the community safer for everyone.",
        answers: [],
    },
    q7: {
        id: 7,
        question:
            "You ask for more specific details about where they found your profile. The employer provides a vague answer, such as 'a job board' or 'a database of resumes.'",
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
            "You ask why they're reaching out if you haven't applied for jobs recently. The employer claims that they were impressed by your profile and think you'd be a great fit.",
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
            "You provide the information, trusting the employer's promises of a high-paying job. The employer disappears after receiving your personal information. \n\n**Conculsion:** You find out the person is a scammer who only wants personal information, and you decide to report this issue through social media and the government platform. By reporting the scam, you help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.",
        answers: [],
    },
    q10: {
        id: 10,
        question:
            "You decide not to continue the conversation and block the fake employer from gaining your personal information. Furthermore, you also reported stating that this might be a scam account.\n\n**Conculsion:** By reporting the scam account, you help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.",
        answers: [],
    },
}

export const personalInformation2 = {
    q0: {
        id: 0,
        question:
            'You receive a friend request from Andy, someone you don’t know. The profile looks interesting with some posts, and you seem to have mutual friends. What do you do next?',
        answers: [
            {
                text: 'Respond to the person and engage in casual conversation.',
                link: 'q1',
            },
            {
                text: 'Check out their profile more thoroughly (photos, posts, mutual friends).',
                link: 'q2',
            },
            {
                text: 'Ignore the request and block the user.',
                link: 'q3',
            },
        ],
    },
    q1: {
        id: 1,
        question:
            'Andy: Hey! Thanks for accepting my friend request. I saw we had a few mutual friends, and I thought you seemed like a cool person. How’s it going? What do you do next?',
        answers: [
            {
                text: 'Continue chatting with Andy and answering questions.',
                link: 'q1a',
            },
            {
                text: 'Ask Andy more questions about his life and interests.',
                link: 'q1b',
            },
        ],
    },
    q1a: {
        id: 2,
        question:
            'Andy: So, what do you like to do for fun? I love traveling and photography—maybe we have something in common! What do you do next?',
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
            'Andy: That sounds amazing! Hey, could I get your phone number or email? It’d be easier to chat off social media. Or maybe you could share your address so I can send you something! What do you do?',
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
            'Keep revealing personal information can lead to identity theft or fraud.\n\n**Conculsion:** You should be more cautious when sharing personal information with other people to prevent scams in the future. Moreover, leveraging the knowledge about scams can also help you to identify potential scams in the future.',
        answers: [],
    },
    q1a1b: {
        id: 5,
        question:
            'Andy: It’s been great chatting with you! By the way, what part of Melbourne do you live in? Maybe we could meet up sometime! What do you do next?',
        answers: [
            {
                text: 'Continue giving vague answers and deflect the conversation.',
                link: 'q1a1b1',
            },
            {
                text: 'Confront Andy about why he’s asking for so much personal information.',
                link: 'q1a1b2',
            },
            {
                text: 'Stop responding and block Andy.',
                link: 'q1a1b3',
            },
        ],
    },
    q1a1b1: {
        id: 6,
        question:
            'Andy: That sounds nice! But what part of town exactly? I’ve been thinking about visiting Melbourne soon, so I’d love to know where the best spots are. Do you live near the CBD? What do you do next?',
        answers: [
            {
                text: 'Continue giving vague answers and deflect the conversation.',
                link: 'q1a1b1a',
            },
            {
                text: 'Confront Andy about why he’s asking for so much personal information.',
                link: 'q1a1b1b',
            },
        ],
    },
    q1a1b1a: {
        id: 7,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** The scammers may try to gain your details from different angles in the future, so keep being cautious when someone you do not know is trying to ask for your personal information',
        answers: [],
    },
    q1a1b1b: {
        id: 8,
        question:
        'Even though you may feel uncomfortable questioning why Andy tries to gain your detailed information, you manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** The scammers may try to gain your details from different angles in the future, so keep being cautious when someone you do not know is trying to ask for your personal information',
        answers: [],
    },
    q1a1b2: {
        id: 9,
        question:
            'Andy: I’m sorry! I didn’t mean to make you uncomfortable, I just thought we could get to know each other better. I didn’t think it was a big deal. What do you do next?',
        answers: [
            {
                text: 'Continue chatting while staying cautious about what you reveal.',
                link: 'q1a1b2a',
            },
            {
                text: 'Recognize the tactic and block Andy before he try again.',
                link: 'q1a1b2b',
            },
        ],
    },
    q1a1b2a: {
        id: 10,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** The scammers may try to gain your details from different angles in the future, so keep being cautious when someone you do not know is trying to ask for your personal information',
        answers: [],
    },
    q1a1b2b: {
        id: 11,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides blocking the user, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
    q1a1b3: {
        id: 12,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides blocking the user, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
    q1b: {
        id: 13,
        question:
            'Andy: It’s been great getting to know you! You seem like such an interesting person. I’d love to learn more about you. What do you do for work? Do you have any fun plans coming up? What do you do next?',
        answers: [
            {
                text: 'Continue gives vague or generic answers.',
                link: 'q1b1',
            },
            {
                text: 'Express suspicion about his vague responses and ask why he’s being evasive.',
                link: 'q1b2',
            },
        ],
    },
    q1b1: {
        id: 14,
        question:
            'Andy: Oh, you know, I do a bit of everything. I work in business, and I travel a lot for work, so it’s hard to explain. I like to keep things flexible. What do you do next?',
        answers: [
            {
                text: 'Ask for more specific details to clarify his answers.',
                link: 'q1b1a',
            },
            {
                text: 'Express suspicion about his vague responses and ask why he’s being evasive.',
                link: 'q1b1b',
            },
        ],
    },
    q1b1a: {
        id: 15,
        question:
            'Andy: I mostly freelance, so it’s hard to explain what I do exactly. I just take different jobs as they come, you know? What do you do next?',
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
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides stopping the conversation, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
    q1b1b: {
        id: 17,
        question:
            'Andy: I didn’t mean to be vague, I’m just a private person. I didn’t think it was a big deal. Why are you questioning me? What do you do next?',
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
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides stopping the conversation, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
    q1b2: {
        id: 19,
        question:
            'Andy: I’m sorry if I made you uncomfortable. I’m just trying to be friendly. I really do want to get to know you. What do you do next?',
        answers: [
            {
                text: 'Continue expressing suspicion and question his motives.',
                link: 'q1b2a',
            },
            {
                text: 'Decide to block Andy to avoid further issues.',
                link: 'q1b2b',
            },
        ],
    },
    q1b2a: {
        id: 20,
        question:
            'Even though you may feel uncomfortable questioning about his motives, you manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** The scammers may try to gain your details from different angles in the future, so keep being cautious when someone you do not know is trying to ask for your personal information',
        answers: [],
    },
    q1b2b: {
        id: 21,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides blocking the user, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
    q2: {
        id: 22,
        question:
            'You look at Andy’s profile more closely and find that he has a few mutual friends and seem to have an authentic profile. However, you still feel unsure. What do you do next?',
        answers: [
            {
                text: 'Send Andy a message asking more about himself before deciding to accept the request.',
                link: 'q2a',
            },
            {
                text: 'Search for information online about the person to verify the authenticity.',
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
            'Andy: Thanks for reaching out! I just wanted to connect with you because we have some mutual interests. I saw that you like sports too. What do you do next?',
        answers: [
            {
                text: 'Engage in the conversation and share more about your interests.',
                link: 'q2a1',
            },
            {
                text: 'Ask more specific questions to verify his background and interests.',
                link: 'q2a2',
            },
        ],
    },
    q2a1: {
        id: 24,
        question:
            'Andy: That’s so interesting! I’d love to know more about your experiences with the competition. Maybe we could chat more about it over a call or message. What do you do next?',
        answers: [
            {
                text: 'Continue the conversation and share your experiences.',
                link: 'q2a1a',
            },
            {
                text: 'Ask why he wants to have a more personal conversation outside of social media.',
                link: 'q2a1b',
            },
        ],
    },
    q2a1a: {
        id: 25,
        question:
            'Andy: This has been great! I feel like we really hit it off. How about we exchange phone numbers or email addresses so we can stay in touch more easily? What do you do next?',
        answers: [
            {
                text: 'Share your contact information.',
                link: 'q2a1a1',
            },
            {
                text: 'Ask why he wants to move the conversation to a different platform.',
                link: 'q2a1a2',
            },
        ],
    },
    q2a1a1: {
        id: 26,
        question:
        'Keep revealing personal information can lead to identity theft or fraud.\n\n**Conculsion:** You should be more cautious when sharing personal information with other people to prevent scams in the future. Moreover, leveraging the knowledge about scams can also help you to identify potential scams in the future.',
        answers: [],
    },
    q2a1a2: {
        id: 27,
        question:
            'Even though you may feel uncomfortable questioning about his motives, you manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** The scammers may try to gain your details from different angles in the future, so keep being cautious when someone you do not know is trying to ask for your personal information',
        answers: [],
    },
    q2a2: {
        id: 28,
        question:
            'Andy: I’m happy to answer any questions you have! I’m just here to make friends and connect with people who share my interests. What do you do next?',
        answers: [
            {
                text: 'Continue asking specific questions about their background and interests.',
                link: 'q2a2a',
            },
            {
                text: 'Decide to block Andy if he continues to be vague or avoid answering.',
                link: 'q2a2b',
            },
        ],
    },
    q2a2a: {
        id: 29,
        question:
        'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Verifying their information can help you identify if the person is a scammer or not. If you find that this is a scam, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
    q2a2b: {
        id: 30,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides blocking the user, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
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
            'Do not ignore the inconsistencies and keep being catious during the conversation. \n\n**Conclusion:** The scammers may try to gain your details from different angles in the future, so keep being cautious when someone you do not know is trying to ask for your personal information',
        answers: [],
    },
    q2b2: {
        id: 33,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** The scammers may try to gain your details from different angles in the future, so keep being cautious when someone you do not know is trying to ask for your personal information',
        answers: [],
    },
    q2b3: {
        id: 34,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides blocking the user, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
    q3: {
        id: 35,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Conclusion:** Besides blocking the user, reporting to the platform and the government can help to make social media and the community safer. Always be cautious when sharing your personal information, especially if the person is someone you have never met before.',
        answers: [],
    },
}
