import {  useCallback, useState } from 'react'
import './App.css'

function App() {
  const [username,setUsername] = useState('')
  const [message,setMessage] = useState('')

  const handleClick = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:1992/hello/${username}`);

      if (response.ok) {
        const data = await response.json(); // Récupérer les données JSON de la réponse
        setMessage(data.message); // Mettre à jour le message avec les données de la réponse
        console.log(message);
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }, [username]);

  return (
    <>
      <label htmlFor="testInputText"></label>
      <input type="text" name='testInputText' onChange={(e)=>{setUsername(e.target.value)}}/>
      <button onClick={handleClick} >Envoyer</button>
      <div>réponse du serveur :{message}</div>
    </>
  )
}

export default App
