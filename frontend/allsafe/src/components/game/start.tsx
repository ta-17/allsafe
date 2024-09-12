import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { TypographyH3 } from '@/typography/h3'
import { TypographyH2 } from '@/typography/h2'

export default function Start({
    scenarios,
    selectScenario,
    platforms,
    selectPlatform,
    start,
}: any) {
    const [startMenuProgress, onStartMenuProgress] = useState(0)

    const scenariosKeys = Object.keys(scenarios).filter((key) =>
        isNaN(Number(key))
    )
    const platformKeys = Object.keys(platforms).filter((key) =>
        isNaN(Number(key))
    )

    const homepage = () => {
        return (
            <div className="flex flex-col items-center gap-y-12">
                <TypographyH1 className="text-center">
                    Welcome to AllSafe's in house visual novel game.
                </TypographyH1>
                <TypographyLead className="text-center text-3xl">
                    Start new game
                </TypographyLead>
                <Button
                    className="animate-bounce"
                    size="lg"
                    onClick={() => onStartMenuProgress(1)}
                >
                    Play
                </Button>
            </div>
        )
    }

    const scenario = () => {
        return (
            <div className="flex flex-col w-full max-w-4xl gap-y-16">
                <div>
                    <TypographyH2 className="text-center border-0">
                        Choose a scenario
                    </TypographyH2>
                    <TypographyLead className="text-center">
                        These scenarios will determine what the narrative of the
                        game will be.
                    </TypographyLead>
                </div>
                <div className="flex flex-col gap-y-6">
                    {scenariosKeys.map((scenario, index) => (
                        <Card
                            key={index}
                            onClick={() => {
                                selectScenario(index + 1)
                                onStartMenuProgress(1)
                                start(true)
                            }}
                        >
                            <CardHeader>
                                <CardTitle>{scenario}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    // const platform = () => {
    //     return (
    //         <div>
    //             <Button onClick={() => onStartMenuProgress(0)}>
    //                 {'<-'} Go back
    //             </Button>
    //             {platformKeys.map((platform, index) => (
    //                 <Card
    //                     key={index}
    //                     onClick={() => {
    //                         selectPlatform(index + 1)
    //                         onStartMenuProgress(1)
    //                         start(true)
    //                     }}
    //                 >
    //                     <CardContent>
    //                         <p>{platform}</p>
    //                     </CardContent>
    //                 </Card>
    //             ))}
    //         </div>
    //     )
    // }

    return (
        <div className="flex flex-col self-center justify-self-center items-center justify-center w-full h-full">
            {startMenuProgress === 0 && homepage()}
            {startMenuProgress === 1 && scenario()}
            {/* {startMenuProgress === 1 && platform()} */}
        </div>
    )
}
