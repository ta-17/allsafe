import { cn } from '@/libs/utils'

export function TypographyLead({
    children,
    className,
}: {
    children: any
    className?: string
}) {
    return (
        <p className={cn('text-xl text-muted-foreground', className)}>
            {children}
        </p>
    )
}
