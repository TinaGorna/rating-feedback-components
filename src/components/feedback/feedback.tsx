import React from "react";
import {useFeedback} from "./use-feedback";
import {Rating} from "./rating";
import {From} from "./form";
import {Error} from "./error";
import {Done} from "./done";

export function Feedback() {
    const {
        currentPlace,
        onRatingSelect,
        onSubmit,
        error,
        onErrorClick,
        onDone,
    } = useFeedback()

    if (currentPlace === "rating") {
        return <Rating onSelect={onRatingSelect}/>
    }

    if (currentPlace === "form") {
        return <From onSubmit={onSubmit}/>
    }

    if (currentPlace === "error") {
        return <Error error={error} onClick={onErrorClick}/>
    }

    if (currentPlace === "done") {
        return <Done onDone={onDone}/>
    }

    return null
}