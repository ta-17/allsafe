'use client'

import { usePathname, useRouter } from 'next/navigation'
import Footer from '@/components/footer/footer-four'
import { Button } from '../ui/button'
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react'
import { useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { gameData } from '@/data/gameData'

export default function AudioControl() {
    const router = useRouter()
    const pathname = usePathname()
    const isGamePage = pathname === '/game'

    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState<number>(50)
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const changeVolume = (delta: number) => {
        if (audioRef.current) {
            const newVolume = Math.max(0, Math.min(100, volume + delta))
            setVolume(newVolume)
            audioRef.current.volume = newVolume / 100

            if (newVolume === 0) {
                setIsMuted(true)
                audioRef.current.muted = true
            } else if (isMuted) {
                setIsMuted(false)
                audioRef.current.muted = false
            }
        }
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100
            audioRef.current.play()
            setIsPlaying(true)
        }
    }, [])

    if (!isGamePage) {
        return null
    }

    const VolumeIcon = () => {
        if (isMuted || volume === 0) return <VolumeX />
        if (volume < 33) return <Volume />
        if (volume < 67) return <Volume1 />
        return <Volume2 />
    }

    return (
        <div className="flex items-center space-x-2">
            <audio ref={audioRef} src="/music.mp3" loop={true} preload="auto" />

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
