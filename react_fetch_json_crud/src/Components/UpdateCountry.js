import React from 'react';
import { useState , useEffect } from 'react';
//import { v4 as uuid } from "uuid";

function UpdateCountry({ children }){

    //set usestate for inputs
    const [ id , setId ] = useState('');
    const [ name , setName ] = useState('');
    const [ currency , setCurrency ] = useState('');
    const [ population , setPopulation ] = useState('');
    const [ flag_url , setflag_url ] = useState('');
    const [ gdp , setGdp ] = useState('');


   console.log(children.name)
   useEffect(() => {
    setId(children.id);
    setName(children.name);
    setCurrency(children.currency);
    setPopulation(children.population);
    setflag_url(children.flag_url);
    setGdp(children.gdp);
}, [children]);

    const handleSubmit = (e) => {
        const item = {id, name, currency, population, flag_url, gdp};
        console.log(item);

         
         fetch("http://localhost:5000/item/" + id, {
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
                <form className = "addC" onSubmit ={handleSubmit} >
                    <h4>Update Countries</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type = "text"
                                        value = {name}
                                        placeholder = "Country Name"
                                        onChange = {(e) => setName(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {currency}
                                        placeholder = "Currency"
                                        onChange = {(e) => setCurrency(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {population}
                                        placeholder = "Population"
                                        onChange = {(e) => setPopulation(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {flag_url}
                                        placeholder = "Image URL"
                                        onChange = {(e) => setflag_url(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {gdp}
                                        placeholder = "GDP value"
                                        onChange = {(e) => setGdp(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button className = "save" type="submit">Save</button>
                                    <button className = "cancel" type="submit">Cancel</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    
                </form>
                
            </div>
        );
    
}

export default UpdateCountry
