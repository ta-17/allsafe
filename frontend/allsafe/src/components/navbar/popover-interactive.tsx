import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { PopoverArrow } from '@radix-ui/react-popover'
import { cn } from '@/libs/utils'
import React from 'react'

export function PopoverInteractive({ className }: { className?: string }) {
    const [popover, openPopover] = React.useState(false)

    return (
        <Popover open={popover} onOpenChange={openPopover}>
            <PopoverTrigger
                asChild
                className={className}
                onClick={() => openPopover(!popover)}
            >
                {/* <Button variant="outline">Open popover</Button> */}
                <p className="cursor-pointer hover:text-slate-300">
                    Playground
                </p>
            </PopoverTrigger>
            <PopoverContent className="w-40">
                <PopoverArrow className="fill-white border-0" />
                <div className="grid gap-4" onClick={() => openPopover(false)}>
                    <Link
                        href="/quiz"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                        Quiz
                    </Link>
                    <Link
                        href="/game"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                        Game
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}
