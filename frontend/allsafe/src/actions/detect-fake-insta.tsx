'use client'

import {
    calculateNumericRatio,
    checkForExternalUrl,
    checkIfDescriptionIsEnded,
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

        // console.log('OCR result: ', ret.data.text.split('\n'))

        // Parse username from text
        const username = ret.data.text
            .split('\n')[1]
            .split('\n')[0]
            .split(' ')[1]
        const usernameRatio = calculateNumericRatio(username)

        // console.log('usernameRatio: ', username, usernameRatio)

        // Parse fullname from text

        const name =
            ret.data.text.split('\n')[5] !== undefined
                ? ret.data.text.split('\n')[5]
                : ret.data.text.split('\n')[3]
        const numOfWords = name.split(' ').length
        const nameRatio = calculateNumericRatio(name)

        // console.log('fullname', name, numOfWords, nameRatio)

        // Check if name === username
        let nameIsUsername = 0
        if (name.trim() === username.trim()) nameIsUsername = 1

        // Parse description and find length (char)
        const description = ret.data.text.split('\n').slice(6)
        const descriptionLength = checkIfDescriptionIsEnded(description)

        // console.log('description', description, descriptionLength)

        // Parse text for external URL
        const externalUrl = ret.data.text.split('\n').slice(0, 12).join(' ')
        const isExternalUrlPresent = checkForExternalUrl(externalUrl)

        // Parse posts count
        let postsAsNumber = 0
        try {
            const posts = ret.data.text.split('\n')[2].split(' ')[1]
            postsAsNumber = handleModifier(posts)
        } catch (error) {
            postsAsNumber = 0
        }

        // console.log('postsAsNumber: ', postsAsNumber)

        // Parse followers count
        let followersAsNumber = 0
        try {
            const followers = ret.data.text.split('\n')[2].split(' ')[2]
            followersAsNumber = handleModifier(followers)
        } catch (error) {
            followersAsNumber = 0
        }

        // Parse following count
        let followingAsNumber = 0
        try {
            const following = ret.data.text.split('\n')[2].split(' ')[3]
            followingAsNumber = handleModifier(following)
        } catch (error) {
            followingAsNumber = 0
        }

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
        // console.log('Fake account detection result: ', data['prediction'][0])
        return data['prediction'][0]
    } catch (error) {
        // console.error('Error detecting fake Instagram account:', error)
        throw error
    }
}
