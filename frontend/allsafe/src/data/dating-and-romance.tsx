export const datingAndRomance = {
    q0: {
        id: 0,
        question:
            "You receive a friend request from someone named Alex Taylor. Alex's profile picture shows an attractive person around your age. After accepting the request, Alex sends you a message:\n\nAlex:\nHi! I came across your profile and thought we have a lot in common. I'd love to get to know you better. How's your day going?\n\nWhat do you do next?",
        answers: [
            {
                text: 'Reply and start a conversation with Alex.',
                link: 'q1',
            },
            {
                text: "Check Alex's profile for legitimacy.",
                link: 'q2',
            },
            {
                text: 'Ignore the message.',
                link: 'q3',
            },
            {
                text: "Block Alex's account.",
                link: 'q4',
            },
        ],
    },
    
    q1: {
        id: 1,
        question:
            "You reply to Alex and start a conversation. Over the next few weeks, you exchange messages daily, and Alex seems charming and attentive. One day, Alex sends you a message:\n\nAlex:\nI'm so glad we met. I feel like we have a real connection. Unfortunately, I'm in a bit of a tough situation. I'm traveling abroad and lost my wallet. Could you lend me $500 to help me get back home? I'll pay you back as soon as I return.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Offer to send Alex the money.',
                link: 'q5',
            },
            {
                text: 'Express sympathy but decline to send money.',
                link: 'q6',
            },
            {
                text: 'Feel suspicious and decide to stop communicating with Alex.',
                link: 'q7',
            },
            {
                text: "Report Alex's account.",
                link: 'q8',
            },
        ],
    },
    
    q2: {
        id: 2,
        question:
            "You check Alex's profile and notice that it was created recently, has few friends or followers, and the posts seem generic. This raises suspicion.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Decide to ignore the message.',
                link: 'q3',
            },
            {
                text: 'Proceed to block Alex’s account.',
                link: 'q4',
            },
            {
                text: 'Still decide to reply and start a conversation.',
                link: 'q1',
            },
            {
                text: "Adjust your account settings to make your profile private.",
                link: 'q9',
            },
        ],
    },
    
    q3: {
        id: 3,
        question:
            "You choose to ignore Alex's message. However, you wonder if you should adjust your privacy settings to prevent unsolicited contacts in the future.\n\nOn which platform do you want to learn how to make your account private?",
        answers: [
            {
                text: 'Facebook',
                link: 'q3Facebook',
            },
            {
                text: 'Instagram',
                link: 'q3Instagram',
            },
            {
                text: 'TikTok',
                link: 'q3TikTok',
            },
        ],
    },

    q3Facebook: {
        id: 3,
        question:
            "You choose to make your Facebook account private.\n\nClick your profile picture in the top right of Facebook.\n\nSelect **Settings and privacy**, then click **Settings**.\n\nUnder **Audience and visibility**, click the option that you want to change for privacy.\n\n**Conclusion:** By making your account private, you control who can see your posts and contact you.\n\n**Feedback:** Great job enhancing your privacy!",
        answers: [],
    },

    q3Instagram: {
        id: 3,
        question:
            "You choose to make your Instagram account private.\n\nClick **More** in the bottom left, then click **Settings**.\n\nClick **Account Privacy** below **Who can see your content**.\n\nTurn on the switch next to **Private account** to make your account private.\n\nClick **Switch to private** to confirm.\n\n**Conclusion:** By making your account private, you control who can see your posts and contact you.\n\n**Feedback:** Great job enhancing your privacy!",
        answers: [],
    },

    q3TikTok: {
        id: 3,
        question:
            "You choose to make your TikTok account private.\n\nIn the TikTok app, tap **Profil**e at the bottom.\n\nTap the **Menu ☰** button at the top.\n\nTap **Settings and privacy**, then tap **Privacy**.\n\nTurn **Private account** on or off.\n\n**Conclusion:** By making your account private, you control who can see your posts and contact you.\n\n**Feedback:** Great job enhancing your privacy!",
        answers: [],
    },
    
    q4: {
        id: 4,
        question:
            "You decide to block Alex's account to prevent further contact.\n\nOn which platform do you want to learn how to block someone?",
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
            "You block Alex's account on Facebook.\n\nClick your profile picture in the top right of Facebook.\n\nSelect **Settings and privacy**, then click **Settings**.\n\nIn the left column, under **Audience and visibility**, click **Blocking**\n\nIn the **Block users** section, click **Edit**\n\nClick **Add to blocked list**.\n\nType the name of the profile that you want to block.\n\nClick **Block** next to their name.\n\nClick **Confirm**.\n\n**Conclusion:** You've blocked Alex and will no longer receive messages from them.\n\n**Feedback:** Good job protecting yourself from potential scams!",
        answers: [],
    },

    q4Instagram: {
        id: 4,
        question:
            "You block Alex's account on Instagram.\n\nClick **send** or **messenger** on the left.\n\nClick the chat with the person you want to block/unblock, then click **more information** at the top.\n\nClick **Block/Unblock**, then click again to **confirm**.\n\n**Conclusion:** You've blocked Alex and will no longer receive messages from them.\n\n**Feedback:** Good job protecting yourself from potential scams!",
        answers: [],
    },

    q4TikTok: {
        id: 4,
        question:
            "You block Alex's account on TikTok.\n\nIn the TikTok app, go to the person's profile.\n\nTap the **Share** button at the top.\n\nTap **Block** to confirm.\n\n**Conclusion:** You've blocked Alex and will no longer receive messages from them.\n\n**Feedback:** Good job protecting yourself from potential scams!",
        answers: [],
    },
    
    q5: {
        id: 5,
        question:
            "You offer to send Alex the money. Alex provides you with bank details to transfer the funds. After sending the money, Alex stops responding to your messages. You realize you may have been scammed.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Report the incident to the platform.',
                link: 'q8',
            },
            {
                text: 'Contact your bank to see if the transfer can be reversed.',
                link: 'q11',
            },
            {
                text: 'Enable two-factor authentication (2FA) on your account.',
                link: 'q12',
            },
            {
                text: 'Do nothing and accept the loss.',
                link: 'q13',
            },
        ],
    },
    
    q6: {
        id: 6,
        question:
            "You express sympathy but decline to send money. Alex replies:\n\nAlex:\nI understand. It's just that I'm in a really tough spot, and I thought you cared about me. Even a smaller amount would help. Please?\n\nWhat do you do next?",
        answers: [
            {
                text: 'Stand firm and politely decline again.',
                link: 'q14',
            },
            {
                text: 'Decide to send a smaller amount.',
                link: 'q5',
            },
            {
                text: 'Feel uncomfortable and decide to block Alex.',
                link: 'q4',
            },
            {
                text: "Report Alex's account.",
                link: 'q8',
            },
        ],
    },
    
    q7: {
        id: 7,
        question:
            "You feel suspicious and decide to stop communicating with Alex. However, you wonder if you should limit who can message you to prevent similar situations in the future.\n\nOn which platform do you want to learn how to limit who can message you?",
        answers: [
            {
                text: 'Facebook',
                link: 'q7Facebook',
            },
            {
                text: 'Instagram',
                link: 'q7Instagram',
            },
            {
                text: 'TikTok',
                link: 'q7TikTok',
            },
        ],
    },

    q7Facebook: {
        id: 7,
        question:
            "You adjust your messaging settings on Facebook to limit who can message you.\n\nOpen your Messenger app.\n\nClick your profile picture in the bottom left, then click **Preferences**.\n\nTap **Privacy & safety**.\n\nTap **Message delivery**.\n\nTap on the group you want to control messages for.\n\nChoose to deliver their messages to your Chats list or to your message requests folder. Or tap **Don't receive requests** to stop receiving their messages entirely.\n\nNew group chat message requests won't be delivered to your Chats list.\n\n**Conclusion:** You've reduced the likelihood of receiving unsolicited messages.\n\n**Feedback:** Great job taking control of your online interactions!",
        answers: [],
    },

    q7Instagram: {
        id: 7,
        question:
            "You adjust your messaging settings on Instagram to limit who can message you.\n\nClick **☰ More** in the bottom left, then click **Settings**.\n\nBelow **How others can interact with you**, click **Messages and story replies**.\n\nClick **Message controls**.\n\nChoose whether message requests from people on Instagram go to your Message Requests folder or whether to receive them at all.\n\nNote that you’ll need to accept message requests in your Message Requests folder before they appear in your Chats list. Messages from people you follow on Instagram will appear in your Chats list.\n\n**Conclusion:** You've reduced the likelihood of receiving unsolicited messages.\n\n**Feedback:** Great job taking control of your online interactions!",
        answers: [],
    },

    q7TikTok: {
        id: 7,
        question:
            "You adjust your messaging settings on TikTok to limit who can message you.\n\nIn the TikTok app, tap Profile at the bottom.\n\nTap the **Menu ☰** button at the top, then select **Settings and privacy**.\n\nTap **Privacy**\n\n.Tap **Direct messages**, then choose from the list of options who can send you messages:\n\n   ༚  **Everyone:** Anyone can send you a direct message. Messages from mutual friends and people you follow appear in your inbox.\n\n   ༚  **Suggested friends:** Matched friends, including synced Facebook friends and phone contacts, and followers who you follow back, can send you a direct message.\n\n   ༚  **Friends:** Any followers that you follow back can send you a direct message.\n\n   ༚  **No one:** You can't receive direct messages from anyone. Keep in mind that if you choose this setting, you can't receive direct messages. You can still access your message history in your inbox, but you can't receive new direct messages in those chats.\n\nKeep in mind that some of these options are not available to everyone.\n\n**Conclusion:** You've reduced the likelihood of receiving unsolicited messages.\n\n**Feedback:** Great job taking control of your online interactions!",
        answers: [],
    },
    
    q8: {
        id: 8,
        question:
            "You decide to report Alex's account to the platform.\n\nOn which platform do you want to learn how to report an account?",
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
            "You report Alex's account on Facebook.\n\nGo to the profile that you want to report by clicking its name in your Feed or searching for it.\n\nClick **more ...** to the right.\n\nClick **Find support or report**.\n\nTo give feedback, click the option that best describes how this profile goes against our Community Standards.\n\n   **Note:** Depending on your feedback, you may then be able to submit a report to Meta. For some types of content, we don't ask you to submit a report, but we use your feedback to help our systems learn.\n\nClick **Done**.\n\nFacebook acknowledges your report and will review the account.\n\n**Conclusion:** You've reported Alex's account. The platform will review the report.\n\n**Feedback:** Good job taking action to protect yourself and others!",
        answers: [],
    },

    q8Instagram: {
        id: 8,
        question:
            "You report Alex's account on Instagram.\n\nClick their username from their Feed or story post, or click **explore** and search their username to go to their profile.\n\nClick **more** actions next to their username.\n\nSelect **Report**, then select the type of account you want to report and follow the on-screen instructions.\n\nInstagram acknowledges your report and will review the account.\n\n**Conclusion:** You've reported Alex's account. The platform will review the report.\n\n**Feedback:** Good job taking action to protect yourself and others!",
        answers: [],
    },

    q8TikTok: {
        id: 8,
        question:
            "You report Alex's account on TikTok.\n\nIn the TikTok app, go to the person's profile.\n\nTap the **Share** button at the top.\n\nTap **Report**.\n\nTap **Report account**.\n\nSelect a reason for the report and tap **Submit**.\n\nTikTok acknowledges your report.\n\n**Conclusion:** You've reported Alex's account. The platform will review the report.\n\n**Feedback:** Good job taking action to protect yourself and others!",
        answers: [],
    },
    
    q9: {
        id: 9,
        question:
            "You adjust your account settings to make your profile private.\n\nOn which platform do you want to learn how to make your account private?",
        answers: [
            {
                text: 'Facebook',
                link: 'q3Facebook',
            },
            {
                text: 'Instagram',
                link: 'q3Instagram',
            },
            {
                text: 'TikTok',
                link: 'q3TikTok',
            },
        ],
    },
    
    q10: {
        id: 10,
        question:
            "You decide not to make your account private. Be aware that your profile remains visible to anyone, and you may continue to receive unsolicited messages.\n\n**Conclusion:** Your account remains public, which could lead to more unwanted contacts.\n\n**Feedback:** Consider adjusting your privacy settings for better control.",
        answers: [],
    },
    
    q11: {
        id: 11,
        question:
            "You contact your bank to see if the transfer can be reversed. The bank advises that reversing the transfer may not be possible but will investigate for potential fraud.\n\n**Conclusion:** It's important to act quickly when you suspect fraud.\n\n**Feedback:** You took the right step by contacting your bank promptly.",
        answers: [],
    },
    
    q12: {
        id: 12,
        question:
            "You enable two-factor authentication (2FA) on your account to enhance security.\n\nOn which platform do you want to learn how to turn on 2FA?",
        answers: [
            {
                text: 'Facebook',
                link: 'q12Facebook',
            },
            {
                text: 'Instagram',
                link: 'q12Instagram',
            },
        ],
    },

    q12Facebook: {
        id: 12,
        question:
            "You enable two-factor authentication (2FA) on Facebook.\n\nClick on your profile picture in the top right, then click **Settings and privacy**.\n\nClick **Settings**.\n\nClick **Accounts Centre**, then click **Password and security**.\n\nClick **Two-factor authentication**, then click on the account that you'd like to update.\n\nChoose the security method that you want to add and follow the on-screen instructions.\n\n**Conclusion:** By enabling 2FA, you've added an extra layer of security to your account.\n\n**Feedback:** Excellent decision to protect your account!",
        answers: [],
    },

    q12Instagram: {
        id: 12,
        question:
            "You enable two-factor authentication (2FA) on Instagram.\n\nClick **More** in the bottom left, then click **Settings**.\n\nClick **See more in Accounts Center**, then click **Password and security**.\n\nClick **Two-factor authentication**, then select an account.\n\nChoose the security method you want to add and follow the on-screen instructions.\n\n**Conclusion:** By enabling 2FA, you've added an extra layer of security to your account.\n\n**Feedback:** Excellent decision to protect your account!",
        answers: [],
    },
    
    q13: {
        id: 13,
        question:
            "You decide to do nothing and accept the loss. Unfortunately, Alex may continue scamming others.\n\n**Conclusion:** Taking no action allows scammers to potentially harm more people.\n\n**Feedback:** Consider reporting such incidents to help protect others.",
        answers: [],
    },
    
    q14: {
        id: 14,
        question:
            "You stand firm and politely decline again. Alex becomes upset and stops communicating with you. You suspect that Alex may have been attempting to scam you.\n\nWhat do you do next?",
        answers: [
            {
                text: 'Block Alex’s account.',
                link: 'q4',
            },
            {
                text: 'Report Alex’s account.',
                link: 'q8',
            },
            {
                text: 'Adjust your messaging settings to limit who can contact you.',
                link: 'q15',
            },
            {
                text: 'Do nothing further.',
                link: 'q17',
            },
        ],
    },
    
    q15: {
        id: 15,
        question:
            "You adjust your messaging settings to limit who can contact you.\n\nOn which platform do you want to learn how to limit who can message you?",
        answers: [
            {
                text: 'Facebook',
                link: 'q7Facebook',
            },
            {
                text: 'Instagram',
                link: 'q7Instagram',
            },
            {
                text: 'TikTok',
                link: 'q7TikTok',
            },
        ],
    },
    
    q16: {
        id: 16,
        question:
            "You decide not to adjust your messaging settings. Be aware that you may continue to receive unsolicited messages from strangers.\n\n**Conclusion:** Without adjusting your settings, you remain open to unwanted contacts.\n\n**Feedback:** Consider adjusting your messaging settings for a safer experience.",
        answers: [],
    },
    
    q17: {
        id: 17,
        question:
            "You choose to do nothing further. Alex may attempt to contact you again or target others.\n\n**Conclusion:** Without taking action, the issue may persist.\n\n**Feedback:** Consider blocking or reporting suspicious accounts to protect yourself and others.",
        answers: [],
    },
};
