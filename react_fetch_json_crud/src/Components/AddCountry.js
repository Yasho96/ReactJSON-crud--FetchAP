import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function AddCountry() {

  const [ countryName, setCountryName ] = useState("");
  const [ currency, setCurrency ] = useState("");
  const [ population, setPopulation ] = useState("");
  const [ flagUrl, setFlagUrl ] = useState("");
  const [ gdp, setGdp ] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();
   
    const id = uuid();

   
    const item = { id, countryName, currency, population, flagUrl, gdp };

    console.log(item);
  
  fetch("http://localhost:5000/item", {
      method: "POST",
      headers: {"Content-Type": 'application/json' },
      body: JSON.stringify(item),

  }).then(function (response) {
    console.log(response);
    return response.json();
  });

  };

return (
    <div className="AddCountry" >

      {/*Add form*/}
      <form class = "add" onSubmit ={handleSubmit} >
        <h2>Add Countries</h2>
        <input
          type = "text"
          value = {countryName}
          placeholder = "Country Name"
          onChange = {(e) => setCountryName(e.target.value)}
        />
        <input
          type = "text"
          value = {currency}
          placeholder = " Currency"
          onChange = {(e) => setCurrency(e.target.value)}
        />
        <input
          type = "text"
          value = {population}
          placeholder = "Population"
          onChange = {(e) => setPopulation(e.target.value)}
        />
        <input
          type = "text"
          value = {flagUrl}
          placeholder = "image URL"
          onChange = {(e) => setFlagUrl(e.target.value)}
        />
        <input
          type = "text"
          value = {gdp}
          placeholder = "GDP value"
          onChange = {(e) => setGdp(e.target.value)}
        />

        <button class = "add" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCountry;
