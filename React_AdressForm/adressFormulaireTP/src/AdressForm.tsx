import { ChangeEvent, ChangeEventHandler, MouseEventHandler, useState } from 'react'

function AdressForm() {
    const [saisie, setSaisie] = useState("");
    const [addresses, setAddresses] = useState([]); // État pour stocker les adresses de l'API

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setSaisie(userInput);

    fetch(`https://api-adresse.data.gouv.fr/search/?q=${userInput}`)
      .then(response => response.json())
      .then(data => {
        // Mise à jour des adresses avec les données reçues de l'API
        setAddresses(data.features); // Assurez-vous que le format des données correspond à ce que vous attendez
      })
      .catch(error => {
        console.error('Erreur lors de la requête API', error);
        setAddresses([]); // En cas d'erreur, videz les adresses
      });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAddress = e.target.value;
    setSaisie(selectedAddress); // Mettre à jour la saisie avec l'adresse sélectionnée
  };

  return (
    <>
      <input type='text' value={saisie} onChange={handleInputChange} />
      <select onChange={handleSelectChange}>
        {addresses.map((address: any, index: number) => (
          <option key={index} >{address.properties.label}</option>
        ))}
      </select>
    </>
  );
}


export default AdressForm