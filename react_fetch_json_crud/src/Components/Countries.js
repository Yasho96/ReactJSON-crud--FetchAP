import React, { useState, useEffect} from 'react';
import "../App.css";
import AddCountry from './AddCountry';
import UpdateCountry from './UpdateCountry';

function Countries(){
    
    const [data, setData] = useState([]);
    
    const [columnData, setColumnData ] = useState([]);
    
    const handleUpdate = ([columnData]) => () => {
        setColumnData(columnData);
    };


    const [ showAddForm ] = useState('none');
    
    const handleDelete = (id) => () => {

        console.log(id);
    
    fetch('http://localhost:5000/item/' + id, { method: 'DELETE' })
        .then(async response => {
            const isJson = response.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            console.log(response);
            
            if (!response.ok) {                
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            console.log('Delete successful');
        })
        .catch(error => {
            console.log('There was an error!');
        }).then(
            function () {
              window.location.reload();
            }
          );

    };
    

     
    const getData = () => {
        fetch("http://localhost:5000/item", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            setData(myJson);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        
        <div class = "bg_img">
            <div style={{ display: {showAddForm}}}><AddCountry /></div> 
            <h1> </h1>
            <table class = "center">
                <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Currency</th>
                        <th>Population</th>
                        <th>GDP</th>
                        <th>Flag Url</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data &&
                        data.length > 0 &&
                        data.map((item) => (
                        <tr key={item.id}>
                            <td>{ item.name }</td>
                            <td>{ item.currency }</td>
                            <td>{ item.population }</td>
                            <td>{ item.gdp }</td>                            
                            <td>
                            <a href={ item.flag_url }>
                                Click here to visit the flag
                            </a>
                            </td>
                            <td>
                            <button class = "edit" type="submit" onClick={handleUpdate([item])}>Update</button>                            
                            <button class = "delete" type="submit" onClick={ handleDelete(item.id) } >Delete</button>
                            </td>
                            
                        </tr>
                        ))}
                </tbody>
            </table>                        
                                      
            <UpdateCountry>{ columnData }</UpdateCountry>         


        </div>

    );

}
export default Countries;