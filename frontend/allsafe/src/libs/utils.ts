import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function calculateNumericRatio(username: string): number {
    if (username.length === 0) {
        return 0 // Return 0 for empty strings to avoid division by zero
    }

    const numericCharCount = username.replace(/[^0-9]/g, '').length
    const ratio = numericCharCount / username.length

    return Number(ratio.toFixed(2)) // Return the ratio rounded to 2 decimal places
}

export function checkForExternalUrl(text: string): boolean {
    if (text.length === 0) {
        return false
    }

    const urlRegex =
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

    if (urlRegex.test(text)) {
        return true
    }

    return false
}

export function handleModifier(text: string): number {
    // Check if there is a modifier at end and removes it and converts to number

    const textLower = text.toLowerCase()

    if (text.length === 0) {
        return 0
    }

    const isThereAModifier =
        textLower.includes('k') ||
        textLower.includes('m') ||
        textLower.includes('b')

    if (!isThereAModifier) {
        return Number(textLower)
    }

    let num

    switch (isThereAModifier) {
        case textLower.includes('k'):
            num = Number(textLower.replace('k', '')) * 1000
            break
        case textLower.includes('m'):
            num = Number(textLower.replace('m', '')) * 1000000
            break
        case textLower.includes('b'):
            num = Number(textLower.replace('b', '')) * 1000000000
            break
        default:
            num = Number(textLower)
    }

    return num
}
