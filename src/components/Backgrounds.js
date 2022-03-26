import React from 'react'
import './Backgrounds.css'
import Image from './Image'

const Backgrounds = ({backgroundDict, setStatus}) => {

    const toggleActive = (url) => {
        return () => {
            setStatus({...backgroundDict, [url] : !backgroundDict[url]})
        }
    }

    return (
        <div id = "backgrounds">
            {Object.keys(backgroundDict).map(url => {
                return (
                    <Image key = {url} url = {url} isActive = {backgroundDict[url]} toggleActive = {toggleActive}/>
                )
            })}
        </div>
    )
}

export default Backgrounds
