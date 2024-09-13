import { gameData } from '@/data/gameData'
import React, { useState, useRef, useEffect } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardDescription, CardContent } from '../ui/card'
import gifImg from '@/components/assets/Isometric Bar Snowing.gif'
import Image from 'next/image'
import Link from 'next/link'

const BranchingNarrativeComponent = ({
    scenarios,
    scenario,
}: {
    scenarios: any
    scenario: number
}) => {
    const [gameBegan, setGameBegan] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState('q0')
    const [navAnswer, setNavAnswer] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const choice = gameData[scenario - 1]

    const audioRef = useRef<HTMLAudioElement | null>(null) // Ref to control the audio element

    const handleAnswerClick = (link: React.SetStateAction<string>) => {
        if (choice[currentQuestion as keyof typeof choice]) {
            setCurrentQuestion(link)
            setNavAnswer(false)
            setGameBegan(true)
            if (audioRef.current && !isPlaying) {
                audioRef.current.play()
                setIsPlaying(true)
            }
        } else {
            console.error(`Question with link "${link}" not found in gameData.`)
        }
    }

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const currentQuestionData = choice[currentQuestion as keyof typeof choice]

    useEffect(() => {
        // Automatically play music when the game begins
        if (gameBegan && audioRef.current) {
            audioRef.current.play()
            setIsPlaying(true)
        }
    }, [gameBegan])

    if (!currentQuestionData && gameBegan) {
        return (
            <div className="flex flex-col justify-center items-center w-full">
                <p>Game over</p>
                <p>Play again?</p>
                <div className="flex">
                    <Link href="/game" passHref>
                        <Button
                            className="m-6 self-end"
                            variant="ghost"
                            onClick={() => setNavAnswer(true)}
                        >
                            Yes
                        </Button>
                    </Link>
                    <Link href="/app" passHref>
                        <Button
                            className="m-6 self-end"
                            variant="ghost"
                            onClick={() => setNavAnswer(true)}
                        >
                            No
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    if (!currentQuestionData) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col justify-end items-end gap-y-6 w-full">
            <audio ref={audioRef} src="/music.mp3" loop={true} preload="auto" />

            <Image
                src={gifImg}
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
            {/* Play/Pause Button */}
            <Button
                onClick={togglePlayPause}
                className="fixed top-20 right-10 z-20"
                variant="ghost"
            >
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </Button>
        </div>
    )
}

export default BranchingNarrativeComponent
