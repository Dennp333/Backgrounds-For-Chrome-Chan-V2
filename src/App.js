import './App.css';

function App() {
  // overall solution was to set height of div to 100vh. Now background and image strategies both work
  let num = Math.floor(Math.random()*104)+1
  let url = "Wallpapers/" + num + ".jpg";
  return (
    <div>
      <img src={url}></img>
    </div>
  //return (
  //  <div style={{backgroundImage: `url("Wallpapers/${num}.jpg")`}}>
  //  </div>
  );
}

export default App;
