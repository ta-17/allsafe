'use client'

import Image from 'next/image'
import NavBar from '@/components/navbar/NavBar'
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
import Quiz from '@/components/quiz/quiz-homepage'

export default function ScamInfo({}) {
    // render data
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <NavBar />
                <Quiz />
            </main>
            <Footer />
        </div>
    )
}
