import { gameData } from '@/data/gameData'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardDescription, CardContent } from '../ui/card'

const BranchingNarrativeComponent = ({
    scenarios,
    scenario,
}: {
    scenarios: any
    scenario: number
}) => {
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
        <div className="flex flex-col justify-end items-end gap-y-6 w-full">
            <Card className="flex flex-col h-56 overflow-y-scroll w-full justify-between">
                <CardHeader>
                    <CardDescription>{scenarios[scenario]}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-end gap-y-2">
                    {!navAnswer && <h2>{currentQuestionData.question}</h2>}
                    {navAnswer && (
                        <div className="flex flex-col gap-y-4 w-full">
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
                                    <Button
                                        variant="secondary"
                                        key={index}
                                        onClick={() =>
                                            handleAnswerClick(answer.link)
                                        }
                                    >
                                        {answer.text}
                                    </Button>
                                )
                            )}
                        </div>
                    )}
                </CardContent>
                {!navAnswer && (
                    <Button
                        className="m-6 self-end"
                        variant="ghost"
                        onClick={() => setNavAnswer(true)}
                    >
                        Continue
                    </Button>
                )}
            </Card>
        </div>
    )
}

export default BranchingNarrativeComponent
