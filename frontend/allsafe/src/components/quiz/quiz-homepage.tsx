import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import QuizCard from './quiz'
import Header from '../hero/header-two'
import { TypographyBlockquote } from '@/typography/blockqoute'
import { TypographyH3 } from '@/typography/h3'

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
            const response = await fetch('http://3.104.111.28/quiz-data/', {
                cache: 'force-cache',
            }) // Replace with your API endpoint
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
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
                x-chunk="dashboard-02-chunk-1"
            >
                <div className="flex flex-col items-center gap-1 text-center">
                    <Header title="Quiz Results" subtitle={successMessage} />
                    {score > 4 && (
                        <TypographyH3 className="text-left">
                            Congrats you got all the questions right.
                        </TypographyH3>
                    )}
                    <div className="flex flex-col gap-y-6 px-20">
                        <h3 className="text-left font-bold">
                            Tips for spotting scams:
                        </h3>
                        <div>
                            <TypographyBlockquote className="py-2 text-slate-600">
                                <ul className="list-disc  text-left">
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
                                        Be cautious of messages creating a sense
                                        of urgency or pressure.
                                    </li>
                                    <li>
                                        Verify the sender&apos;s identity
                                        through official channels before taking
                                        any action.
                                    </li>
                                    <li>
                                        Do not click suspicious looking links.
                                    </li>
                                </ul>
                            </TypographyBlockquote>
                            <span className="text-xs text-muted-foreground">
                                https://help.instagram.com/514187739359208?helpref=faq_content
                            </span>
                        </div>
                        <Button className="mb-8" onClick={restartQuiz}>
                            Restart Quiz
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    const currentQuestionData = questions[currentQuestion]

    return (
        <div className="flex justify-center w-full">
            <QuizCard
                currentQuestion={currentQuestion}
                qLength={questions.length}
                msg={currentQuestionData.text}
                handleAnswer={handleAnswer}
            />
        </div>
        // <p>
        //     {nextjsData.name} - {nextjsData.full_name}
        // </p>
    )
}

export default Quiz
