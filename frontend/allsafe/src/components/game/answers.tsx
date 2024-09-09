export default function Answers({ textArray }: { textArray: string[] }) {
    return (
        <div>
            {textArray.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    )
}
