import Header from '@/components/hero/header-two'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ScamDetect() {
    return (
        <div
            className="flex items-center justify-center h-screen w-full"
            x-chunk="dashboard-02-chunk-1"
        >
            <div className="flex flex-col justify-around items-center gap-1 p-8 text-center">
                <Header
                    title="Spot the Scam: How Sharp Are Your Senses?"
                    subtitle="Test Your Ability to Identify Online Scams and Stay Safe in the Digital World"
                />
                <Button className="mt-4 pr-4">
                    <Link href="/quiz/ig-scams">Get Started {'->'}</Link>
                </Button>
            </div>
        </div>
    )
}
