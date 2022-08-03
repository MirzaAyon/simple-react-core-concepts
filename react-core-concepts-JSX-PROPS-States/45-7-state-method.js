import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    return (
        <div className="App">
            <Counter></Counter>
        </div>
    );
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
