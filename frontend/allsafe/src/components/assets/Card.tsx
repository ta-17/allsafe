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

export default Card
