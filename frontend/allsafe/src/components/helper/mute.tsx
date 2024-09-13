'use client'

import { usePathname, useRouter } from 'next/navigation'
import Footer from '@/components/footer/footer-four'
import { Button } from '../ui/button'
import { Volume1, VolumeOff } from 'lucide-react'
import { useScroll } from 'framer-motion'
import { useState } from 'react'

export default function Mute() {
    const router = useRouter()

    const [mute, onMute] = useState(false)

    const pathname = usePathname()
    const isGamePage = pathname === '/game'

    if (!isGamePage) {
        return null
    }

    return (
        <div className="fixed top-8 right-8 z-10">
            <Button variant="outline" onClick={() => onMute(!mute)}>
                {mute ? <Volume1 /> : <VolumeOff />}
            </Button>
        </div>
    )
}
