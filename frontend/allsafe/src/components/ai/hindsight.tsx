'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/libs/utils'

export default function ScamDetectHindsight({ msg }: { msg: string }) {
    const ref = useRef<HTMLFormElement>(null)

    // Dynamically load the external script when the component mounts
    useEffect(() => {
        const script = document.createElement('script')
        script.src = '/visualisation/script.js'
        script.type = 'module'
        document.body.appendChild(script)

        return () => {
            // Remove the script when the component unmounts
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className={cn('min-h-screen p-6 w-full')}>
            {/* Bar Chart Section */}
            <section
                id="model-bar-chart-section"
                className="text-center w-full p-8 bg-gray-50 rounded-lg mt-12"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
                    Word Frequency Bar Chart
                </h2>
                {/* Container for the D3 chart */}
                <div
                    id="model-bar-chart"
                    className="chart w-full h-[400px] bg-gray-50 rounded-lg"
                ></div>
            </section>
        </div>
    )
}
