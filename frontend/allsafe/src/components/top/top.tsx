'use client'

import React from 'react'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'

export default function Top() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            <Button
                className="fixed bottom-8 right-8"
                variant="outline"
                size="icon"
                onClick={scrollToTop}
            >
                <ChevronUp />
            </Button>
        </div>
    )
}
