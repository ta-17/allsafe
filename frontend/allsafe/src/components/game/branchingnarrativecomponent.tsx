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
        <div className="flex flex-col gap-y-6">
            <h2>{currentQuestionData.question}</h2>
            <div className="flex flex-col gap-y-4">
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
                        <span
                            key={index}
                            className="border border-slate-600 rounded-sm w-full"
                            onClick={() => handleAnswerClick(answer.link)}
                        >
                            {answer.text}
                        </span>
                    )
                )}
            </div>
        </div>
    )
}

export default BranchingNarrativeComponent
