'use client'

import BranchingNarrativeComponent from '@/components/game/branchingnarrativecomponent'
import QuestionAnswer from '@/components/game/question-answer'
import Start from '@/components/game/start'
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

// Example game data
// const gameData = {
//     q1: {
//         question: 'What is your favorite color?',
//         answers: [
//             {
//                 text: 'Blue',
//                 link: 'q2',
//             },
//             {
//                 text: 'Red',
//                 link: 'q3',
//             },
//         ],
//     },
//     q2: {
//         question: 'Why do you like the color blue?',
//         answers: [
//             {
//                 text: "It's a calming color",
//                 link: 'q4',
//             },
//             {
//                 text: 'It reminds me of the sky',
//                 link: 'q5',
//             },
//         ],
//     },
//     q3: {
//         question: 'Why do you like the color red?',
//         answers: [
//             {
//                 text: "It's a bold and energetic color",
//                 link: 'q6',
//             },
//             {
//                 text: "It's the color of my favorite flower",
//                 link: 'q7',
//             },
//         ],
//     },
//     // Add more questions and answers as needed
// }

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
    }, [scenario, started])

    return (
        <div className="flex flex-col items-center justify-end w-full h-full">
            <div className="flex items-end rounded-md border border-slate-600 w-full h-96">
                {started !== true && (
                    <Start
                        scenarios={scenarios}
                        selectScenario={onScenario}
                        platforms={platforms}
                        selectPlatform={onPlatform}
                        start={onStarted}
                    />
                )}

                {started === true && (
                    <div className="flex flex-col rounded-md border border-slate-600 w-full h-28">
                        <p>Scenario</p>
                        <p> {scenarios[scenario]}</p>
                        <BranchingNarrativeComponent />
                        {/* <QuestionAnswer
                            data={tree['q0']}
                            text={tree['q1']}
                            progress={progress}
                            onProgress={onProgress}
                        /> */}
                    </div>
                )}
            </div>
        </div>
    )
}
