'use client'

import { usePathname, useRouter } from 'next/navigation'
import Footer from '@/components/footer/footer-four'
import { Button } from '../ui/button'

export default function GoBack() {
    const router = useRouter()

    const pathname = usePathname()
    const isGamePage = pathname === '/game'

    if (!isGamePage) {
        return null
    }

    return (
        <div className="fixed top-8 left-8">
            <Button variant="outline" onClick={() => router.back()}>
                {'<-'} Go Back
            </Button>
        </div>
    )
}
