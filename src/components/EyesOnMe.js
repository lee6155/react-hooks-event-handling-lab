// Code EyesOnMe Component Here

import React from 'react'

function EyesOnMe () {
    function onFocusLog () {
        console.log('Good!')
    }

    function onBlurLog () {
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button onFocus={onFocusLog} onBlur={onBlurLog}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe