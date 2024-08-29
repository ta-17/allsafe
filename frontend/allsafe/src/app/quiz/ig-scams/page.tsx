'use client'

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/footer/footer-four'
import ScamMenu from '@/components/assets/ScamMenu'
import Header from '@/components/hero/header-two'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import QuizCard from '@/components/quiz/quiz'
import { title } from 'process'
import Head from 'next/head'
import { TypographyLead } from '@/typography/lead'
import useSWR from 'swr'
import Quiz from '@/components/quiz/quiz-homepage'

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())

export default function ScamInfo({}) {
    const [quizPos, setQuizPos] = React.useState(0)
    const [answersRight, setAnswersRight] = React.useState(0)
    const [answers, setAnswers] = React.useState([])

    const successMessage = 'You got ' + answersRight + ' of 5'

    const { data, error, isLoading } = useSWR(
        'https://api.github.com/repos/vercel/next.js',
        fetcher
    )

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(data)

    // render data
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />
                {/* 
                {quizPos < 4 ? (
                    <div
                        className="flex flex-1 flex-col items-center justify-around w-full"
                        x-chunk="dashboard-02-chunk-1"
                    >
                        {quizPos < 5 && (
                            <div>
                                <TypographyLead className="">
                                    {quizPos} / 5
                                </TypographyLead>
                            </div>
                        )}
                        {quizPos < 5 && (
                            <QuizCard
                                key={quizPos}
                                title={quizPos.toString()}
                                msg={'Scam msg'}
                                scam={quizPos / 2 === 0 ? 1 : 0}
                                answersRight={answersRight}
                                setAnswersRight={setAnswersRight}
                                answers={answers}
                                setAnswers={setAnswers}
                                quizPos={quizPos}
                                setQuizPos={setQuizPos}
                            />
                        )}
                        {quizPos > 4 && (
                            <div className="flex flex-row gap-4 w-full h-full items-center justify-center">
                                <Header
                                    title="Results"
                                    subtitle={successMessage}
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div
                        className="flex flex-1 flex-col items-center justify-around w-full"
                        x-chunk="dashboard-02-chunk-1"
                    >
                        <Header title="Results" subtitle={successMessage} />{' '}
                        <div>
                            <p>Message</p>
                        </div>
                    </div>
                )} */}
                <Quiz />
            </main>
            <Footer />
        </div>
    )
}
