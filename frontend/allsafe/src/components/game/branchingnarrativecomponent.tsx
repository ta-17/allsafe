import { gameData } from '@/data/gameData'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardDescription, CardContent } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import ConvertContent from './ConvertContent'

const BranchingNarrativeComponent = ({
    scenarios,
    scenario,
}: {
    scenarios: any
    scenario: number
}) => {
    const [gameBegan, setGameBegan] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState('q0')
    const [navAnswer, setNavAnswer] = useState(false)
    const [feedback, setFeedback] = useState('') // Store the feedback after selecting an answer
    const [showFeedback, setShowFeedback] = useState(false) // Toggle the visibility of feedback

    const choice = gameData[scenario - 1]

    // Modify this function to accept and store feedback and reset feedback for new questions
    const handleAnswerClick = (
        link: React.SetStateAction<string>,
        feedbackText: string
    ) => {
        if (choice[currentQuestion as keyof typeof choice]) {
            setCurrentQuestion(link)
            setNavAnswer(false)
            setGameBegan(true)
            setFeedback(feedbackText) // Store feedback of the answer chosen
            setShowFeedback(true) // Show feedback after clicking
        } else {
            console.error(`Question with link "${link}" not found in gameData.`)
        }
    }

    const currentQuestionData = choice[currentQuestion as keyof typeof choice]

    if ((!currentQuestionData && gameBegan) || gameOver) {
        return (
            <div className="flex flex-col justify-center items-center w-full gap-y-4">
                <div className="flex flex-col justify-center items-center">
                    <TypographyH1>Game over</TypographyH1>
                    <TypographyLead>Play again?</TypographyLead>
                </div>
                <div className="flex gap-x-2">
                    <Button size="lg" onClick={() => location.reload()}>
                        Yes
                    </Button>
                    <Link href="/" passHref>
                        <Button variant="outline" size="lg">
                            No
                        </Button>
                    </Link>
                </div>
                <div className="flex">
                    <p>
                        Have you been a victim to any of these cases? Go to the
                        help section to find out what to do next.{' '}
                        <Link href="/help" passHref className="underline">
                            {' '}
                            Help Section
                        </Link>
                    </p>
                </div>
            </div>
        )
    }

    if (!currentQuestionData) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col justify-end items-end gap-y-6 w-full pb-12">
            <Image
                src="/Retro Gaming Pixel 8.gif"
                alt={'background gif'}
                layout="fill"
                objectFit="cover"
                priority={true} // Ensures the GIF is prioritized for loading
                className="absolute top-0 left-0 w-full h-full z-0" // Positions the GIF correctly as a background
            />
            <div className="flex flex-col sm:justify-end sm:items-end relative w-full sm:max-w-[60%] max-h-96 py-6 sm:ml-0 sm:mr-6 p-4 border-b-[1vw] bg-white leading-tight text-[6vw] word-spacing-wide shadow-lg">
                <Card className="flex flex-col h-50 overflow-y-scroll w-full justify-between z-10 border-0 shadow-none">
                    <CardHeader>
                        <CardDescription>{scenarios[scenario]}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-end gap-y-2">
                        {!navAnswer && (
                            <span className="text-base transition-opacity duration-300 revealed:opacity-100 green:text-[#27ae60] red:text-[#ff0000]">
                                {/* Use the ConvertContent component here to display formatted text */}
                                <ConvertContent
                                    text={currentQuestionData.question}
                                />
                            </span>
                        )}
                        {navAnswer && (
                            <div className="flex flex-col gap-y-4 w-full">
                                {currentQuestionData.answers.map(
                                    (
                                        answer: {
                                            link: string
                                            text: string
                                            feedback?: string
                                        },
                                        index: React.Key | null | undefined
                                    ) => (
                                        <Button
                                            variant="secondary"
                                            key={index}
                                            onClick={() =>
                                                handleAnswerClick(
                                                    answer.link,
                                                    answer.feedback!
                                                )
                                            }
                                        >
                                            {answer.text}
                                        </Button>
                                    )
                                )}
                            </div>
                        )}
                    </CardContent>

                    {/* Display the feedback only after the answer is clicked */}
                    {showFeedback && (
                        <div className="text-sm text-gray-500 mt-4">
                            <strong>Feedback:</strong> {feedback}
                        </div>
                    )}

                    {/* Reset feedback and navigate to the next question */}
                    {!navAnswer && currentQuestionData.answers.length > 0 && (
                        <Button
                            className="m-6 self-end"
                            variant="ghost"
                            onClick={() => {
                                setNavAnswer(true)
                                setShowFeedback(false) // Reset the feedback when moving to the next question
                                setFeedback('') // Clear previous feedback
                            }}
                        >
                            Continue
                        </Button>
                    )}
                    {!navAnswer && currentQuestionData.answers.length === 0 && (
                        <Button
                            className="m-6 self-end"
                            variant="ghost"
                            onClick={() => setGameOver(true)}
                        >
                            End
                        </Button>
                    )}
                </Card>
                <svg
                    className="absolute w-[10vw] right-[2vw]  bottom-0 translate-y-[80%]"
                    viewBox="0 0 65 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M35 3.5L65 6.5V62L0 0L35 3.5Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default BranchingNarrativeComponent
