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
        <div className="flex items-center space-x-2">
            <audio
                ref={audioRef}
                src="/Evening Mood.ogg"
                loop={true}
                preload="auto"
            />

            <Button
                className="flex items-center justify-center"
                variant="outline"
                onClick={toggleMute}
            >
                <VolumeIcon />
            </Button>

            <Button variant="outline" onClick={() => changeVolume(-10)}>
                -
            </Button>

            <span className="w-8 text-center">{volume}</span>

            <Button variant="outline" onClick={() => changeVolume(10)}>
                +
            </Button>
        </div>
    )
}
