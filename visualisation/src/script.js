'use client'

import { useEffect } from 'react'
import { cn } from '@/libs/utils'

export default function ScamDetect({ msg: string }) {
    useEffect(() => {
        // Dynamically load the external script when the component mounts
        const script = document.createElement('script')
        script.src = '/visualisation/script.js'
        script.type = 'module'
        document.body.appendChild(script)

        // Once the script is loaded, manually bind the event listener
        script.onload = () => {
            console.log('Script loaded successfully')

            // Manually attach the event listener to the form after React renders
            const form = document.getElementById('scam-input-form')
            if (form) {
                form.addEventListener('submit', (event) => {
                    event.preventDefault()
                    console.log('Form submitted!')

                    // Check if wordFrequencyDict is loaded
                    if (
                        window.wordFrequencyDict &&
                        Object.keys(window.wordFrequencyDict).length > 0
                    ) {
                        const scamExperience =
                            document.getElementById('scam-experience').value
                        const wordFrequency = window.calculateWordFrequency(
                            scamExperience,
                            window.wordFrequencyDict
                        )

                        // Clear the existing model bar chart
                        d3.select('#model-bar-chart').selectAll('*').remove()

                        // Create the new bar chart
                        window.createModelBarChart(
                            wordFrequency,
                            'model-bar-chart'
                        )
                        console.log(
                            'Word frequency processed and chart rendered.'
                        )
                    } else {
                        console.error('Word Frequency Dictionary is not loaded')
                    }
                })
            } else {
                console.error('Form element not found!')
            }
        }

        return () => {
            // Remove the script when the component unmounts
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className={cn('min-h-screen p-6 w-full')}>
            <section
                id="user-input-section"
                className="text-center w-full p-8 bg-gray-50 rounded-lg mt-12"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
                    Scam Detection
                </h2>
                {/* Keep the form structure and id as in index.html */}
                <form
                    id="scam-input-form"
                    className="flex flex-col items-center space-y-4"
                >
                    <input
                        type="text"
                        id="scam-experience"
                        name="scam-experience"
                        placeholder="Please put your scam text here"
                        value="Congratulations! You've won a $1,000 Walmart gift bard. Go to http://bit.ly/123456 tp claim now."
                        className="p-4 w-full md:w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                        type="submit"
                        className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </section>

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
