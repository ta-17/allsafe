'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Footer from '@/components/footer/footer-four'
import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'
import useResizeObserver from 'use-resize-observer'

export default function ScrollDown() {
    const router = useRouter()

    const pathname = usePathname()
    const isGamePage = pathname === '/game'

    const [scrolled, setScrolled] = useState(true)
    const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>()

    const handleScroll = () => {
        const isScrolled = window.scrollY < window.innerHeight / 2
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled)
        }
    }
    window.addEventListener('scroll', handleScroll)

    const scrollToDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    if (isGamePage) {
        return null
    }

    return (
        <div ref={ref} className="flex fixed bottom-0 pb-6 w-full">
            {scrolled && (
                <Button
                    size="icon"
                    variant="secondary"
                    className="animate-bounce p-2 bottom-8 m-auto w-12 h-12 rounded-full"
                    onClick={() => scrollToDown()}
                >
                    <ArrowDown />
                </Button>
            )}
        </div>
    )
}
