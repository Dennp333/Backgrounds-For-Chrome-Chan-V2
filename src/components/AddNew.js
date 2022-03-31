import {useState} from 'react'
import './AddNew.css'

const AddNew = ({addWallpaper}) => {
    const [url, setUrl] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (isValid) {
            addWallpaper(url)
            setUrl('')
        }
    }

    const handleChange = (event) => {
        setUrl(event.target.value)
        setIsValid(true)
    }

    const handleImageInvalid = (event) => {
        event.target.onError = null
        setIsValid(false)
    }

    return (
        <div id = "addPage">
            <form onSubmit = {handleSubmit} id = "addForm">
                <input placeholder='Enter image url' value = {url} onChange = {handleChange} id = "search"></input>
                <button type='submit' id = "addButton">Add</button>
            </form>
            <div id = "imageContainer">
                <img src = {url} onError = {handleImageInvalid} alt = 'Image not found' id = "newImage"/>
            </div>
        </div>
    )
}

export default AddNew
