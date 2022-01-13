import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function AddCountry() {

  const [ name, setname ] = useState("");
  const [ currency, setCurrency ] = useState("");
  const [ population, setPopulation ] = useState("");
  const [ flag_url, setFlag_url ] = useState("");
  const [ gdp, setGdp ] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();
   
    const item = {name, currency, population, flag_url, gdp };

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
      <form class = "addC" onSubmit ={handleSubmit} >
        <h2>Country details</h2>
        <h4>Add Countries</h4>
        <input
          type = "text"
          value = {name}
          placeholder = "Country Name"
          onChange = {(e) => setname(e.target.value)}
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
          value = {flag_url}
          placeholder = "image URL"
          onChange = {(e) => setFlag_url(e.target.value)}
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
