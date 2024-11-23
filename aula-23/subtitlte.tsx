import {ReactNode} from "react"

interface SubtiitleProps {
    children: ReactNode
}

export function Subtiitles(props:SubtiitleProps) {
    return (
        <h2 className="text-3xl">{props.children}</h2>
    )
}