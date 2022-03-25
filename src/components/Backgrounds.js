import React from 'react'
import './Backgrounds.css'

const Backgrounds = ({backgroundDict}) => {
    return (
        <div id = "backgrounds">
            {Object.keys(backgroundDict).map(url => {
                return (
                    <div key = {url} className = 'option'>
                        <img src = {url} alt = ''></img>
                    </div>
                )
            })}
        </div>
    )
}

export default Backgrounds
