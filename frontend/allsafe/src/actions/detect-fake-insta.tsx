'use client'

import {
    calculateNumericRatio,
    checkForExternalUrl,
    handleModifier,
} from '@/libs/utils'
import { createWorker } from 'tesseract.js'

export async function detectFakeInstaAccount({
    file,
    isProfilePic,
    isPrivate,
}: {
    file: File
    isProfilePic: boolean
    isPrivate: boolean
}) {
    try {
        const worker = await createWorker('eng')
        const imageUrl = URL.createObjectURL(file)

        // OCR with Tesseract.js
        const ret = await worker.recognize(imageUrl)

        // Parse username from text
        const username = ret.data.text
            .split('\n')[1]
            .split('\n')[0]
            .split(' ')[1]
        const usernameRatio = calculateNumericRatio(username)

        // Parse fullname from text
        const name = ret.data.text.split('\n')[5]
        const numOfWords = name.split(' ').length
        const nameRatio = calculateNumericRatio(name)

        // Check if name === username
        let nameIsUsername = 0
        if (name.trim() === username.trim()) nameIsUsername = 1

        // Parse description and find length (char)
        const description = ret.data.text.split('\n').slice(7, 12).join('')
        const descriptionLength = description.length

        // Parse text for external URL
        const externalUrl = ret.data.text.split('\n').slice(0, 12).join(' ')
        const isExternalUrlPresent = checkForExternalUrl(externalUrl)

        // Parse posts count
        const posts = ret.data.text.split('\n')[2].split(' ')[1]
        const postsAsNumber = handleModifier(posts)

        // Parse followers count
        const followers = ret.data.text.split('\n')[2].split(' ')[2]
        const followersAsNumber = handleModifier(followers)

        // Parse following count
        const following = ret.data.text.split('\n')[2].split(' ')[3]
        const followingAsNumber = handleModifier(following)

        // Private account
        const privateAccount = isPrivate ? 1 : 0

        // Profile picture
        const profilePic = isProfilePic ? 1 : 0

        await worker.terminate()

        // Call API
        const response = await fetch(
            process.env.NEXT_PUBLIC_AI_FAKE_ACCOUNT_API!,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'profile pic': profilePic,
                    'nums/length username': usernameRatio,
                    'fullname words': numOfWords,
                    'nums/length fullname': nameRatio,
                    'name==username': nameIsUsername,
                    'description length': descriptionLength,
                    'external URL': isExternalUrlPresent,
                    ['private']: privateAccount,
                    '#posts': postsAsNumber,
                    '#followers': followersAsNumber,
                    '#follows': followingAsNumber,
                }),
            }
        )

        if (!response.ok) {
            throw new Error('API request failed')
        }

        const data = await response.json()
        console.log('Fake account detection result: ', data)
        return data
    } catch (error) {
        console.error('Error detecting fake Instagram account:', error)
        throw error
    }
}
