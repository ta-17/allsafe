'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/footer/footer-four'

export default function FooterWrapper() {
    const pathname = usePathname()
    const isQuizPage = pathname === '/quiz'

    if (isQuizPage) {
        return null
    }

    return <Footer />
}
