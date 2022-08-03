// // fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(res => res.json())
// //     .then(data => console.log(data))

// // chaile ei part ta console kore dekhbo
// /

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    return (
        <div className="App">
            {/* <Counter></Counter> */}
            <ExternalUsers></ExternalUsers>
        </div>
    );
}

function ExternalUsers() {
    //step 1
    const [users, setUsers] = useState([]); //default value dbo, normally default value 0 hy
    //jodi array hoy tahole nunnotomo default value hbe empty array
    // useEffect( ()=>{}, [])
    //eta korar por uporeo useEffect import hbe 
    //use efferct er modhe ei func ke bole anonymous func

    //2nd step
    useEffect(() => { }, [])

    //3rd step
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    //eta step 4
    //set user e data ta chole jabe
    //chaile data take age console kore dkhbo

    //nicher mapping ta step 5
    return (
        <div>
            <h2>External Users</h2>
            <p>{users.length}</p>

            {
                users.map(user => <li>{user.name}</li>)
            }
            {
                users.map(user => <User name={user.name} email={user.email}></User>)
            }
        </div>
    )
}
//ebar component banabo

function User(props) {
    return (
        <div style={{ border: '2px solid red', margin: '20px' }}>
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
        </div>
    )
}

function Counter() {
    // const [] = useState(0)
    // const abc = useState(0)
    // const abc = useState(55) 
    // console.log(abc); //first maan ami jeta disi sheta and 2nd maan ekta func
    //inspact e 
    const [count, setCount] = useState(33) //des korlam
    //ui te count 33 showing

    //way 1
    // const increaseCount = () => {
    //   const newCount = count + 1;
    //   setCount(newCount);
    // }

    //way2
    // const increaseCount = () => {
    //   setCount(count + 1);
    // }
    //etao kora jae eta shortcut


    //way3
    const increaseCount = () => setCount(count + 1);


    //decrese
    const decreseCount = () => setCount(count - 1);


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreseCount}>Decrese</button>
        </div>
    )
}

//normally app er vitore jaja jaja thakbe tai website e dekhabe 

export default App;



/ / / fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(res => res.json())
// //     .then(data => console.log(data))

// // chaile ei part ta console kore dekhbo




//summary ache my-app3 te