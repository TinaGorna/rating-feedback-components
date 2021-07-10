import React from 'react'

type Props= {
    onDone: () => void
}
export function Done({onDone}: Props) {
    return (
        <>
            Feedback passed
            <button onClick={onDone}>Send new rating</button>
        </>
    )
}