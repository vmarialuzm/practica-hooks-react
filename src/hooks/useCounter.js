import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = (val = 1) => {
        setCounter(counter + val)
    }
    const decrement = (val = 1, negative = true) => {
        if(!negative && counter -val < 0) {
            setCounter(0)
            return
        }
        setCounter(counter - val)
    }
    const reset = () => {
        setCounter(0)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
