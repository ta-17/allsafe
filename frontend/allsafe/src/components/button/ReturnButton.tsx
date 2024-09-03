import React from 'react'
import Link from 'next/link'

interface ReturnButtonProps {
    href: string
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ href }) => {
    return (
        <Link href={href}>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Go Back
            </div>
        </Link>
    )
}

export default ReturnButton
