import { gameData } from '@/data/gameData'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const BranchingNarrativeComponent = ({ scenario }: { scenario: number }) => {
    const [currentQuestion, setCurrentQuestion] = useState('q0')
    const [navAnswer, setNavAnswer] = useState(false)
    const choice = gameData[scenario - 1]

    const handleAnswerClick = (link: React.SetStateAction<string>) => {
        if (choice[currentQuestion as keyof typeof choice]) {
            setCurrentQuestion(link)
            setNavAnswer(false)
        } else {
            console.error(`Question with link "${link}" not found in gameData.`)
        }
    }

    const currentQuestionData = choice[currentQuestion as keyof typeof choice]

    if (!currentQuestionData) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col gap-y-6">
            {!navAnswer && (
                <div>
                    <h2>{currentQuestionData.question}</h2>
                    <Button onClick={() => setNavAnswer(true)}>Next</Button>
                </div>
            )}
            {navAnswer && (
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
                                          | string
                                          | React.JSXElementConstructor<any>
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
            )}
        </div>
    )
}

export default BranchingNarrativeComponent
