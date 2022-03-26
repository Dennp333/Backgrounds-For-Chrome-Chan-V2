import {useState, useEffect} from 'react'
import './menu.css'
import Backgrounds from './Backgrounds'

const Menu = () => {
    const [status, setStatus] = useState({})

    useEffect(() => {
        const storedStatus = window.localStorage.getItem('status')
        let statusDict = {}
        if (!storedStatus) {
            for (let i = 0; i < 104; ++i) {
                statusDict[`Wallpapers/${i}.jpg`] = true
            }
            window.localStorage.setItem('status', JSON.stringify(statusDict))
        } else {
            statusDict = JSON.parse(storedStatus)
        }
        setStatus(statusDict)
    }, [])

    return (
        <div id = "menu">
            <Backgrounds backgroundDict = {status} setStatus = {setStatus}/>
        </div>
    )
}

export default Menu
