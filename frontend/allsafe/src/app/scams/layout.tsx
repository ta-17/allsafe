import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div className="flex flex-col gap-y-16 p-6">{children}</div>
}
