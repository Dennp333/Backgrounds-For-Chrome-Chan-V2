import React from 'react'
import './Buttons.css'

const Buttons = ({done, cancel, setAllStatus}) => {
    return (
        <div id = 'buttons'>
            <div>
                <button className = 'other' onClick = {() => setAllStatus(true)}>Activate All</button>
                <button className = 'other' onClick = {() => setAllStatus(false)}>Deactive All</button>
            </div>
            <div id = 'submit'>
                <button className = 'other' onClick = {cancel}>Cancel</button>
                <button className = 'enter' onClick = {done}>Done</button>
            </div>
        </div>
    )
}

export default Buttons
