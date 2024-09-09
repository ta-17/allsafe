import { gameData } from '@/data/gameData'
import React, { useState } from 'react'

const BranchingNarrativeComponent = () => {
    const [currentQuestion, setCurrentQuestion] = useState('q0')

    const handleAnswerClick = (link: React.SetStateAction<string>) => {
        if (gameData[link as keyof typeof gameData]) {
            setCurrentQuestion(link)
        } else {
            console.error(`Question with link "${link}" not found in gameData.`)
        }
    }

    const currentQuestionData =
        gameData[currentQuestion as keyof typeof gameData]

    if (!currentQuestionData) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>{currentQuestionData.question}</h2>
            <div>
                {currentQuestionData.answers.map(
                    (
                        answer: {
                            link: any
                            text:
                                | string
                                | number
                                | bigint
                                | boolean
                                | React.ReactElement<
                                      any,
                                      string | React.JSXElementConstructor<any>
                                  >
                                | Iterable<React.ReactNode>
                                | React.ReactPortal
                                | Promise<React.AwaitedReactNode>
                                | null
                                | undefined
                        },
                        index: React.Key | null | undefined
                    ) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(answer.link)}
                        >
                            {answer.text}
                        </button>
                    )
                )}
            </div>
        </div>
    )
}

export default BranchingNarrativeComponent
