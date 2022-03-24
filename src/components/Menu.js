import {useState, useEffect} from 'react'
import './menu.css'
import Backgrounds from './Backgrounds'

const Menu = ({active}) => {
    const activeDict = {}
    for (let i = 0; i < 104; ++i){
        activeDict[`Wallpapers/${i}.jpg`] = false
    }
    active.forEach(n => activeDict[`Wallpapers/${n}.jpg`] = true)
    return (
        <div id = "menu">
            <Backgrounds backgroundDict = {activeDict} />
        </div>
    )
}

export default Menu
