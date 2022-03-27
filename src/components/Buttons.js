import React from 'react'
import './Buttons.css'

const Buttons = ({done, cancel}) => {
    return (
        <div id = 'buttons'>
            <button id = 'cancel' onClick = {cancel}>Cancel</button>
            <button id = 'done' onClick = {done}>Done</button>
        </div>
    )
}

export default Buttons
