import React, {FormEvent, useState} from "react"
import {FeedbackData} from "../types";
import {useForm} from "./use-form";
import './form.css'


type Props = {
    onSubmit: (formData: FeedbackData) => void
}
export function From({onSubmit}: Props) {
    const {message, handleSubmit, handleChange } = useForm({onSubmit})

    return (
        <form onSubmit={handleSubmit}>
            <div className="form__item">
                <label htmlFor="formMessage" className="form__label">Do we need to change something?</label>
                <textarea value={message} className="form__input" onChange={handleChange}></textarea>
            </div>

            <div className="btn">
                <button type="submit" className="form__button">Submit</button>
                <button className="form__button">Skip</button>
            </div>

        </form>
    )
}