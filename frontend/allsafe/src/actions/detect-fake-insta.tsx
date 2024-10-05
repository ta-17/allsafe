'use client'

import { createWorker } from 'tesseract.js'

export async function detectFakeInstaAccount(data: string) {
    ;(async () => {
        const worker = await createWorker('eng')
        const ret = await worker.recognize(
            'https://tesseract.projectnaptha.com/img/eng_bw.png'
        )
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
