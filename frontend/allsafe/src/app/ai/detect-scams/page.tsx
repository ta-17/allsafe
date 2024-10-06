'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useEffect, useRef, useState } from 'react'
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
import { useDetectScamStore } from '@/data/store/detect-scam'
import { getAdditionalInfo } from '@/actions/detect-scam-aditional-info'
import ScamDetectHindsight from '@/components/ai/hindsight'
import { lab } from 'd3'

const Breakdown = [
    { factor: 'Suspicious links', present: true },
    { factor: 'Phone number', present: false },
    { factor: 'Email address', present: true },
    { factor: 'Bank account', present: true },
]
export default function ScamDetect() {
    const ref = useRef<HTMLFormElement>(null)

    const [msg, setMsg] = useState<string>(
        'Congratulations! You&apos;ve won a $1,000 Walmart gift bard. Go to http://bit.ly/123456 tp claim now.'
    )
    const [loading, setLoading] = useState<boolean>(false)
    const [showMore, setShowMore] = useState<boolean>(false)
    const [submit, setSubmit] = useState<boolean>(false)
    const [result, setResult] = useState<any | null>(null)
    const [addResult, setAddResult] = useState<any | null>({})
    const [error, setError] = useState<string | null>(null)

    const sharedMsg = useDetectScamStore((state) => state.sharedMsg)
    const sharedSubmit = useDetectScamStore((state) => state.sharedSubmit)

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent the default form submission behavior
        setLoading(true)
        setError(null)

        try {
            const msgData = await detectScam(msg) // API call
            const additionalInfoData = await getAdditionalInfo(msg)
            setResult(msgData)
            setAddResult(additionalInfoData)
            setSubmit(true) // Change this to true when the form is submitted successfully
        } catch (error) {
            setError(
                'An error occurred while processing your request. Please try again.'
            )
        } finally {
            setLoading(false)
        }
    }

    const submitFromHomepage = async () => {
        setLoading(true)
        setError(null)

        setMsg(sharedMsg)

        try {
            const msgData = await detectScam(sharedMsg) // API call
            const additionalInfoData = await getAdditionalInfo(sharedMsg)
            setResult(msgData)
            setAddResult(additionalInfoData)
            setSubmit(true)
            console.log('Result: ', msgData)
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
        if (result === null || result === undefined) return '0'
        if (result.probability == undefined) return '0'
        const float = parseFloat(result.probability.toFixed(4))
        return (float * 100).toFixed(2)
    }

    useEffect(() => {
        if (sharedSubmit === true) submitFromHomepage()
    }, [sharedMsg, sharedSubmit])

    // Dynamically load the external script when the component mounts
    useEffect(() => {
        const script = document.createElement('script')
        script.src = '/visualisation/script.js'
        script.type = 'module'
        document.body.appendChild(script)

        return () => {
            // Remove the script when the component unmounts
            document.body.removeChild(script)
        }
    }, [])

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
                            <span className="flex justify-center w-full text-center">
                                Our in-house AI model is trained to detect
                                online scams. Just enter the text and hit
                                submit.
                            </span>
                        </div>
                        <section
                            id="user-input-section"
                            className="text-center w-full p-8  rounded-lg mt-12"
                        >
                            <form
                                id="scam-input-form"
                                className="flex flex-col items-center space-y-4"
                                onSubmit={handleSubmit}
                            >
                                <Textarea
                                    id="scam-experience"
                                    name="scam-experience"
                                    // placeholder="Please put your scam text here"
                                    value={msg}
                                    placeholder="Enter message here"
                                    onChange={(e) => setMsg(e.target.value)}
                                    className="w-full max-h-60"
                                />
                                <section
                                    id="model-bar-chart-section"
                                    className="text-center w-full p-8  rounded-lg mt-12"
                                >
                                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
                                        Word Frequency Bar Chart
                                    </h2>
                                    {/* <!-- Container for the chart --> */}
                                    <div
                                        id="model-bar-chart"
                                        className="chart w-full h-[400px]  rounded-lg"
                                    ></div>
                                </section>

                                {loading ? (
                                    <ButtonLoading />
                                ) : (
                                    <Button>Submit</Button>
                                )}
                            </form>
                        </section>
                        {/* <!-- Bar Chart Section --> */}
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
                                                <TableHead className="flex justify-center w-full text-center">
                                                    Present in message
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    Link(s)
                                                </TableCell>
                                                <TableCell className="flex justify-center w-full text-center">
                                                    {addResult['link'] ? (
                                                        <Check className="text-green-400" />
                                                    ) : (
                                                        <X className="text-red-500" />
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                            {/* {result.label === 'scam' && ( */}
                                            <TableRow>
                                                <TableCell className="pl-8 font-medium text-muted-foreground">
                                                    Suspicious Link Present
                                                </TableCell>
                                                <TableCell className="flex justify-center w-full text-center">
                                                    {addResult['sus_url'] ? (
                                                        <Check className="text-green-400" />
                                                    ) : (
                                                        <X className="text-red-500" />
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                            {/* )} */}
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    Phone number
                                                </TableCell>
                                                <TableCell className="flex justify-center w-full text-center">
                                                    {addResult['phone'] ? (
                                                        <Check className="text-green-400" />
                                                    ) : (
                                                        <X className="text-red-500" />
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    Email address
                                                </TableCell>
                                                <TableCell className="flex justify-center w-full text-center">
                                                    {addResult['email'] ? (
                                                        <Check className="text-green-400" />
                                                    ) : (
                                                        <X className="text-red-500" />
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    Bank account
                                                </TableCell>
                                                <TableCell className="flex justify-center w-full text-center">
                                                    {addResult[
                                                        'bank_account'
                                                    ] ? (
                                                        <Check className="text-green-400" />
                                                    ) : (
                                                        <X className="text-red-500" />
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <section
                                        id="model-bar-chart-section"
                                        className="text-center w-full p-8 bg-gray-50 rounded-lg mt-12"
                                    >
                                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
                                            Word Frequency Bar Chart
                                        </h2>
                                        {/* Container for the D3 chart */}
                                        <div
                                            id="model-bar-chart"
                                            className="chart w-full h-[400px] bg-gray-50 rounded-lg"
                                        ></div>
                                    </section>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Button
                            variant="outline"
                            onClick={() => setSubmit(false)}
                        >
                            Check another message?
                        </Button>

                        {/* <ScamDetectHindsight msg={msg} /> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
