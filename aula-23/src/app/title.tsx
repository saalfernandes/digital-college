 interface TitleProps {
    content: string
 }



export function Title(props: TitleProps) {
    return (
        <h1 className="text-6xl">{props.content}</h1>
    )
}
 