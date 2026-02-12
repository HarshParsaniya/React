import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <h2 className="small">Counter</h2>
            <h1>{count}</h1>

            <div>
                <button className="btn" onClick={() => setCount(count + 1)}>
                    Increment
                </button>

                <button className="btn" onClick={() => setCount(count - 1)}>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter
