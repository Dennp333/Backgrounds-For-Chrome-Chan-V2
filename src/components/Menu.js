import {useState, useEffect} from 'react'
import './Menu.css'
import Backgrounds from './Backgrounds'
import Buttons from './Buttons'
import ChooseTab from './ChooseTab'
import AddNew from './AddNew'

const Menu = ({closeMenu}) => {
    const [status, setStatus] = useState({})
    const [selectTabOpen, setSelectTabOpen] = useState(true)

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

    const done = () => {
        const active = Object.keys(status).filter(url => status[url])
        window.localStorage.setItem('active', active.join(' '))
        window.localStorage.setItem('status', JSON.stringify(status))
        closeMenu()
    }

    const cancel = () => {
        closeMenu()
    }

    const addWallpaper = (url) => {
        setStatus({...status, [url]: true})
    }

    return (
        <div id = "menu">
            <ChooseTab selectTabOpen = {selectTabOpen} setSelectTabOpen = {setSelectTabOpen} />
            {selectTabOpen && <Backgrounds backgroundDict = {status} setStatus = {setStatus} />}
            {!selectTabOpen && <AddNew addWallpaper = {addWallpaper} />}
            <Buttons done = {done} cancel = {cancel} />
        </div>
    )
}

export default Menu
