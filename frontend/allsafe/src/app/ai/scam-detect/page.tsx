import Header from '@/components/hero/header-two'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function ScamDetect() {
    return (
        <div
            className="flex items-center justify-center h-screen w-full"
            x-chunk="dashboard-02-chunk-1"
        >
            <div className="flex flex-col justify-around items-center gap-1 p-8 text-center">
                <Input />
                <Button className="mt-4 pr-4">Submit</Button>
            </div>
        </div>
    )
}
