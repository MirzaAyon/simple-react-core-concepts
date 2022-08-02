import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = { name: 'Ayon', job: 'singer' };
const singer2 = { name: 'plabon', job: 'cricket' }
const singerStyle = {
    color: 'purple',
    backgroundColor: 'white'
}
function App() {
    return (
        <div className="App">
            <Person></Person>
            <Persona></Persona>
            <Personal></Personal>
            <Personally></Personally>
            <h5>Chaile evabe normal html o dewa jabe abr nijeder banano html o dewa jabe </h5>
            <p>React rocks</p>
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>

        </div>
    );
}


function Person() {
    return <h1>Shakib Al Hasan</h1>
}
//react e eki func er vitore 2 ta jinish return kora jabe na tai p ke likar jnno alada ekta div dilam
function Persona() {
    return <div>
        <h1>Mishfiq</h1>
        <p>cricketer</p>
    </div>
}
//indentation er jnno evabe return krbo bracket er modhe
function Personal() {
    return (
        <div className='personal'>
            <h1>Tamim</h1>
            <p>cricketer</p>
        </div>
    )
}
//evabe fragment dileo hbe 
function Personally() {
    return (
        <>
            <h1>Nurul</h1>
            <p>cricketer</p>
        </>
    )
}

function Friend() {
    return (
        <div className='container'>
            <h3>Plabon</h3>
            <p>Game</p>
        </div>
    )
}


export default App;
//eta run kore dekhbo