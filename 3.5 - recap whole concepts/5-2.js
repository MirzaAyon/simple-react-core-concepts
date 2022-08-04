// 46_5-2 Check out Event listener, useState inside components

// full code


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    return (
        <div className="App">
            <District name="Noakhali" special="bivag"></District>
            <District name="bbaria" special="fight"></District>
            <District name="comilla" special="moyna"></District>
            {/* style na dile similar in look diff in data hbe na */}

        </div>
    );
}
//first way
// function District() {
//   return (
//     <div className='district'>
//       <h2>Name :</h2>
//       <p>Speciality : </p>
//     </div>

//   )
// }

//2nd way
// const districtStyle = {
//   backgroundColor: 'yellow',
//   margin: '20px',
//   borderRadius: '20px',
// }
// function District() {
//   return (
//     <div style={districtStyle}>
//       <h2>Name :</h2>
//       <p>Speciality : </p>
//     </div>

//   )
// }

//upore data gula yellow color er similar in look hoise but different in data hyni
//component gula je use kortesi egula theke dynamic data pathate hbe 
//ta korar jnno niche receive korte hbe 
//opore data pathabo atr hishebe niche receive korbo props hichebe
//ekhn niche dynamic way te dekhate hbe 
const districtStyle = {
    backgroundColor: 'bisque',
    margin: '20px',
    borderRadius: '20px',
    padding: '20px'
}
function District(props) {
    //use state ke call korlam
    const [power, setPower] = useState(1)
    const boostPower = () => {
        const newPower = power * 2;
        setPower(newPower);
        //set power ke call kore new maan take pathae dilam
    }
    return (
        <div style={districtStyle}>
            <h2>Name : {props.name}</h2>
            <p>Speciality : {props.special}</p>
            <h4>Power: {power} </h4>
            <button onClick={boostPower} >Boost</button>
        </div>

    )
}

export default App;


//data pathanor jnno 3 ta kaj korte hbe
//1.atr hishebe pathate hbe
//2.props hishebe receive korte hbe 
//dekhate hbe dynamically
//jemon : 
{/* <h2>{props.name}</h2> */ }



//state change korar jnno mane interaction er jnno
//step1 state declare kora
//state ta ke ui te kono place e dekhano
//event handler set kora
//onclick use kore event handler er sathe connection ghotano

