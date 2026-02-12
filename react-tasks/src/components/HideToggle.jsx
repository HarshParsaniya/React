import React, { useState } from 'react'

function HideToggle() {
    const [show, setShow] = useState(true);
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <h2>This text is visible!</h2>}
        </div>
    )
}

export default HideToggle
