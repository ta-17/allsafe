'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'

export default function Top() {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const isScrolled = window.scrollY > window.screen.height / 2
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled)
        }
    }
    window.addEventListener('scroll', handleScroll)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {scrolled && (
                <Button
                    className="fixed bottom-6 right-6"
                    variant="outline"
                    size="icon"
                    onClick={scrollToTop}
                >
                    <ChevronUp />
                </Button>
            )}
        </>
    )
}
