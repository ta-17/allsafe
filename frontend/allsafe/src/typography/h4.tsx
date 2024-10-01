import { cn } from '@/libs/utils'

export function TypographyH4({
    children,
    className,
}: {
    children: any
    className: string
}) {
    return (
        <h4
            className={cn(
                'scroll-m-20 text-xl font-semibold tracking-tight',
                className
            )}
        >
            {children}
        </h4>
    )
}
