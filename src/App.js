import {useState, useEffect} from 'react'
import './App.css';
import Menu from './components/Menu'

function App() {
  // overall solution was to set height of div to 100vh. Now background and image strategies both work
  const [menuOpen, setMenuOpen] = useState(true)
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

  //let index = Math.floor(Math.random()*active.length)
  // if using background image, the url needs to literally have quotation marks
  //let url = `"Wallpapers/${active[index]}.jpg"`
  //let url = "Wallpapers/" + num + ".jpg";
  // return (
  //   <div className = "page">
  //     <img src={url}></img>
  //     <Menu />
  //   </div>
  return (
   <div id = "page" style={{backgroundImage: `url(${currentBackground})`}}>
     {menuOpen && <Menu />}
   </div>
  );
}

export default App;
