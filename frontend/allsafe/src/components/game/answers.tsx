import React, { useState } from 'react'

interface Answer {
    text: string
    feedback?: string // Optional feedback property
}

export default function Answers({ textArray }: { textArray: Answer[] }) {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<
        number | null
    >(null)

    const handleAnswerClick = (index: number) => {
        setSelectedAnswerIndex(index) // Set the selected answer index when clicked
    }

    return (
        <div>
            {textArray.map((answer, index) => (
                <div key={index}>
                    {/* Show answer as clickable button */}
                    <button
                        onClick={() => handleAnswerClick(index)}
                        className="answer-button"
                    >
                        {answer.text}
                    </button>

                    {/* Show feedback only after an answer is clicked */}
                    {selectedAnswerIndex === index && answer.feedback && (
                        <p className="feedback">{answer.feedback}</p>
                    )}
                </div>
            ))}
        </div>
    )
}
