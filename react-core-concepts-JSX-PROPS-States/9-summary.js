// fetch('https://jsonplaceholder.typicode.com/comments')
//       .then(res => res.json())
//       .then(data => console.log(data))
//eta kore dekhbo


import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    return (
        <div className="App">
            <Counter></Counter>
            <LoadComments></LoadComments>
        </div>
    );
}


function LoadComments() {
    //state declare
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    //ui te 500 data showing
    //console dile inspact ei show hoto

    return (
        <div>
            <h2>comments : {comments.length}</h2>
            {
                comments.map(comment => <Comment email={comment.email} body={comment.body}> </Comment>)
            }
        </div>
    )
}

function Comment(props) {
    return (
        <div>
            <h4>email : {props.email}</h4>
            <p>{props.body}</p>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount(count + 1);
    const handleDecrese = () => setCount(count - 1);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrese}>Decrease</button>
        </div>
    )
}

export default App;
