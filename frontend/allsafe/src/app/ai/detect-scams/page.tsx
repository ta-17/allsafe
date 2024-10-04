'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TypographyH1 } from '@/typography/h1'
import { Textarea } from '@/components/ui/textarea'
import { ButtonLoading } from '@/components/skeleton/loading-button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { TypographyH3 } from '@/typography/h3'
import { detectScam } from '@/actions/detect-scam'
import { AlertCircle, Check, ChevronDown, ChevronUp, X } from 'lucide-react'
import { cn } from '@/libs/utils'
import Link from 'next/link'

const Breakdown = [
    { factor: 'Suspicious links', present: true },
    { factor: 'Phone number', present: false },
    { factor: 'Email address', present: true },
    { factor: 'Bank account', present: true },
]

export default function ScamDetect() {
    const [msg, setMsg] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [showMore, setShowMore] = useState<boolean>(false)
    const [submit, setSubmit] = useState<boolean>(false)
    const [result, setResult] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async () => {
        setLoading(true)
        setError(null)

        try {
            const data = await detectScam(msg) // API call
            setResult(data)
            setSubmit(true)
            console.log('Result: ', data)
        } catch (error) {
            setError(
                'An error occurred while processing your request. Please try again.'
            )
            setSubmit(false)
        } finally {
            setLoading(false)
        }
    }

    const percent = () => {
        if (!result) return 0
        const float = parseFloat(result.probability.toFixed(4))
        return (float * 100).toFixed(2)
    }

    return (
        <div
            className={cn(
                'grid min-h-screen p-6 w-full',
                error && 'grid-rows-[max-content_1fr]'
            )}
            onClick={() => setError(null)}
        >
            {error !== null && (
                <Alert variant="destructive" className="self-start">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <AnimatePresence mode="wait">
                {!submit ? (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col self-center justify-self-center gap-12 w-full max-w-4xl"
                    >
                        <div className="flex flex-col items-center gap-6 w-full">
                            <TypographyH1>Is it a scam?</TypographyH1>
                            <span className="text-center">
                                Our in-house AI model is trained to detect
                                online scams. Just enter the text and hit
                                submit.
                            </span>
                        </div>
                        <Textarea
                            value={msg}
                            placeholder="Enter message here"
                            onChange={(e) => setMsg(e.target.value)}
                            className="w-full max-h-60"
                        />
                        {loading ? (
                            <ButtonLoading />
                        ) : (
                            <Button onClick={handleSubmit}>Submit</Button>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center self-center justify-self-center gap-6 w-full max-w-4xl"
                    >
                        <TypographyH3 className="">Result</TypographyH3>
                        <div>
                            {result.label === 'scam' ? (
                                <X className="text-red-500 w-56 h-56" />
                            ) : (
                                <Check className="text-green-400 w-56 h-56" />
                            )}
                        </div>
                        <TypographyH3 className="">
                            The likelihood of the message being{' '}
                            {result.label === 'scam' ? 'a scam' : 'not a scam'}{' '}
                            is <strong>{percent()}%</strong>
                        </TypographyH3>
                        <Button
                            variant="ghost"
                            onClick={() => setShowMore(!showMore)}
                        >
                            <p className="pr-2">
                                {showMore ? 'Show less' : 'Show more'}
                            </p>
                            {showMore ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                        <AnimatePresence>
                            {showMore && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full overflow-hidden"
                                >
                                    <TypographyH3 className="pb-2">
                                        What we found:
                                    </TypographyH3>
                                    <span className="text-muted-foreground block mb-4">
                                        These factors suggest that the message
                                        could be a scam.
                                    </span>
                                    <Table>
                                        <TableCaption>
                                            Presence of suspicious links or
                                            other elements.
                                        </TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-3/4">
                                                    Factor
                                                </TableHead>
                                                <TableHead className="text-center">
                                                    Present in message
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {Breakdown.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">
                                                        {item.factor}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {item.present
                                                            ? 'Yes'
                                                            : 'No'}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Button
                            variant="outline"
                            onClick={() => setSubmit(false)}
                        >
                            Check another message
                        </Button>
                        {/*
                        <div>
                            <TypographyH3 className="text-center">
                                Is it as scam?
                            </TypographyH3>
                            <p>
                                Go to the help center to learn more about
                                reporting or what to do if you or someone you
                                know fell victim to it.
                            </p>
                            <Button variant="secondary" asChild>
                                <Link href="/help">Help Center</Link>
                            </Button>
                        </div> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
// To effectively communicate the results from your AI scam detector, you can combine clarity, visual elements, and actionable feedback. Here's a structured approach:

// Clear Percentage Representation: Instead of just showing "0%" or "100%", use a scale with specific ranges to offer more nuanced feedback:

// 0-20%: "This message seems safe."
// 21-50%: "Caution: This message might contain suspicious elements."
// 51-80%: "Warning: This message has signs of being a scam."
// 81-100%: "Danger: This message is highly likely to be a scam."
// Color-Coded Indicators: Use a color gradient or distinct colors to match the percentage scale for quick visual understanding:

// Green (0-20%): Safe
// Yellow (21-50%): Caution
// Orange (51-80%): Warning
// Red (81-100%): Danger
// Visual Elements: Include a progress bar or gauge chart to visually represent the percentage, helping users grasp the risk level at a glance.

// Actionable Advice:

// For higher scam likelihoods (e.g., 50%+), provide advice such as "Do not respond or share personal information" or links to resources on how to handle scams.
// For lower likelihoods, a simple reassurance message like "Proceed with caution" can suffice.
// Explanations: Provide a brief explanation, especially for higher percentages, highlighting which elements in the message seem suspicious (if available from your AI model).

// By combining percentage-based feedback, visual cues, and practical advice, users will get a clearer understanding of the potential threat level.
