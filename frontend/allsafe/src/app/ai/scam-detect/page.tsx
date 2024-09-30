'use client'

import { useState } from 'react'
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

const Breakdown = [
    { factor: 'Suspicious links', present: true },
    { factor: 'Phone number', present: false },
    { factor: 'Email address', present: true },
    { factor: 'Bank account', present: true },
]

export default function ScamDetect() {
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [result, setResult] = useState(0)

    const handleSubmit = () => {
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            setSubmit(true)
            setResult(Math.floor(Math.random() * 100))
        }, 1500)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <AnimatePresence mode="wait">
                {!submit ? (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-6 w-full max-w-2xl"
                    >
                        <TypographyH1>Is it a scam?</TypographyH1>
                        <span className="text-center">
                            Our in-house AI model is trained to detect online
                            scams. Just enter the text and hit submit.
                        </span>
                        <Textarea
                            value={msg}
                            placeholder="Enter message here"
                            onChange={(e) => setMsg(e.target.value)}
                            className="w-full max-h-60"
                        />
                        {loading ? (
                            <ButtonLoading />
                        ) : (
                            <Button type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-6 w-full max-w-2xl"
                    >
                        <TypographyH3 className="">
                            The likelihood of the message being a scam is{' '}
                            <strong>{result}%</strong>
                        </TypographyH3>
                        <Button onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Show less' : 'Show more'}
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
                        <Button onClick={() => setSubmit(false)}>
                            Check another message
                        </Button>
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
