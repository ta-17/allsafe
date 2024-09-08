import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import QuizCard from './quiz'
import Header from '../hero/header-two'
import { TypographyBlockquote } from '@/typography/blockqoute'
import { TypographyH3 } from '@/typography/h3'
import Link from 'next/link'
import { TypographyH4 } from '@/typography/h4'
import { Check, Cross, X } from 'lucide-react'

const Quiz = () => {
    const [questions, setQuestions] = useState<any[]>([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState<any[]>([])
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [score, setScore] = useState(0)
    const [nextjsData, setNextjsData] = useState()

    useEffect(() => {
        fetchQuestions()
    }, [])

    const fetchQuestions = async () => {
        try {
            const response = await fetch(
                'https://evpt9eomd9.execute-api.ap-southeast-2.amazonaws.com/quiz-data/',
                {
                    cache: 'force-cache',
                }
            ) // Replace with your API endpoint
            const data = await response.json()
            const randomQuestions = getRandomQuestions(data, 5)
            setQuestions(randomQuestions)
            console.info('next js data: ', nextjsData)
            setNextjsData(data)
        } catch (error) {
            console.error('Error fetching questions:', error)
        }
    }

    const getRandomQuestions = (
        allQuestions: any,
        count: number | undefined
    ) => {
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    }

    const handleAnswer = (answer: number) => {
        const newAnswers = [...userAnswers, answer]
        setUserAnswers(newAnswers)

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            calculateScore(newAnswers)
            setQuizCompleted(true)
        }
    }

    const calculateScore = (answers: any[]) => {
        const correctAnswers = answers.filter(
            (answer, index) => answer === questions[index].label
        )
        setScore(correctAnswers.length)
    }

    const restartQuiz = () => {
        setCurrentQuestion(0)
        setUserAnswers([])
        setQuizCompleted(false)
        setScore(0)
        fetchQuestions()
    }

    // if (questions.length === 0) {
    //     return <div>Loading...</div>
    // }

    if (nextjsData === undefined) {
        return <div>Loading...</div>
    }

    const successMessage =
        'Your score: ' + score + ' out of ' + questions.length

    if (quizCompleted) {
        return (
            <div
                className="flex flex-col items-center min-h-screen rounded-lg gap-y-20 w-full"
                x-chunk="dashboard-02-chunk-1"
            >
                <div className="flex flex-col items-center text-center w-full">
                    <Header title="Quiz Results" subtitle={successMessage} />
                    {score > 4 && (
                        <div className="mb-4 font-semibold">
                            <span className="text-left">
                                Congrats you got all the questions right
                            </span>{' '}
                            <span>🎉.</span>
                        </div>
                    )}
                    <div className="w-fit">
                        {userAnswers.map((answer, index) => (
                            <div
                                key={index}
                                className=" flex justify-center gap-8 w-full"
                            >
                                <p className="w-24 text-left">
                                    Question {index + 1}:
                                </p>
                                {questions[index].label === answer ? (
                                    <Check color="green" />
                                ) : (
                                    <X color="red" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-y-16 px-20">
                        <div className="flex flex-col">
                            <h3 className="text-left font-bold">
                                Tips for spotting scams:
                            </h3>
                            <div>
                                <TypographyBlockquote className="py-2 text-slate-600">
                                    <ul className="list-disc text-left pl-4">
                                        <li>
                                            Be wary of unsolicited messages,
                                            especially those asking for personal
                                            information.
                                        </li>
                                        <li>
                                            Lock down your profile. Restrict DM
                                            privileges from other users.
                                        </li>
                                        <li>Enable 2FA on your account.</li>
                                        <li>
                                            Check for poor grammar and spelling,
                                            which are often indicators of scams.
                                        </li>
                                        <li>
                                            Be cautious of messages creating a
                                            sense of urgency or pressure.
                                        </li>
                                        <li>
                                            Verify the sender&apos;s identity
                                            through official channels before
                                            taking any action.
                                        </li>
                                        <li>
                                            Do not click suspicious looking
                                            links.
                                        </li>
                                    </ul>
                                </TypographyBlockquote>
                                <span className="text-xs text-muted-foreground">
                                    <a
                                        href="https://help.instagram.com/514187739359208?helpref=faq_content"
                                        className="underline text-blue-500 visited:text-blue-800"
                                        target="_blank"
                                    >
                                        https://help.instagram.com/514187739359208?helpref=faq_content
                                    </a>
                                </span>
                            </div>
                        </div>
                        <Button className="mb-8" onClick={restartQuiz}>
                            Restart Quiz
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-x-2 pb-16">
                    <TypographyH4 className="flex flex-row">
                        Want to learn more about the different types of scams?{' '}
                    </TypographyH4>
                    <Link href="/scams" className="underline">
                        Learn more
                    </Link>
                </div>
            </div>
        )
    }

    const currentQuestionData = questions[currentQuestion]

    return (
        <div className="flex justify-center min-h-full w-full">
            {/* <p>{questions[currentQuestion].label}</p> */}
            <QuizCard
                currentQuestion={currentQuestion}
                qLength={questions.length}
                msg={currentQuestionData.text}
                handleAnswer={handleAnswer}
            />
        </div>
    )
}

export default Quiz
