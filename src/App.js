import {useState, useEffect} from 'react'
import './App.css';
import Menu from './components/Menu'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentBackground, setCurrrentBackground] = useState('')

  useEffect(() => {
    const storedActive = window.localStorage.getItem('active')
    let activeList = []
    if (storedActive){
      activeList = storedActive.split(' ')
    } else {
      for (let i = 0; i < 104; ++i){
        activeList.push(`Wallpapers/${i}.jpg`)
      }
      window.localStorage.setItem('active', activeList.join(' '))
    }
    let index = Math.floor(Math.random()*activeList.length)
    setCurrrentBackground(`"${activeList[index]}"`)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleConfigure = () => {
    return menuOpen 
    ? () => {}
    : toggleMenu
  }

  return (
   <div id = "page" style={{backgroundImage: `url(${currentBackground})`}}>
     {menuOpen && <Menu closeMenu = {toggleMenu}/>}
     <button onClick = {handleConfigure()}>Configure</button>
   </div>
  );
}

export default App;
