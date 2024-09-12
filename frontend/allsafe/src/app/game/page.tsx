'use client'

import BranchingNarrativeComponent from '@/components/game/branchingnarrativecomponent'
import QuestionAnswer from '@/components/game/question-answer'
import Start from '@/components/game/start'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useEffect, useState } from 'react'

enum scenarios {
    'Buying or Selling' = 1,
    'Dating and Romance',
    'Gain Personal Information',
    'Investment',
    'Employment',
}

enum platforms {
    'Facebook',
    'Instagram',
    'Snapchat',
}

export default function Game() {
    const [started, onStarted] = useState(false)
    const [progress, onProgress] = useState(0)
    const [scenario, onScenario] = useState(0)
    const [platform, onPlatform] = useState(0)

    useEffect(() => {
        console.info(scenario)
        if (started === true) {
            onProgress(2)
        }
        console.info('Started', started)
    }, [scenario, started])

    return (
        <div className="w-5/6 h-96 bg-white relative overflow-hidden">
            {started !== true && (
                <Start
                    scenarios={scenarios}
                    selectScenario={onScenario}
                    platforms={platforms}
                    selectPlatform={onPlatform}
                    start={onStarted}
                />
            )}
            {/* Main card content */}
            {started === true && (
                <div className="p-6 h-full border border-slate-100">
                    <div className="flex flex-col">
                        <p>Scenario {scenarios[scenario]}</p>
                        <BranchingNarrativeComponent scenario={scenario} />
                        {/* <QuestionAnswer
                                    data={tree['q0']}
                                    text={tree['q1']}
                                    progress={progress}
                                    onProgress={onProgress}
                                /> */}
                    </div>
                    <Card>
                        <CardHeader>
                            <h6>{scenarios[scenario]}</h6>
                        </CardHeader>
                        <CardContent>
                            {' '}
                            <BranchingNarrativeComponent scenario={scenario} />
                        </CardContent>
                    </Card>
                </div>
            )}
            {/* Top-left cut corner */}
            {/* <div className="absolute top-0 left-0 w-8 h-8 bg-gray-200 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div> */}
            {/* Bottom-right cut corner */}
            {/* <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-200 transform translate-x-1/2 translate-y-1/2 rotate-45"></div> */}
        </div>
    )
}
