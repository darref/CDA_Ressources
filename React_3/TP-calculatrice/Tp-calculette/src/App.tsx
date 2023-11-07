import { useCallback, useState } from 'react'
import './App.css'
import Bouton from './Bouton'

function App() {
  const [chaineResultat, setChaineResultat] = useState("");

  const handleReturnValue = useCallback((val:string)=>{
      console.log(val , chaineResultat)
      let newResult = chaineResultat + val;
      setChaineResultat(newResult);
      },[chaineResultat])

  return (
    <div className='Calc'>
      <div className='zoneResultat'>
        <p className='screenResultat'>{chaineResultat}</p>
        <Bouton val={'<-'} returnValue={handleReturnValue}></Bouton>
      </div>
      <div className='zonePad'>
        <div className='zoneBoutonsNombres'>
          <Bouton val={'1'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'2'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'3'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'4'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'5'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'6'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'7'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'8'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'9'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'0'} returnValue={handleReturnValue}></Bouton>
        </div>
        <div className='zoneBoutonsOperateurs'>
          <Bouton val={'+'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'-'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'='} returnValue={handleReturnValue}></Bouton>
        </div>
      </div>
    </div>
  )
}

export default App
