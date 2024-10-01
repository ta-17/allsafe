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

export function PopoverHelp({ className }: { className?: string }) {
    const [popover, openPopover] = React.useState(false)

    return (
        <Popover open={popover} onOpenChange={openPopover}>
            <PopoverTrigger
                asChild
                className={className}
                onClick={() => openPopover(!popover)}
            >
                {/* <Button variant="outline">Open popover</Button> */}
                <p className="cursor-pointer hover:text-slate-300">Help</p>
            </PopoverTrigger>
            <PopoverContent className="w-52">
                <PopoverArrow className="fill-white border-0" />
                <div className="grid gap-4" onClick={() => openPopover(false)}>
                    <Link href="/quiz" className="hover:text-gray-400">
                        Report a scam.
                    </Link>
                    <Link href="/game" className="hover:text-gray-400">
                        Get help.
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}
