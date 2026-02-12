import React from 'react'

function Logging() {
    const isLoggedIn = true;
    return (
        <div>
            <h1>
                {isLoggedIn ? "Welcome User" : "Please Login"}
            </h1>
        </div>
    )
}

export default Logging
