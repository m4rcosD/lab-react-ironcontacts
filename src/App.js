import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react'


function App() {

  let firstFive = contacts.slice(0, 6)
  const [allFirstFive, setFirstFive] = useState(firstFive)

  function handleAdd(){
    let randomElem = contacts[Math.floor(Math.random() * contacts.length)]
    let newArray = [randomElem, ...allFirstFive]
    setFirstFive(newArray)
}

  function handleSort(){
    let clone = JSON.parse(JSON.stringify(firstFive))
    clone.sort((first, second) => {
        if (first.name > second.name) {
            return 1
        }
        else if (first.name < second.name) {
            return -1
        }
        else {
            return 0
        }
    })
  }
return (
  <div>
                <h1>List of humans</h1>
            <button onClick={handleSort}> Sort </button>
            <button onClick={handleAdd} > Add </button>
            <hr />
            {
  firstFive.map((elem, index) => {
    return(
    <div className="App">
      <img src={elem.pictureUrl}/>
      <h1> { elem.name }</h1>
      { elem.picture }
      { elem.popularity.toFixed(2) }
      <div key={`${elem.id}${index}`}>
      { elem.wonOscar == false ? true : '🏆' }
      { elem.wonEmmy == false ? true : '🏆' }
      </div>
    </div>
    )}
  )
}
  </div>
)}

export default App;
