import React from 'react'

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

const ScamTips: React.FC<ScamTipsProps> = ({ cards }) => {
    return (
        <div style={{ boxSizing: 'border-box', width: '100%' }}>
            <div style={{ marginBottom: '16px' }}>
                <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
                    Tips to avoid:
                </h1>
                {/* <h2 style={{ margin: 0, fontSize: '18px', color: '#555' }}>
                    Subheading
                </h2> */}
            </div>
            <div className="flex flex-wrap h-40 gap-16">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '1 1 calc(33% - 20px)', // Adjust the card to take up 33% of the row minus the gap
                            boxSizing: 'border-box',
                            maxWidth: 'calc(33% - 20px)',
                        }}
                        className=""
                    >
                        <Card
                            asset={card.asset}
                            title={card.title}
                            body={card.body}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScamTips
