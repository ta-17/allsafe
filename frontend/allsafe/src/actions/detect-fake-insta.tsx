'use client'

import {
    calculateNumericRatio,
    checkForExternalUrl,
    handleModifier,
} from '@/libs/utils'
import { createWorker } from 'tesseract.js'
import wordsToNumbers from '@codecompose/words-to-numbers'

export async function detectFakeInstaAccount({
    file,
    isProfilePic,
    isPrivate,
}: {
    file: File
    isProfilePic: boolean
    isPrivate: boolean
}) {
    ;(async () => {
        const worker = await createWorker('eng')
        const imageUrl = URL.createObjectURL(file)
        // OCR with Tesseract (js)
        const ret = await worker.recognize(imageUrl)
        console.log('OCR: ', ret.data)

        // Parse username from text
        const username = ret.data.text
            .split('\n')[1]
            .split('\n')[0]
            .split(' ')[1]
        const usernameRatio = calculateNumericRatio(username)
        console.log('username', username, usernameRatio)

        // Parse fullname from text
        const name = ret.data.text.split('\n')[5]
        const numOfWords = name.split(' ').length
        const nameRatio = calculateNumericRatio(name)
        console.log('name', name, numOfWords, nameRatio)

        // Check if name === username
        let nameIsUsername = false
        if (name.trim() === username.trim()) nameIsUsername = true
        console.log('Is name the same as username?', nameIsUsername)

        // Parse description and find length (char)
        const description = ret.data.text.split('\n').slice(7, 12).join('')
        const descriptionLength = description.length
        console.log('description', description, descriptionLength)

        // Parse text for external URL
        const externalUrl = ret.data.text.split('\n').slice(0, 12).join(' ')
        const isExternalUrlPresent = checkForExternalUrl(externalUrl)
        console.log('external url', externalUrl, isExternalUrlPresent)

        // Parse posts count
        const posts = ret.data.text.split('\n')[2].split(' ')[1]
        const postsAsNumber = handleModifier(posts)
        console.log('posts', posts, postsAsNumber)

        // Parse followers count
        const followers = ret.data.text.split('\n')[2].split(' ')[2]
        const followersAsNumber = handleModifier(followers)
        console.log('followers', followers, followersAsNumber)

        // Parse following count
        const following = ret.data.text.split('\n')[2].split(' ')[3]
        const followingAsNumber = handleModifier(following)
        console.log('following', following, followingAsNumber)

        // Private account
        const privateAccount = isPrivate

        // Profile picture
        const profilePic = isProfilePic

        // Default
        console.log('Tesseract: ', ret.data.text)

        await worker.terminate()
    })()
    // try {
    //     const response = await fetch(process.env.AI_DETECT_API!, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ text: message }),
    //     })

    //     // if (!response.ok) {
    //     //     throw new Error('API request failed')
    //     // }

    //     const data = await response.json()
    //     return data
    // } catch (error) {
    //     throw error
    // }
}
