import GoBack from '@/components/helper/go-back'
import Mute from '@/components/helper/mute'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-1 flex-col w-full">
            <nav className="flex justify-between p-6">
                <GoBack />
                <Mute />
            </nav>
            <div className="flex flex-1 justify-center">{children}</div>
        </div>
    )
}
