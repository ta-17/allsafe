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
        console.info('Started', started)
    }, [scenario, started])

    return (
        <div className="w-5/6 h-96 bg-white relative overflow-hidden shadow-lg">
            {/* Main card content */}
            <div className="p-6 h-full border border-slate-100">
                <h2 className="text-xl font-bold mb-2">Cut Corner Card</h2>
                <p className="text-gray-700">
                    This is a card with cut top-left and bottom-right corners
                    using Tailwind CSS.
                </p>
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
                )}
            </div>

            {/* Top-left cut corner */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-gray-200 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

            {/* Bottom-right cut corner */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-200 transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
        </div>
    )
}
