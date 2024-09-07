// 'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const ReturnButton: React.FC = () => {
    const router = useRouter()

    return (
        <Button variant="secondary" onClick={() => router.back()}>
            {'<-'} Go Back
        </Button>
    )
}

export default ReturnButton
