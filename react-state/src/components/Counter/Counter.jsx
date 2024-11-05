import { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)

    const handleIncrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const handleDecrementCounter = () => {
        setCounterValue(counterValue - 1)
    }

    return (
        <div className="Counter">

            <h1>Has clickado {counterValue} veces...</h1>

            <button onClick={handleIncrementCounter}>Aumentar</button>
            <button onClick={handleDecrementCounter}>Reducir</button>

        </div>
    )
}

export default Counter