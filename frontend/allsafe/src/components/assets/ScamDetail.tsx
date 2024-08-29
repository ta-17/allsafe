import Image from 'next/image'
import React from 'react'
import ScamTips from './ScamTips'

interface ScamDetailProps {
    imageSrc: any
    altText: string
    heading: string
    subheading: string
    paragraphs: string[]
    cardData: any | null
}

const ScamDetail: React.FC<ScamDetailProps> = ({
    imageSrc,
    altText,
    heading,
    subheading,
    paragraphs,
    cardData,
}) => {
    return (
        <div className="flex flex-col items-center gap-x-16 md:flex-row md:items-start md:justify-start max-w-screen-xl">
            {/* Image Section */}

            <Image
                src={imageSrc}
                alt={altText}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '90%', height: 'auto' }} // optional
                className="w-full"
            />

            {/* Text Section */}
            <div className="flex flex-col w-11/12 px-1">
                <h1
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                    }}
                >
                    {heading}
                </h1>
                {subheading !== 'Subheading' && (
                    <h2
                        style={{
                            fontSize: '18px',
                            color: '#555',
                            marginBottom: '16px',
                        }}
                    >
                        {subheading}
                    </h2>
                )}
                {paragraphs.map((text, index) => (
                    <p
                        key={index}
                        style={{ fontSize: '16px', lineHeight: '1.5' }}
                        className="w-4/5 md:w-full"
                    >
                        {text}
                    </p>
                ))}
                <ScamTips cards={cardData} />
            </div>
        </div>
    )
}

export default ScamDetail
