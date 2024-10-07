export const jobAndEmployment = {
    q0: {
        id: 0,
        question:
            'You receive a message from someone named Alex Smith:\n\nAlex:\nHi! I came across your profile and thought you might be a great fit for a remote data entry position at our company. The job pays $30/hour, and you can set your own hours. Are you interested?\n\nWhat do you do next?',
        answers: [
            {
                text: 'Express interest and ask for more details about the job.',
                link: 'q1',
                feedback:
                    'You’ve expressed interest, but make sure to evaluate the offer carefully, especially when sensitive information is requested.',
            },
            {
                text: 'Politely decline the offer.',
                link: 'q2',
                feedback:
                    'You declined the offer, but Alex may still reach out to convince you.',
            },
            {
                text: 'Ignore the message.',
                link: 'q3',
                feedback:
                    'Ignoring messages like this can help avoid potential scams, but consider adjusting your privacy settings to prevent future unsolicited messages.',
            },
            {
                text: 'Check Alex’s profile for legitimacy.',
                link: 'q4',
                feedback:
                    'Checking profiles for legitimacy is a great first step to avoid potential scams.',
            },
        ],
    },

    q1: {
        id: 1,
        question:
            "You express interest and ask for more details about the job. Alex replies:\n\nAlex:\nFantastic! We need someone to help with data entry and handling emails. To get you started, we'll need your full name, address, phone number, and a copy of your ID for verification and payroll setup.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Provide the requested personal information.',
                link: 'q5',
                feedback:
                    'Sharing personal information like this can expose you to identity theft and fraud. Be very cautious.',
            },
            {
                text: 'Ask why such sensitive information is needed.',
                link: 'q6',
                feedback:
                    'It’s smart to ask for more details when you feel uncomfortable. Understanding why sensitive information is required is essential.',
            },
            {
                text: 'Decide not to proceed and consider reporting Alex.',
                link: 'q7',
                feedback:
                    'If you suspect something is wrong, stopping communication and reporting the account can help protect others.',
            },
        ],
    },

    q2: {
        id: 2,
        question:
            "You politely decline the offer. Alex responds:\n\nAlex:\nAre you sure? It's a flexible job with great pay. Let me know if you change your mind!\n\nWhat do you do next?",
        answers: [
            {
                text: 'Change your mind and express interest.',
                link: 'q1',
                feedback:
                    'You’ve reconsidered the offer. Proceed carefully and ensure the offer is legitimate.',
            },
            {
                text: 'Ignore the message.',
                link: 'q3',
                feedback:
                    'Ignoring unsolicited messages like these can protect you from potential scams.',
            },
            {
                text: 'Consider reporting Alex for unsolicited messages.',
                link: 'q7',
                feedback:
                    'Reporting suspicious activity can help protect others from falling victim to similar scams.',
            },
        ],
    },

    q3: {
        id: 3,
        question:
            'You ignore the message from Alex. However, you wonder if you should adjust your privacy settings to prevent unsolicited messages in the future.\n\nDo you want to adjust your messaging settings?',
        answers: [
            {
                text: 'Yes, adjust messaging settings for more privacy.',
                link: 'q8',
                feedback:
                    'Adjusting your privacy settings can reduce unsolicited messages and enhance your online safety.',
            },
            {
                text: 'No, leave settings as they are.',
                link: 'q9',
                feedback:
                    'Leaving your settings unchanged means you may continue receiving unsolicited messages.',
            },
        ],
    },

    q4: {
        id: 4,
        question:
            "You check Alex's profile and notice it was created recently, has few friends, and minimal activity. This raises suspicion.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Proceed to express interest in the job and ask for more details.',
                link: 'q1',
                feedback:
                    'Even though Alex’s profile looks suspicious, you’ve decided to proceed. Be cautious.',
            },
            {
                text: 'Decide not to respond and consider reporting Alex.',
                link: 'q7',
                feedback:
                    'It’s wise to avoid interaction with accounts that seem suspicious and report them if necessary.',
            },
        ],
    },

    q5: {
        id: 5,
        question:
            'You provide the requested personal information to Alex. Shortly after, you notice unusual activity on your bank account and suspect identity theft.\n\nWhat do you do next?',
        answers: [
            {
                text: 'Report the incident to the authorities and your bank.',
                link: 'q10',
                feedback:
                    'Reporting identity theft to the authorities and your bank is the correct first step to mitigate damage.',
            },
            {
                text: 'Contact Alex to confront them.',
                link: 'q11',
                feedback:
                    'Confronting scammers is not advised. It’s best to report the issue to the authorities.',
            },
            {
                text: 'Do nothing and hope the issue resolves itself.',
                link: 'q12',
                feedback:
                    'Ignoring the issue can cause more damage. Always act quickly to protect yourself.',
            },
        ],
    },

    q6: {
        id: 6,
        question:
            "You ask Alex why they need such sensitive information. Alex replies:\n\nAlex:\nWe need to verify your identity and set up direct deposit for your paychecks. It's standard HR procedure. Rest assured, your information will be secure.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Trust Alex and provide the information.',
                link: 'q5',
                feedback:
                    'Providing personal information to an unverified source is risky and can lead to fraud.',
            },
            {
                text: 'Express discomfort and decline to provide the information.',
                link: 'q13',
                feedback:
                    'Trust your instincts. If you feel uncomfortable, it’s always better to decline.',
            },
            {
                text: 'Decide to stop communication and consider reporting Alex.',
                link: 'q7',
                feedback:
                    'If you feel something is wrong, stopping communication and reporting the account can help protect others.',
            },
        ],
    },

    q7: {
        id: 7,
        question:
            "You decide to stop communication with Alex and consider reporting this account. Reporting can help prevent others from being targeted.\n\nDo you want to report Alex's account?",
        answers: [
            {
                text: 'Yes, report the account.',
                link: 'q14',
                feedback:
                    'Reporting suspicious accounts helps prevent others from becoming victims.',
            },
            {
                text: 'No, just block the account.',
                link: 'q15',
                feedback:
                    'Blocking the account prevents further contact, but reporting helps protect the wider community.',
            },
        ],
    },

    q8: {
        id: 8,
        question:
            'You adjust your messaging settings to limit who can contact you.\n\nOn which platform do you want to learn how to adjust these settings?',
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
            "You adjust your messaging settings to limit who can contact you on Facebook.\n\nOpen your Messenger app.\n\nClick your profile picture in the bottom left, then click **Preferences**.\n\nTap **Privacy & safety**.\n\nTap **Message delivery**.\n\nTap on the group you want to control messages for.\n\nChoose to deliver their messages to your Chats list or to your message requests folder. Or tap **Don't receive requests** to stop receiving their messages entirely.\n\nNew group chat message requests won't be delivered to your Chats list.\n\n**Conclusion:** By adjusting your settings, you enhance your privacy and reduce unwanted messages.\n\n**Feedback:** Great job taking proactive steps to protect your privacy!",
        answers: [],
        end: true,
    },

    q8Instagram: {
        id: 8,
        question:
            'You adjust your messaging settings to limit who can contact you on Instagram.\n\nClick **☰ More** in the bottom left, then click **Settings**.\n\nBelow **How others can interact with you**, click **Messages and story replies**.\n\nClick **Message controls**.\n\nChoose whether message requests from people on Instagram go to your Message Requests folder or whether to receive them at all.\n\nNote that you’ll need to accept message requests in your Message Requests folder before they appear in your Chats list. Messages from people you follow on Instagram will appear in your Chats list.\n\n**Conclusion:** By adjusting your settings, you enhance your privacy and reduce unwanted messages.\n\n**Feedback:** Great job taking proactive steps to protect your privacy!',
        answers: [],
        end: true,
    },

    q8TikTok: {
        id: 8,
        question:
            'You adjust your messaging settings to limit who can contact you on TikTok.\n\nIn the TikTok app, tap Profile at the bottom.\n\nTap the Menu ☰ button at the top, then select Settings and privacy.\n\nTap Privacy\n\n.Tap Direct messages, then choose from the list of options who can send you messages:\n\n   ༚  Everyone: Anyone can send you a direct message. Messages from mutual friends and people you follow appear in your inbox.\n\n   ༚  Suggested friends: Matched friends, including synced Facebook friends and phone contacts, and followers who you follow back, can send you a direct message.\n\n   ༚  Friends: Any followers that you follow back can send you a direct message.\n\n   ༚  No one: You can’t receive direct messages from anyone. Keep in mind that if you choose this setting, you can’t receive direct messages. You can still access your message history in your inbox, but you can’t receive new direct messages in those chats.\n\nKeep in mind that some of these options are not available to everyone.\n\nConclusion: By adjusting your settings, you enhance your privacy and reduce unwanted messages.\n\nFeedback: Great job taking proactive steps to protect your privacy!',
        answers: [],
        end: true,
    },

    q9: {
        id: 9,
        question:
            'You decide not to adjust your messaging settings. Be aware that this might lead to more unsolicited messages in the future.\n\n**Conclusion:** Without changing your settings, you may continue receiving unwanted messages.\n\n**Feedback:** Consider updating your privacy settings to enhance your online safety.',
        answers: [],
    },

    q10: {
        id: 10,
        question:
            'You report the incident to the authorities and your bank. They advise you to monitor your accounts and may initiate an investigation.\n\n**Conclusion:** Reporting identity theft promptly can help mitigate damage.\n\n**Feedback:** You took the right steps to address the issue. Remember to be cautious with personal information online.',
        answers: [],
    },

    q11: {
        id: 11,
        question:
            'You try to contact Alex, but the account has been deleted or has blocked you. Unfortunately, you cannot reach them.\n\n**Conclusion:** Scammers often disappear after obtaining what they want.\n\n**Feedback:** In the future, avoid sharing personal information with unknown individuals online.',
        answers: [],
    },

    q12: {
        id: 12,
        question:
            'You decide to do nothing, hoping the issue resolves itself. Unfortunately, the unauthorized activity continues, potentially causing more harm.\n\n**Conclusion:** Ignoring identity theft can lead to serious consequences.\n\n**Feedback:** Always take immediate action if you suspect your personal information has been compromised.',
        answers: [],
    },

    q13: {
        id: 13,
        question:
            "You express discomfort and decline to provide the information. Alex responds:\n\nAlex:\nIf you're not comfortable with our procedures, maybe this job isn't for you. Good luck elsewhere.\n\nFeeling uneasy, you consider your next steps.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Decide to end communication and report Alex.',
                link: 'q7',
                feedback:
                    'It’s wise to stop communication when you feel uncomfortable. Reporting Alex can prevent others from falling victim.',
            },
            {
                text: 'Reconsider and decide to provide the information.',
                link: 'q5',
                feedback:
                    'Providing sensitive information under pressure is risky. Always think carefully before doing so.',
            },
        ],
    },

    q14: {
        id: 14,
        question:
            "You choose to report Alex's account.\n\nOn which platform do you want to learn how to report this account?",
        answers: [
            {
                text: 'Facebook',
                link: 'q14Facebook',
            },
            {
                text: 'Instagram',
                link: 'q14Instagram',
            },
            {
                text: 'TikTok',
                link: 'q14TikTok',
            },
        ],
    },

    q14Facebook: {
        id: 14,
        question:
            "You choose to report Alex's account on Facebook.\n\nGo to the profile that you want to report by clicking its name in your Feed or searching for it.\n\nClick **more ...** to the right.\n\nClick **Find support or report**.\n\nTo give feedback, click the option that best describes how this profile goes against our Community Standards.\n\n   **Note:** Depending on your feedback, you may then be able to submit a report to Meta. For some types of content, we don't ask you to submit a report, but we use your feedback to help our systems learn.\n\nClick **Done**.\n\nFacebook acknowledges your report and will review the account.\n\n**Conclusion:** By reporting, you've helped protect others from potential scams.\n\n**Feedback:** Excellent decision! You've acted responsibly and contributed to a safer community.",
        answers: [],
        end: true,
    },

    q14Instagram: {
        id: 14,
        question:
            "You choose to report Alex's account on Instagram.\n\nClick their username from their Feed or story post, or click **explore** and search their username to go to their profile.\n\nClick **more** actions next to their username.\n\nSelect **Report**, then select the type of account you want to report and follow the on-screen instructions.\n\nInstagram acknowledges your report and will review the account.\n\n**Conclusion:** By reporting, you've helped protect others from potential scams.\n\n**Feedback:** Excellent decision! You've acted responsibly and contributed to a safer community.",
        answers: [],
        end: true,
    },

    q14TikTok: {
        id: 14,
        question:
            "You choose to report Alex's account on TikTok.\n\nIn the TikTok app, go to the person's profile.\n\nTap the **Share** button at the top.\n\nTap **Report**.\n\nTap **Report account**.\n\nSelect a reason for the report and tap **Submit**.\n\nTikTok acknowledges your report and will review the account.\n\n**Conclusion:** By reporting, you've helped protect others from potential scams.\n\n**Feedback:** Excellent decision! You've acted responsibly and contributed to a safer community.",
        answers: [],
        end: true,
    },

    q15: {
        id: 15,
        question:
            'You decide not to report Alex but block the account.\n\nOn which platform do you want to learn how to block someone?',
        answers: [
            {
                text: 'Facebook',
                link: 'q15Facebook',
            },
            {
                text: 'Instagram',
                link: 'q15Instagram',
            },
            {
                text: 'TikTok',
                link: 'q15TikTok',
            },
        ],
    },

    q15Facebook: {
        id: 15,
        question:
            "You block Alex on Facebook.\n\nClick your profile picture in the top right of Facebook.\n\nSelect **Settings and privacy**, then click **Settings**.\n\nIn the left column, under **Audience and visibility**, click **Blocking**\n\nIn the **Block users** section, click **Edit**\n\nClick **Add to blocked list**.\n\nType the name of the profile that you want to block.\n\nClick **Block** next to their name.\n\nClick **Confirm**.\n\nWhile you've stopped Alex from contacting you, they may continue to target others.\n\n**Conclusion:** Blocking protects you, but reporting helps protect others too.\n\n**Feedback:** Consider reporting in the future to help keep the community safe.",
        answers: [],
        end: true,
    },

    q15Instagram: {
        id: 15,
        question:
            "You block Alex on Instagram.\n\nClick **send** or **messenger** on the left.\n\nClick the chat with the person you want to block/unblock, then click **more information** at the top.\n\nClick **Block/Unblock**, then click again to **confirm**.\n\nWhile you've stopped Alex from contacting you, they may continue to target others.\n\n**Conclusion:** Blocking protects you, but reporting helps protect others too.\n\n**Feedback:** Consider reporting in the future to help keep the community safe.",
        answers: [],
        end: true,
    },

    q15TikTok: {
        id: 15,
        question:
            "You block Alex on TikTok.\n\nIn the TikTok app, go to the person's profile.\n\nTap the **Share** button at the top.\n\nTap **Block** to confirm.\n\nWhile you've stopped Alex from contacting you, they may continue to target others.\n\n**Conclusion:** Blocking protects you, but reporting helps protect others too.\n\n**Feedback:** Consider reporting in the future to help keep the community safe.",
        answers: [],
        end: true,
    },
}
