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
        <div style={{ boxSizing: 'border-box', width: '100%' }}>
            <div>
                <TypographyLead className={'mt-8'}>
                    Tips to avoid:
                </TypographyLead>
            </div>
            <div className="flex flex-wrap w-full h-40 gap-16">
                <Carousel
                    opts={{
                        align: 'start',
                    }}
                    className="w-full max-w-lg"
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
                                <CarouselItem
                                    key={index}
                                    // className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="p-1">
                                        {/* <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card> */}{' '}
                                        <Card
                                            key={index}
                                            asset={card.asset}
                                            title={card.title}
                                            body={card.body}
                                        />
                                    </div>
                                </CarouselItem>
                            )
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default ScamTips
