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

  const handleClearing = useCallback((val:string)=>{
    console.log(val , chaineResultat)
    let newResult = chaineResultat.substring(0 , chaineResultat.length -1)
    setChaineResultat(newResult);
    },[chaineResultat])

  const handleEqual = useCallback((val:string)=>{
    console.log(val , chaineResultat)
    //
    
    //
    let newResult = evaluateExpression(chaineResultat)
    setChaineResultat(newResult.toString());
    console.log("ici:" , newResult)
    },[chaineResultat])

  return (
    <div className='Calc'>
      <div className='zoneResultat'>
        <p className='screenResultat'>{chaineResultat}</p>
        <Bouton val={'<-'} returnValue={handleClearing}></Bouton>
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
          <Bouton val={'*'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'/'} returnValue={handleReturnValue}></Bouton>
          <Bouton val={'='} returnValue={handleEqual}></Bouton>
        </div>
      </div>
    </div>
  )
}

export default App

function evaluateExpression(expression: string) {
// Utilisez la méthode split pour diviser l'expression en termes
const terms = expression.split(/([+\-*/])/).map((term) => term.trim());

// Convertissez les termes en nombres et effectuez les calculs
let result = parseFloat(terms[0]);

for (let i = 1; i < terms.length; i += 2) {
  const operator = terms[i];
  const operand = parseFloat(terms[i + 1]);

  switch (operator) {
    case "+":
      result += operand;
      break;
    case "-":
      result -= operand;
      break;
    case "*":
      result *= operand;
      break;
    case "/":
      if (operand === 0) {
        throw new Error("Division par zéro");
      }
      result /= operand;
      break;
    default:
      throw new Error("Opérateur non reconnu");
    }
  }
  return result;
}
