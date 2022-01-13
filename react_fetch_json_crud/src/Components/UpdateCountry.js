import React from 'react';
import { useState , useEffect } from 'react';
//import { v4 as uuid } from "uuid";

function UpdateCountry({ children }){

    //set usestate for inputs
    const [ id , setId ] = useState(children.id);
    const [ name , setName ] = useState(children.name);
    const [ currency , setCurrency ] = useState(children.currency);
    const [ population , setPopulation ] = useState(children.population);
    const [ flag_url , setflag_url ] = useState(children.flag_url);
    const [ gdp , setGdp ] = useState(children.gdp);


   console.log(children.name)
    
    const handleSubmit = (e) => {
        const item = {id, name, currency, population, flag_url, gdp};
        console.log(item);

         
         fetch("http://localhost:3003/item/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          }).then(() => {
            console.log(item);
          });
        
    };

        return (
            <div>
                {/*Update form*/}
                <form class = "edit" onSubmit ={handleSubmit} >
                    <h2>Update Countries</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Country Name</th>
                                <th>Currency</th>
                                <th>Population</th>
                                <th>Flag Url</th>
                                <th>GDP</th>  
                                <th>Action</th>                              
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.id}
                                        placeholder = "ID"
                                        onChange = {(e) => setId(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.name}
                                        placeholder = "Country Name"
                                        onChange = {(e) => setName(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.currency}
                                        placeholder = "Currency"
                                        onChange = {(e) => setCurrency(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.population}
                                        placeholder = "Population"
                                        onChange = {(e) => setPopulation(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.flag_url}
                                        placeholder = "Image URL"
                                        onChange = {(e) => setflag_url(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.gdp}
                                        placeholder = "GDP value"
                                        onChange = {(e) => setGdp(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button class = "save" type="submit">Save</button>
                                    <button class = "cancel" type="submit">Cancel</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    
                </form>
                
            </div>
        );
    
}

export default UpdateCountry
