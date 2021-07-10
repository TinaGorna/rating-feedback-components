import {ChangeEvent, FormEvent, useState} from "react";
import {FeedbackData} from "../types";

type Args = {
    onSubmit: (fields: FeedbackData) => void
}

export function useForm({onSubmit}: Args) {
    const [message, setMessage] = useState("")
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({feedback: message})
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)

    return {
        message,
        handleSubmit,
        handleChange
    }
}