import {useState, useEffect} from 'react'
import './App.css';
import Menu from './components/Menu'

function App() {
  // overall solution was to set height of div to 100vh. Now background and image strategies both work
  const [active, setActive] = useState([])
  useEffect(() => {
    const storedActive = window.localStorage.getItem('active')
    if (storedActive){
      const activeList = storedActive.split(' ')
      setActive(activeList)
    } else {
      const activeList = []
      for (let i = 0; i < 104; ++i){
        activeList.push(i)
      }
      setActive(activeList)
      window.localStorage.setItem('active', activeList.join(' '))
    }
  }, [])
  let index = Math.floor(Math.random()*active.length)
  // if using background image, the url needs to literally have quotation marks
  let url = `"Wallpapers/${active[index]}.jpg"`
  //let url = "Wallpapers/" + num + ".jpg";
  // return (
  //   <div className = "page">
  //     <img src={url}></img>
  //     <Menu />
  //   </div>
  return (
   <div id = "page" style={{backgroundImage: `url(${url})`}}>
     <Menu />
   </div>
  );
}

export default App;
