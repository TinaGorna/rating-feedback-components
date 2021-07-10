import {useState} from "react";
import {FeedbackData} from "../types";
import {request} from "../service/request";

type CurrentPlace = "rating" | "form" | "error" | "done"

export function useFeedback() {
    const [currentPlace, setCurrentPlace] = useState<CurrentPlace>("rating")
    const [rating, setRating] = useState(0)
    const [error, setError] = useState('')

    const onRatingSelect = (rating: number) => {
        setRating(rating)
        setCurrentPlace("form")
    }

    const onSubmit = async (form: FeedbackData) => {
        const {error: errorData} = await request("https://datestat.me/data.php", {
            method: "POST",
            body: {
                ...form,
                rating,
            }
        })
        if (errorData) {
            setError(errorData)
            setCurrentPlace("error")
            return
        }

        setCurrentPlace("done")
    }

    const onErrorClick = () => {
        setCurrentPlace("rating")
    }

    const onDone = () => {
        setCurrentPlace("rating")
    }


    return {
        currentPlace,
        onRatingSelect,
        onSubmit,
        error,
        onErrorClick,
        onDone,
    }
}