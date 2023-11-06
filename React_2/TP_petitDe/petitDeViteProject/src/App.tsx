import { useState } from 'react'
import Die from './Die'

function App() {
  const [newRoll, setNewValue] = useState(0);

  const handleDieRoll = (newRoll:number) => {
    setNewValue(newRoll);
  }

  return (
    <>
      <Die onDieRoll={handleDieRoll}></Die>
      <p>Valeur récupérée depuis l'enfant (Die) : {newRoll}</p>
    </>
  )
}

export default App
