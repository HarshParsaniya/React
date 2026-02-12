import React from 'react'

function CurrentDateTime() {
    const today = new Date();
    return (
        <div>
            <h1>Today's Date: {today.toDateString()}</h1>
            <h2>Current Time: {today.toLocaleTimeString()}</h2>
        </div>
    )
}

export default CurrentDateTime
