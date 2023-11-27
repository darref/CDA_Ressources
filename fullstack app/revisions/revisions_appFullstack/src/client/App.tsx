import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [reponseServeur, setReponseServeur] = useState("");
  const [input , setInput] = useState("");


  const handleClickEnvoyer = useCallback(async () => {

      const response = await fetch(`http://localhost:3001/api/bonjour/${input}`);
      const data = await response.text();
      setReponseServeur(data);

  }, [input]);

  return (
    <div className="App">
      <label htmlFor="inputName"> Entrez votre nom et cliquez sur le bouton envoyer.</label>
      <input id="inputName" type="text" onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={handleClickEnvoyer}>Envoyer</button>
      <br /><br />
      <p>{reponseServeur}</p>
    </div>
  );
}

export default App;
