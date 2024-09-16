'use client'

import { gameData } from '@/data/gameData'
import React, { useState, useRef, useEffect } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardDescription, CardContent } from '../ui/card'
import gifImg from '@/components/assets/Isometric Bar Snowing.gif'
import Image from 'next/image'
import Link from 'next/link'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { useRouter } from 'next/navigation'

const BranchingNarrativeComponent = ({
    scenarios,
    scenario,
}: {
    scenarios: any
    scenario: number
}) => {
    const router = useRouter()
    const [gameBegan, setGameBegan] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState('q0')
    const [navAnswer, setNavAnswer] = useState(false)
    const choice = gameData[scenario - 1]

    const handleAnswerClick = (link: React.SetStateAction<string>) => {
        if (choice[currentQuestion as keyof typeof choice]) {
            setCurrentQuestion(link)
            setNavAnswer(false)
            setGameBegan(true)
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
                    <Button
                        size="lg"
                        onClick={() => {
                            console.log('clicked')
                            location.reload()
                            console.log('clicked again')
                        }}
                    >
                        Yes
                    </Button>

                    <Button variant="outline" size="lg" asChild>
                        <Link href="/" passHref>
                            No
                        </Link>
                    </Button>
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
        <div className="flex flex-col justify-end items-end gap-y-6 w-full">
            <Image
                src="/Retro Gaming Pixel 8.gif"
                alt={'background gif'}
                layout="fill"
                objectFit="cover"
                priority={true} // Ensures the GIF is prioritized for loading
                className="absolute top-0 left-0 w-full h-full z-0" // Positions the GIF correctly as a background
            />
            <Card className="flex flex-col h-50 overflow-y-scroll w-full justify-between z-10">
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
                {!navAnswer && currentQuestionData.answers.length > 0 && (
                    <Button
                        className="m-6 self-end"
                        variant="ghost"
                        onClick={() => setNavAnswer(true)}
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
        </div>
    )
}

export default BranchingNarrativeComponent
