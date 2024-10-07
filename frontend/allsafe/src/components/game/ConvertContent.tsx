import React from 'react'

interface ConvertContentProps {
    text: string
}

const ConvertContent: React.FC<ConvertContentProps> = ({ text }) => {
    // Split text by newlines (\n) and handle **bold** markers
    const formattedText = text.split('\n').map((line, index) => {
        const parts = line.split(/(\*\*.*?\*\*)/).map((part, partIndex) => {
            // Convert **bold** parts to <strong>
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={partIndex}>{part.slice(2, -2)}</strong>
            }
            return part
        })

        return (
            <span key={index}>
                {parts}
                <br /> {/* Add line breaks */}
            </span>
        )
    })

    return <>{formattedText}</>
}

export default ConvertContent
