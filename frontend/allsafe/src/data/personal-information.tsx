export const personalInformation2 = {
    q0: {
        id: 0,
        question:
            "You receive a direct message from someone named Jamie Lee, who appears to be a fellow student at your university:\n\nJamie:\nHey! I think we met at the campus event last week. Check out these photos, I think you're in some of them!\n\n[Link provided]\n\nWhat do you do next?",
        answers: [
            {
                text: 'Click on the link to view the photos.',
                link: 'q1',
            },
            {
                text: "Ask Jamie how you met, since you don't recall.",
                link: 'q2',
            },
            {
                text: 'Ignore the message.',
                link: 'q3',
            },
            {
                text: "Report Jamie's account as suspicious.",
                link: 'q4',
            },
        ],
    },

    q1: {
        id: 1,
        question:
            "You click on the link, and it takes you to a login page that looks identical to your social media platform's login. It asks you to sign in again to view the content.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Enter your login credentials to sign in.',
                link: 'q5',
            },
            {
                text: 'Realize something is off and close the page.',
                link: 'q6',
            },
            {
                text: 'Check the URL to see if it’s the official website.',
                link: 'q7',
            },
        ],
    },

    q2: {
        id: 2,
        question:
            "You ask Jamie how you met because you don't recall meeting them. Jamie replies:\n\nJamie:\nWe met at the student orientation mixer! Anyway, you can see the photos here.\n\n[Link provided]\n\nWhat do you do next?",
        answers: [
            {
                text: 'Trust Jamie and click on the link.',
                link: 'q1', // Reusing q1
            },
            {
                text: 'Remain cautious and decide not to click the link.',
                link: 'q6',
            },
            {
                text: "Report Jamie's account as suspicious.",
                link: 'q4', // Reusing q4
            },
        ],
    },

    q3: {
        id: 3,
        question:
            'You ignore the message from Jamie. However, you wonder if you should adjust your privacy settings to prevent unsolicited messages from strangers.\n\nDo you want to adjust your messaging settings?',
        answers: [
            {
                text: 'Yes, adjust messaging settings for more privacy.',
                link: 'q8',
            },
            {
                text: 'No, leave settings as they are.',
                link: 'q9',
            },
        ],
    },

    q4: {
        id: 4,
        question:
            "You decide to report Jamie's account as suspicious to the platform administrators.\n\nOn which platform do you want to report Jamie's account?",
        answers: [
            {
                text: 'Facebook',
                link: 'q4Facebook',
            },
            {
                text: 'Instagram',
                link: 'q4Instagram',
            },
            {
                text: 'TikTok',
                link: 'q4TikTok',
            },
        ],
    },

    q4Facebook: {
        id: 4,
        question:
            "You report Jamie's account on Facebook.\n\nGo to the profile that you want to report by clicking its name in your Feed or searching for it.\n\nClick **more ...** to the right.\n\nClick **Find support or report**.\n\nTo give feedback, click the option that best describes how this profile goes against our Community Standards.\n\n   **Note:** Depending on your feedback, you may then be able to submit a report to Meta. For some types of content, we don't ask you to submit a report, but we use your feedback to help our systems learn.\n\nClick **Done**.\n\n**Conclusion:** You've reported the suspicious account. The platform will review your report.\n\n**Feedback:** Good job taking action to protect yourself and others from potential scams!",
        answers: [],
        end: true,
    },

    q4Instagram: {
        id: 4,
        question:
            "You report Jamie's account on Instagram.\n\nClick their username from their Feed or story post, or click **explore** and search their username to go to their profile.\n\nClick **more** actions next to their username.\n\nSelect **Report**, then select the type of account you want to report and follow the on-screen instructions.\n\n**Conclusion:** You've reported the suspicious account. The platform will review your report.\n\n**Feedback:** Good job taking action to protect yourself and others from potential scams!",
        answers: [],
        end: true,
    },

    q4TikTok: {
        id: 4,
        question:
            "You report Jamie's account on TikTok.\n\nIn the TikTok app, go to the person's profile.\n\nTap the **Share** button at the top.\n\nTap **Report**.\n\nTap **Report account**.\n\nSelect a reason for the report and tap **Submit**.\n\n**Conclusion:** You've reported the suspicious account. The platform will review your report.\n\n**Feedback:** Good job taking action to protect yourself and others from potential scams!",
        answers: [],
        end: true,
    },

    q5: {
        id: 5,
        question:
            "You enter your login credentials to sign in. The page refreshes, but nothing happens. Later, you find that you're unable to access your account, and friends report receiving strange messages from your profile. You realize your account has been compromised.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Attempt to reset your password immediately.',
                link: 'q10',
            },
            {
                text: 'Contact the platform’s support for help.',
                link: 'q11',
            },
            {
                text: 'Do nothing and hope the issue resolves itself.',
                link: 'q12',
            },
        ],
    },

    q6: {
        id: 6,
        question:
            'You realize something is off and decide not to click the link or enter any information. You suspect this might be a phishing attempt.\n\nWhat do you do next?',
        answers: [
            {
                text: "Report Jamie's account as suspicious.",
                link: 'q4',
            },
            {
                text: 'Inform your friends about the potential scam.',
                link: 'q13',
            },
            {
                text: 'Enable two-factor authentication (2FA) on your account for added security.',
                link: 'q14',
            },
        ],
    },

    q7: {
        id: 7,
        question:
            "You check the URL and notice that it doesn't match the official website—it has slight misspellings or extra characters.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Avoid entering any information and close the page.',
                link: 'q6',
            },
            {
                text: 'Proceed anyway, thinking it might be safe.',
                link: 'q5',
            },
        ],
    },

    q8: {
        id: 8,
        question:
            'You adjust your messaging settings to limit who can send you direct messages.\n\nOn which platform do you want to adjust your messaging settings?',
        answers: [
            {
                text: 'Facebook',
                link: 'q8Facebook',
            },
            {
                text: 'Instagram',
                link: 'q8Instagram',
            },
            {
                text: 'TikTok',
                link: 'q8TikTok',
            },
        ],
    },

    q8Facebook: {
        id: 8,
        question:
            "You adjust your messaging settings on Facebook.\n\nOpen your Messenger app.\n\nClick your profile picture in the bottom left, then click **Preferences**.\n\nTap **Privacy & safety**.\n\nTap **Message delivery**.\n\nTap on the group you want to control messages for.\n\nChoose to deliver their messages to your Chats list or to your message requests folder. Or tap **Don't receive requests** to stop receiving their messages entirely.\n\nNew group chat message requests won't be delivered to your Chats list.\n\n**Conclusion:** By adjusting your settings, you've enhanced your privacy and reduced the risk of receiving unsolicited messages.\n\n**Feedback:** Great job taking control of your online experience!",
        answers: [],
        end: true,
    },

    q8Instagram: {
        id: 8,
        question:
            "You adjust your messaging settings on Instagram.\n\nClick **☰ More** in the bottom left, then click **Settings**.\n\nBelow **How others can interact with you**, click **Messages and story replies**.\n\nClick **Message controls**.\n\nChoose whether message requests from people on Instagram go to your Message Requests folder or whether to receive them at all.\n\nNote that you’ll need to accept message requests in your Message Requests folder before they appear in your Chats list. Messages from people you follow on Instagram will appear in your Chats list.\n\n**Conclusion:** By adjusting your settings, you've enhanced your privacy and reduced the risk of receiving unsolicited messages.\n\n**Feedback:** Great job taking control of your online experience!",
        answers: [],
        end: true,
    },

    q8TikTok: {
        id: 8,
        question:
            "You adjust your messaging settings on TikTok.\n\nIn the TikTok app, tap Profile at the bottom.\n\nTap the **Menu ☰** button at the top, then select **Settings and privacy**.\n\nTap **Privacy**\n\n.Tap **Direct messages**, then choose from the list of options who can send you messages:\n\n   ༚  **Everyone:** Anyone can send you a direct message. Messages from mutual friends and people you follow appear in your inbox.\n\n   ༚  **Suggested friends:** Matched friends, including synced Facebook friends and phone contacts, and followers who you follow back, can send you a direct message.\n\n   ༚  **Friends:** Any followers that you follow back can send you a direct message.\n\n   ༚  **No one:** You can't receive direct messages from anyone. Keep in mind that if you choose this setting, you can't receive direct messages. You can still access your message history in your inbox, but you can't receive new direct messages in those chats.\n\nKeep in mind that some of these options are not available to everyone.\n\n**Conclusion:** By adjusting your settings, you've enhanced your privacy and reduced the risk of receiving unsolicited messages.\n\n**Feedback:** Great job taking control of your online experience!",
        answers: [],
        end: true,
    },

    q9: {
        id: 9,
        question:
            'You decide not to adjust your messaging settings. Be aware that you may continue to receive unsolicited messages from strangers.\n\n**Conclusion:** Your account remains open to messages from anyone.\n\n**Feedback:** Consider adjusting your settings to enhance your privacy.',
        answers: [],
    },

    q10: {
        id: 10,
        question:
            "You attempt to reset your password immediately. You're able to regain access to your account. To prevent future incidents, you consider enabling two-factor authentication (2FA).\n\nOn which platform do you want to enable 2FA?",
        answers: [
            {
                text: 'Facebook',
                link: 'q14Facebook',
            },
            {
                text: 'Instagram',
                link: 'q14Instagram',
            },
        ],
    },

    q11: {
        id: 11,
        question:
            'You contact the platform’s support team for help. They guide you through the process of securing your account. They also recommend enabling two-factor authentication (2FA).\n\nOn which platform do you want to enable 2FA?',
        answers: [
            {
                text: 'Facebook',
                link: 'q14Facebook',
            },
            {
                text: 'Instagram',
                link: 'q14Instagram',
            },
        ],
    },

    q12: {
        id: 12,
        question:
            'You do nothing, hoping the issue resolves itself. Unfortunately, the scammer uses your account to send phishing messages to your contacts, and your personal information may be compromised further.\n\n**Conclusion:** Ignoring the issue has led to more problems.\n\n**Feedback:** Always take immediate action if you suspect your account has been compromised.',
        answers: [],
    },

    q13: {
        id: 13,
        question:
            "You inform your friends about the potential scam, warning them not to click on suspicious links.\n\n**Conclusion:** You've helped others avoid falling victim to phishing attempts.\n\n**Feedback:** Excellent job looking out for your community!",
        answers: [],
    },

    q14Facebook: {
        id: 14,
        question:
            "You enable two-factor authentication (2FA) on Facebook.\n\nClick on your profile picture in the top right, then click **Settings and privacy**.\n\nClick **Settings**.\n\nClick **Accounts Centre**, then click **Password and security**.\n\nClick **Two-factor authentication**, then click on the account that you'd like to update.\n\nChoose the security method that you want to add and follow the on-screen instructions.\n\n**Conclusion:** By enabling 2FA, you've added an extra layer of security to your account.\n\n**Feedback:** Excellent decision to protect your account!",
        answers: [],
        end: true,
    },

    q14Instagram: {
        id: 14,
        question:
            "You enable two-factor authentication (2FA) on Instagram.\n\nClick **More** in the bottom left, then click **Settings**.\n\nClick **See more in Accounts Center**, then click **Password and security**.\n\nClick **Two-factor authentication**, then select an account.\n\nChoose the security method you want to add and follow the on-screen instructions.\n\n**Conclusion:** By enabling 2FA, you've added an extra layer of security to your account.\n\n**Feedback:** Excellent decision to protect your account!",
        answers: [],
        end: true,
    },

    q15: {
        id: 15,
        question:
            'You decide not to enable 2FA at this time. Be aware that your account may be more vulnerable to unauthorized access.\n\n**Conclusion:** Without 2FA, your account relies solely on your password for security.\n\n**Feedback:** Consider enabling 2FA to enhance your account protection.',
        answers: [],
    },
}

export const personalInformation1 = {
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
