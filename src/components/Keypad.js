// Code Keypad Component Here

import React from 'react'

function Keypad () {
    function enteringPassword () {
        console.log(console.log('Entering password...'))
    }
    
    return (
        <div>
            <input onChange={enteringPassword} type="password"/>    
        </div>
    )
}

export default Keypad;