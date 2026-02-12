import React from 'react'

function CurrentDateTime() {
    const today = new Date();
    return (
        <div className="card">
            <h2>Today's Date: {today.toDateString()}</h2>
            <h3>Current Time: {today.toLocaleTimeString()}</h3>
        </div>
    )
}

export default CurrentDateTime
