import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    return (
        <div className="App">
            <LoadCountries></LoadCountries>
        </div>
    );
}
function LoadCountries() {
    const [countries, setCountries] = useState([]) //array of obj tai default value empty arr

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    //console data diye check krbo
    //uporer state e countries  e value pete hole setCountries ke e call korte hbe 
    return (
        <div>
            <h1>Visiting countries in the world</h1>
            <h3>Available countries : {countries.length}</h3>
            {/* available countries 250 showing */}
            {
                // countries.map(country => console.log(country))

                //shob country show hochee console e 
                countries.map(country => <p>{country.name.common}</p>)
            }
            {
                countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
            }
        </div>
    )
}
function Country(props) {
    return (
        <div>
            <h2>Name : {props.name}</h2>
            <h4>Population : {props.population}</h4>
        </div>
    )
}

export default App;
//component gulake folder structure er modhe rakhbo
//tai age save korlam :3
//ei video te folder structuring er shob way dewa ache
