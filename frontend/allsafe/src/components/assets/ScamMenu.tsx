import React from 'react'
import Link from 'next/link'

interface ScamMenuProps {
    imageSrc: string
    altText: string
    heading: string
    description: string
    link: string // Prop to specify the URL to navigate to
}

const ScamMenu: React.FC<ScamMenuProps> = ({
    imageSrc,
    altText,
    heading,
    description,
    link,
}) => {
    return (
        <Link href={link}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.2s ease-in-out',
                    cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                        '0px 4px 6px rgba(0, 0, 0, 0.1)')
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                        '0px 1px 2px rgba(0, 0, 0, 0.1)')
                }
            >
                <div>
                    <img
                        src={imageSrc}
                        alt={altText}
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '4px',
                            marginBottom: '16px',
                        }}
                    />
                    <h2
                        style={{
                            fontSize: '1.5rem',
                            margin: '8px 0',
                            color: '#333',
                            textAlign: 'center',
                        }}
                    >
                        {heading}
                    </h2>
                </div>
                <p
                    style={{
                        fontSize: '1rem',
                        color: '#555',
                        lineHeight: '1.5',
                        textAlign: 'center',
                    }}
                >
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default ScamMenu
