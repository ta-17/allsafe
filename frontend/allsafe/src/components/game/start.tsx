import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

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

    const scenario = () => {
        return (
            <div>
                {scenariosKeys.map((scenario, index) => (
                    <Card
                        key={index}
                        onClick={() => {
                            selectScenario(index + 1)
                            onStartMenuProgress(1)
                        }}
                    >
                        <CardContent>
                            <p>{scenario}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    const platform = () => {
        return (
            <div>
                <Button onClick={() => onStartMenuProgress(0)}>
                    {'<-'} Go back
                </Button>
                {platformKeys.map((platform, index) => (
                    <Card
                        key={index}
                        onClick={() => {
                            selectPlatform(index + 1)
                            onStartMenuProgress(1)
                            start(true)
                        }}
                    >
                        <CardContent>
                            <p>{platform}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1>Game</h1>
            <span className="text-muted-foreground">Choose a scenario</span>
            {startMenuProgress === 0 && scenario()}
            {startMenuProgress === 1 && platform()}
        </div>
    )
}
