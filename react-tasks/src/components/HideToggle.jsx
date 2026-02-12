import React, { useState } from 'react'

function HideToggle() {
    const [show, setShow] = useState(true);
    return (
        <div className="card">
            <button className="btn" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <h2 className="small">This text is visible!</h2>}
        </div>
    )
}

export default HideToggle
