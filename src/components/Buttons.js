import React from 'react'
import './Buttons.css'

const Buttons = ({done, cancel, setAllStatus}) => {
    return (
        <div id = 'buttons'>
            <div>
                <button class = 'other' onClick = {() => setAllStatus(true)}>Activate All</button>
                <button class = 'other' onClick = {() => setAllStatus(false)}>Deactive All</button>
            </div>
            <div id = 'submit'>
                <button class = 'other' onClick = {cancel}>Cancel</button>
                <button class = 'enter' onClick = {done}>Done</button>
            </div>
        </div>
    )
}

export default Buttons
