'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/footer/footer-four'

export default function FooterWrapper() {
    const pathname = usePathname()
    const isQuizPage = pathname === '/quiz'
    const isGamePage = pathname === '/game'

    if (isQuizPage || isGamePage) {
        return null
    }

    return <Footer />
}
