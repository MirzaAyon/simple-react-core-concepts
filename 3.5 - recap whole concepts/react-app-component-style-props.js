// 46_5-1 Recap Create react app,Component, styles, props
// componet likhte hole func likhte hbe
// component er naam meaning full hote hbe
//component er vitore div er poriborte fragment use kora jae







//full code nicheee

import logo from './logo.svg';
import './App.css';

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
}
function District(props) {
    return (
        <div style={districtStyle}>
            <h2>Name : {props.name}</h2>
            <p>Speciality : {props.special}</p>
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
