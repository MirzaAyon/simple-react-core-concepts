// 46_5-3 Load data using the useEffect and display data
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    return (
        <div className="App">
            <Loadpost></Loadpost>
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

// data load er jnno new component banabo
//step 1
function Loadpost() {
    //step2 useState use 
    const [posts, setPosts] = useState([]);
    //step3 //useEffect ba side effect dibo
    //array func dibo ja anonymous func
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
        //console log data kore dehbo erpr setpost ke call kore dbo and data take pm hishebe pathae dbo
        //erpr data ta useState func er kache chole jabe 
    }, [])
    return (
        <div>
            <h1>Posts:</h1>
            <h1>Posts: {posts.length}</h1>
            {/* array of obj tai dynamic er upr map marbo */}

            {
                // posts.map(post => console.log(post))
                posts.map(post => console.log(post))
            }
            {
                posts.map(post => <p>{post.title}</p>)
                //eta 2nd way
            }
            {
                posts.map(post => <Post title={post.title} body={post.body}></Post>)
                //eta 3rd way
            }

        </div>
    )
}

function Post(props) {
    return (
        <div style={{ backgroundColor: 'lightgray', margin: '20px', border: '2px solid salmon' }}>
            <h2>Title : {props.title}</h2>

            <p>Body : {props.body}</p>

        </div>
    )
}

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
