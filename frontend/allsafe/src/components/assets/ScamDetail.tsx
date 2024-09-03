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
        <div className="flex flex-col items-stretch md:items-center gap-x-16 lg:flex-row lg:items-start md:justify-start">
            {/* Image Section */}

            <div className="md:flex-1 md:w-full">
                <Image
                    src={imageSrc}
                    alt={altText}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%' }} // optional
                    className=""
                />
            </div>
            {/* Text Section */}
            <div className="md:flex-1">
                <h1
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
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
