import React from 'react'
import './ChooseTab.css'

const ChooseTab = ({selectTabOpen, setSelectTabOpen}) => {
    const selected = {backgroundColor: 'white', color: 'rgb(66, 133, 244)', fontWeight: 500, borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}
    const notSelected = {}
    const selectStyle = selectTabOpen ? selected : notSelected
    const addStyle = selectTabOpen ? notSelected : selected

    const clickTab = (selectTabClicked) => {
        if (selectTabClicked && !selectTabOpen) {
            return () => setSelectTabOpen(true)
        } else if (!selectTabClicked && selectTabOpen) {
            return () => setSelectTabOpen(false)
        } else {
            return () => {}
        }
    }

    return (
        <div id = 'chooseTab'>
            <div style = {selectStyle} onClick = {clickTab(true)}>Select</div>
            <div style = {addStyle} onClick = {clickTab(false)}>Add New</div>
        </div>
    )
}

export default ChooseTab
