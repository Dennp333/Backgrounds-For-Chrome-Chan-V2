import React from 'react'
import './Image.css'

const Image = ({url, isActive, toggleActive}) => {
    const style = isActive ? {} : {filter: "grayscale(100%)"}

    return (
        <div className = 'option'>
            <img src = {url} alt = '' onClick = {toggleActive(url)} style = {style}></img>
        </div>
    )
}

export default Image
