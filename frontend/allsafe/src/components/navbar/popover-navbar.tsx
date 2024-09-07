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
import { cn } from '@/lib/utils'
import React from 'react'

export function PopoverDemo({ className }: { className?: string }) {
    const [popover, openPopover] = React.useState(false)

    return (
        <Popover open={popover} onOpenChange={openPopover}>
            <PopoverTrigger
                asChild
                className={className}
                onClick={() => openPopover(!popover)}
            >
                {/* <Button variant="outline">Open popover</Button> */}
                <p className="cursor-pointer hover:text-slate-300">Resources</p>
            </PopoverTrigger>
            <PopoverContent className="w-40">
                <PopoverArrow className="fill-white border-0" />
                <div className="grid gap-4" onClick={() => openPopover(false)}>
                    <Link href="/data-sources" className="hover:text-gray-400">
                        Data Sources
                    </Link>
                    <Link
                        href="/resources/news"
                        className="hover:text-gray-400"
                    >
                        News
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}
