import logo from './logo.svg';
import './App.css';
const number = 5555;
const singers = [
    { name: 'king', job: 'singer' },
    { name: 'Queen', job: 'cricket' },
    { name: 'Shammi', job: 'Ipe' },
    { name: 'Bappy', job: 'bcs' }
]
const singerStyle = {
    color: 'purple',
    backgroundColor: 'white'
}
function App() {
    const nayoks = ['rebel', 'bappada', 'kuber', 'jashim', 'salman', 'Raz', 'Anwar'];
    //joto barobo li te toto gulai show hbe 
    return (
        <div className="App">
            {/* {
        nayoks.map(nayok => <li>{nayok}</li>)
      } */}

            {
                nayoks.map(nayok => <li>Name : {nayok}</li>)
            }


            {/* {
        nayoks.map(nayok => <Personal></Personal>)
      } */}


            {/* {
        nayoks.map(nayok => <Personal name={nayok}></Personal>)
      } */}


            {
                singers.map(singer => <Personal name={singer.name}></Personal>)
            }





            <Personal name={nayoks[0]} nayika="alia"></Personal>
            <Personal name={nayoks[1]} nayika="nai"></Personal>
            <Personal name={nayoks[2]}></Personal>
            <Personal nayika="katrina"></Personal>
            <Personal></Personal>

            <h5>Chaile evabe normal html o dewa jabe abr nijeder banano html o dewa jabe </h5>
            <p>React rocks</p>
            <Friend movie="doramon" phone="888"></Friend>
            <Friend phone="999"></Friend>


        </div>
    );
}





function Personal(props) {

    return (
        <div className='personal'>
            <h1>Name : {props.name}</h1>
            <p>Nayika : {props.nayika}</p>
            <p>Job : cricketer</p>
        </div>
    )
}



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
