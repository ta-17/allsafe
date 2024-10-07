export const personalInformation1 = {
    q0: {
        id: 0,
        question:
            'You receive a friend request from Andy, someone you don’t know. The profile looks interesting with some posts, and you seem to have mutual friends. What do you do next?',
        answers: [
            {
                text: 'Respond to the person and engage in casual conversation.',
                link: 'q1',
                feedback:
                    'Engaging with strangers can be risky. It’s best to verify their identity before proceeding.',
            },
            {
                text: 'Check out their profile more thoroughly (photos, posts, mutual friends).',
                link: 'q2',
                feedback:
                    'Doing more research on a profile is a smart move. Always verify before engaging.',
            },
            {
                text: 'Ignore the request and block the user.',
                link: 'q3',
                feedback:
                    'Blocking unknown users helps protect you from potential scams or unwanted interaction.',
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
                feedback:
                    'Continuing the conversation can lead to revealing personal information. Be cautious.',
            },
            {
                text: 'Ask Andy more questions about his life and interests.',
                link: 'q1b',
                feedback:
                    'Asking questions is a good way to gauge his authenticity, but remain careful with your responses.',
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
                feedback:
                    'Sharing personal details too soon can expose you to potential scams or privacy risks.',
            },
            {
                text: 'Grow cautious and start limiting the information you share.',
                link: 'q1a2',
                feedback:
                    'It’s a good idea to limit the personal information you share with someone you don’t fully trust.',
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
                feedback:
                    'Sharing personal contact information can make you vulnerable to scams. Always be cautious.',
            },
            {
                text: 'Grow cautious and start limiting the information you share.',
                link: 'q1a1b',
                feedback:
                    'It’s always smart to be skeptical when someone asks for sensitive information.',
            },
        ],
    },

    q1a1a: {
        id: 4,
        question:
            'Keep revealing personal information can lead to identity theft or fraud.\n\n**Feedback:** You should be more cautious when sharing personal information. Knowing more about scams can help you avoid similar risks in the future.',
        answers: [],
        end: true,
    },

    q1a1b: {
        id: 5,
        question:
            'Andy: It’s been great chatting with you! By the way, what part of Melbourne do you live in? Maybe we could meet up sometime! What do you do next?',
        answers: [
            {
                text: 'Continue giving vague answers and deflect the conversation.',
                link: 'q1a1b1',
                feedback:
                    'Giving vague responses helps you avoid revealing too much personal information.',
            },
            {
                text: 'Confront Andy about why he’s asking for so much personal information.',
                link: 'q1a1b2',
                feedback:
                    'Confronting someone about their motives can help you determine whether they are trustworthy.',
            },
            {
                text: 'Stop responding and block Andy.',
                link: 'q1a1b3',
                feedback:
                    'Blocking someone who asks for too much personal information is a safe choice.',
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
                feedback:
                    'Continuing to deflect the conversation helps maintain your privacy while engaging cautiously.',
            },
            {
                text: 'Confront Andy about why he’s asking for so much personal information.',
                link: 'q1a1b1b',
                feedback:
                    'Confronting him can help determine if his intentions are genuine or suspicious.',
            },
        ],
    },

    q1a1b1a: {
        id: 7,
        question:
            'You manage to protect your personal information and stay safe on social media. \n\n**Feedback:** Scammers may try to gain your details from different angles. Always be cautious when someone you do not know asks for personal information.',
        answers: [],
        end: true,
    },

    q1a1b1b: {
        id: 8,
        question:
            'Even though you may feel uncomfortable questioning why Andy tries to gain your detailed information, you manage to protect your personal information and stay safe on social media. \n\n**Feedback:** Keep being cautious and question anyone who asks for too much personal information.',
        answers: [],
        end: true,
    },

    q1a1b2: {
        id: 9,
        question:
            'Andy: I’m sorry! I didn’t mean to make you uncomfortable, I just thought we could get to know each other better. I didn’t think it was a big deal. What do you do next?',
        answers: [
            {
                text: 'Continue chatting while staying cautious about what you reveal.',
                link: 'q1a1b2a',
                feedback:
                    'Staying cautious is important. Keep limiting the amount of personal information you share.',
            },
            {
                text: 'Recognize the tactic and block Andy before he tries again.',
                link: 'q1a1b2b',
                feedback:
                    'Recognizing manipulative tactics is crucial. Blocking Andy will help protect your privacy.',
            },
        ],
    },

    q1a1b2a: {
        id: 10,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Continuing the conversation carefully while withholding personal information is a good practice. Keep being cautious online.',
        answers: [],
        end: true,
    },

    q1a1b2b: {
        id: 11,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Blocking Andy and recognizing potential manipulation is a strong defensive measure. You’ve successfully avoided a scam attempt.',
        answers: [],
        end: true,
    },

    q1a1b3: {
        id: 12,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Besides blocking the user, reporting suspicious accounts helps make social media safer for others too. Stay cautious when sharing personal information.',
        answers: [],
        end: true,
    },

    q1b: {
        id: 13,
        question:
            'Andy: It’s been great getting to know you! You seem like such an interesting person. I’d love to learn more about you. What do you do for work? Do you have any fun plans coming up? What do you do next?',
        answers: [
            {
                text: 'Continue giving vague or generic answers.',
                link: 'q1b1',
                feedback:
                    'Being vague helps protect your personal information, especially when you are unsure about the other person’s intentions.',
            },
            {
                text: 'Express suspicion about his vague responses and ask why he’s being evasive.',
                link: 'q1b2',
                feedback:
                    'Showing suspicion and questioning vague responses is a good way to identify potential red flags.',
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
                feedback:
                    'Asking for more specific details can help uncover inconsistencies or further clarify someone’s intentions.',
            },
            {
                text: 'Express suspicion about his vague responses and ask why he’s being evasive.',
                link: 'q1b1b',
                feedback:
                    'Expressing suspicion is a smart move if the conversation seems too vague or evasive.',
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
                feedback:
                    'Recognizing a lack of specific details is a strong indicator of something suspicious. Stopping the conversation now can help protect you.',
            },
        ],
    },

    q1b1a1: {
        id: 16,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Avoiding further interaction with vague or evasive individuals is the best way to prevent being scammed.',
        answers: [],
        end: true,
    },

    q1b1b: {
        id: 17,
        question:
            'Andy: I didn’t mean to be vague, I’m just a private person. I didn’t think it was a big deal. Why are you questioning me? What do you do next?',
        answers: [
            {
                text: 'Recognize the evasiveness as a red flag and stop engaging.',
                link: 'q1b1b1',
                feedback:
                    'Evasiveness is a strong indicator of suspicious behavior. Stopping the conversation now is the right choice.',
            },
        ],
    },

    q1b1b1: {
        id: 18,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Stopping the conversation with evasive individuals is a smart defensive measure. Stay cautious in future interactions as well.',
        answers: [],
        end: true,
    },

    q1b2: {
        id: 19,
        question:
            'Andy: I’m sorry if I made you uncomfortable. I’m just trying to be friendly. I really do want to get to know you. What do you do next?',
        answers: [
            {
                text: 'Continue expressing suspicion and question his motives.',
                link: 'q1b2a',
                feedback:
                    'It’s important to question someone’s motives if they make you feel uncomfortable, especially when interacting online.',
            },
            {
                text: 'Decide to block Andy to avoid further issues.',
                link: 'q1b2b',
                feedback:
                    'Blocking Andy is a good way to prevent further interactions that may expose your personal information.',
            },
        ],
    },

    q1b2a: {
        id: 20,
        question:
            'Even though you may feel uncomfortable questioning about his motives, you manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Keep being cautious when someone you do not know tries to ask for too much personal information. Always trust your instincts.',
        answers: [],
        end: true,
    },

    q1b2b: {
        id: 21,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Blocking suspicious accounts protects not just you, but also the online community. Always be cautious when engaging with strangers online.',
        answers: [],
        end: true,
    },

    q2: {
        id: 22,
        question:
            'You look at Andy’s profile more closely and find that he has a few mutual friends and seems to have an authentic profile. However, you still feel unsure. What do you do next?',
        answers: [
            {
                text: 'Send Andy a message asking more about himself before deciding to accept the request.',
                link: 'q2a',
                feedback:
                    'Asking for more information before engaging further is a smart way to verify someone’s authenticity.',
            },
            {
                text: 'Search for information online about the person to verify their authenticity.',
                link: 'q2b',
                feedback:
                    'Doing your research online can help confirm whether someone is who they claim to be.',
            },
            {
                text: 'Accept the request and wait to see if anything seems suspicious after further interaction.',
                link: 'q2c',
                feedback:
                    'It’s risky to accept requests without verification. Be cautious if anything feels suspicious later.',
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
                feedback:
                    'Engaging further can be risky if you don’t know the person well. Be cautious when sharing personal interests.',
            },
            {
                text: 'Ask more specific questions to verify his background and interests.',
                link: 'q2a2',
                feedback:
                    'Asking for more specific information helps you verify his claims and determine if he’s authentic.',
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
                feedback:
                    'Sharing too much personal experience with someone you don’t know well can be risky. Stay cautious.',
            },
            {
                text: 'Ask why he wants to have a more personal conversation outside of social media.',
                link: 'q2a1b',
                feedback:
                    'Asking why someone wants to take the conversation off social media is a good way to gauge their intentions.',
            },
        ],
    },

    q2a1a: {
        id: 25,
        question:
            'Andy: This has been great! I feel like we really hitit off. How about we exchange phone numbers or email addresses so we can stay in touch more easily? What do you do next?',
        answers: [
            {
                text: 'Share your contact information.',
                link: 'q2a1a1',
                feedback:
                    'Sharing your contact information without verifying the person can expose you to privacy risks. Be cautious.',
            },
            {
                text: 'Ask why he wants to move the conversation to a different platform.',
                link: 'q2a1a2',
                feedback:
                    'Questioning the need to move the conversation is a safe way to identify suspicious motives.',
            },
        ],
    },

    q2a1a1: {
        id: 26,
        question:
            'Keep revealing personal information can lead to identity theft or fraud.\n\n**Feedback:** You should be more cautious when sharing personal information with people you don’t know well. Scammers often use personal details to exploit their targets.',
        answers: [],
        end: true,
    },

    q2a1a2: {
        id: 27,
        question:
            'Even though you may feel uncomfortable questioning his motives, you manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Keep questioning motives when someone tries to move conversations off a platform. It can help protect your privacy.',
        answers: [],
        end: true,
    },

    q2a2: {
        id: 28,
        question:
            'Andy: I’m happy to answer any questions you have! I’m just here to make friends and connect with people who share my interests. What do you do next?',
        answers: [
            {
                text: 'Continue asking specific questions about their background and interests.',
                link: 'q2a2a',
                feedback:
                    'Asking more questions helps you verify if his claims are consistent.',
            },
            {
                text: 'Decide to block Andy if he continues to be vague or avoid answering.',
                link: 'q2a2b',
                feedback:
                    'If someone continues to be vague, it’s a good idea to block them to avoid further risks.',
            },
        ],
    },

    q2a2a: {
        id: 29,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Verifying personal information is an important way to avoid online scams. Continue to stay cautious in future conversations.',
        answers: [],
        end: true,
    },

    q2a2b: {
        id: 30,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Blocking users who avoid answering your questions is a smart way to avoid scams. Always prioritize your privacy and safety.',
        answers: [],
        end: true,
    },

    q2b: {
        id: 31,
        question:
            'You find some information that seems inconsistent or raises a red flag. What do you do next?',
        answers: [
            {
                text: 'Ignore the inconsistencies and proceed with caution.',
                link: 'q2b1',
                feedback:
                    'Proceeding despite inconsistencies can be risky. Always trust your instincts when things seem off.',
            },
            {
                text: 'Conduct further research or reach out to mutual friends for verification.',
                link: 'q2b2',
                feedback:
                    'Doing more research or asking for verification can help protect you from being scammed.',
            },
            {
                text: 'Block the user and report the profile if you suspect it’s a scam.',
                link: 'q2b3',
                feedback:
                    'Blocking and reporting suspected scammers helps protect not only you but others on the platform.',
            },
        ],
    },

    q2b1: {
        id: 32,
        question:
            'Do not ignore the inconsistencies and keep being cautious during the conversation.\n\n**Feedback:** Ignoring inconsistencies can make you vulnerable to scams. Always stay alert and question things that don’t seem right.',
        answers: [],
        end: true,
    },

    q2b2: {
        id: 33,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Conducting more research and verifying information is a good way to protect yourself online.',
        answers: [],
        end: true,
    },

    q2b3: {
        id: 34,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Blocking and reporting suspicious users helps make the internet safer for everyone. Always prioritize your safety online.',
        answers: [],
        end: true,
    },

    q3: {
        id: 35,
        question:
            'You manage to protect your personal information and stay safe on social media.\n\n**Feedback:** Besides blocking the user, reporting to the platform and the government can help make social media and the community safer. Always be cautious when sharing your personal information.',
        answers: [],
        end: true,
    },
}
