import React from 'react'

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { TypographyLead } from '@/typography/lead'

interface CardProps {
    asset: React.ReactNode
    title: string
    body: string
}

const Card: React.FC<CardProps> = ({ asset, title, body }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '16px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                gap: '16px',
                alignItems: 'center',
                width: '100%',
                boxSizing: 'border-box',
            }}
            className="h-full"
        >
            {asset}
            <div
                style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
                <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                    {title}
                </h2>
                <p
                    style={{
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#555',
                    }}
                >
                    {body}
                </p>
            </div>
        </div>
    )
}

interface ScamTipsProps {
    cards: CardProps[]
}

const ScamTips = ({ cards }: { cards: any }) => {
    return (
        <div className="flex flex-col w-full">
            <TypographyLead className={'mt-8'}>Tips to avoid:</TypographyLead>
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="self-center w-60 md:w-3/4 lg:2/3"
            >
                <CarouselContent>
                    {cards.map(
                        (
                            card: {
                                asset:
                                    | string
                                    | number
                                    | bigint
                                    | boolean
                                    | React.ReactElement<
                                          any,
                                          | string
                                          | React.JSXElementConstructor<any>
                                      >
                                    | Iterable<React.ReactNode>
                                    | React.ReactPortal
                                    | Promise<React.AwaitedReactNode>
                                    | null
                                    | undefined
                                title: string
                                body: string
                            },
                            index: React.Key | null | undefined
                        ) => (
                            <CarouselItem key={index} className="md:min-h-36">
                                {/* <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card> */}
                                <Card
                                    key={index}
                                    asset={card.asset}
                                    title={card.title}
                                    body={card.body}
                                />
                            </CarouselItem>
                        )
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default ScamTips
