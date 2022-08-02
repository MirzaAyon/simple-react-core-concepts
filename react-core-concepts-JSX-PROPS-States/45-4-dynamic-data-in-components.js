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

            <Personal name="Rubel" nayika="alia"></Personal>
            <Personal name="bappaBhai" nayika="nai"></Personal>
            <Personal name="sharif"></Personal>
            <Personal nayika="katrina"></Personal>
            <Personal></Personal>

            <h5>Chaile evabe normal html o dewa jabe abr nijeder banano html o dewa jabe </h5>
            <p>React rocks</p>
            <Friend movie="doramon" phone="888"></Friend>
            <Friend phone="999"></Friend>


        </div>
    );
}
//first obj e rubel jinish ta dekha jabe inspact e 
//first obj e rubel jinish ta dekha jabe inspact e ,2nd tae bappabhai and 3rd ta khali



//indentation er jnno evabe return krbo bracket er modhe
function Personal(props) {
    // console.log(props);
    //inspact e dekhte chaile eta uncomment krbo
    //inspact - 40 no line e dekha jabe expand kore empty object pailam
    return (
        <div className='personal'>
            <h1>Name : {props.name}</h1>
            <p>Nayika : {props.nayika}</p>
            <p>Job : cricketer</p>
        </div>
    )
}
//evabe fragment dileo hbe 


function Friend(props) {
    console.log(props);
    return (
        <div className='container'>
            <h3>Plabon</h3>
            <p>Game</p>
            <p>phone : {props.phone}</p>
            <p>movie : {props.movie}</p>
            <p>Pasta</p>
        </div>
    )
}


export default App;
//try krbo app e
