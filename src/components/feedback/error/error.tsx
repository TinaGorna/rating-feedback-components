import React from "react"

type Props = {
    error: string
    onClick: () => void
}

export function Error({error, onClick}: Props) {
    return (
        <>
            {error}
            <button onClick={onClick}>Try again</button>
        </>
    )
}