'use server'

export async function getAdditionalInfo(message: string) {
    const response = await fetch(process.env.AI_ADDITIONAL_INFO_API!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
    })

    // if (!response.ok) {
    //     throw new Error('API request failed')
    // }

    const data = await response.json()
    return data
}
