import Image from 'next/image'
import React from 'react'

interface ScamDetailProps {
    imageSrc: string
    altText: string
    heading: string
    subheading: string
    paragraphs: string[]
}

const ScamDetail: React.FC<ScamDetailProps> = ({
    imageSrc,
    altText,
    heading,
    subheading,
    paragraphs,
}) => {
    return (
        <div
            style={{
                boxSizing: 'border-box',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
            }}
        >
            {/* Image Section */}
            <div
                style={{
                    flex: '1 1 50%',
                    boxSizing: 'border-box',
                }}
            >
                <Image
                    src={imageSrc}
                    alt={altText}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '90%', height: 'auto' }} // optional
                    className="w-full"
                />
            </div>

            {/* Text Section */}
            <div
                style={{
                    flex: '1 1 50%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h1
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                    }}
                >
                    {heading}
                </h1>
                <h2
                    style={{
                        fontSize: '18px',
                        color: '#555',
                        marginBottom: '16px',
                    }}
                >
                    {subheading}
                </h2>
                {paragraphs.map((text, index) => (
                    <p
                        key={index}
                        style={{ fontSize: '16px', lineHeight: '1.5' }}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default ScamDetail
