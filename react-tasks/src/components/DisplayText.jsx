import React from 'react'

function DisplayText() {
    const name = "Harsh";
    const role = "AIML / DevOps Engineer";
    return (
        <div className="card">
            <h1>My Name is {name}</h1>
            <h1>My Role is {role}</h1>
        </div>
    )
}

export default DisplayText
