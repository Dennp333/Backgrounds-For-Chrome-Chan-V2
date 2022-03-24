import React from 'react'
import './Backgrounds.css'

const Backgrounds = ({backgroundDict}) => {
    return (
        <div>
            {Object.keys(backgroundDict).map(url => <img key = {url} src = {url} alt = '' className = 'option'></img>)}
        </div>
    )
}

export default Backgrounds
