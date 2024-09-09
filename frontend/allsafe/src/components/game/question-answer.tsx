import { Button } from '../ui/button'

export default function QuestionAnswer({
    text,
    progress,
    onProgress,
}: {
    text: string[]
    progress: number
    onProgress: any
}) {
    const question = ({ text }: { text: string }) => {
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }

    const answer = ({ textArray }: { textArray: string[] }) => {
        return (
            <div>
                {textArray.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                <Button onClick={() => onProgress(progress + 1)}>Icon</Button>
            </div>
        )
    }

    console.info(text[0])
    console.info('message', progress % 2)

    return (
        <div>
            {progress % 2 === 0 && question({ text: text[0] })}
            {progress % 2 === 1 && answer({ textArray: text })}
        </div>
    )
}
