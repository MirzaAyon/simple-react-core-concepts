import logo from './logo.svg';
import './App.css';

function App() {
    const products = [
        { name: 'laptopooo', price: 53000 },
        { name: 'phoney', price: 43000 },
        { name: 'watch00', price: 23000 },
        { name: 'tablettttey', price: 43000 },
    ]
    return (
        <div className="App">
            {/* {
        products.map(product => <Product></Product>)
      } */}
            {
                products.map(product => <Product name={product.name} price={product.price}></Product>)
            }
            {/* <Product name="laptop" price="70000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="5000"></Product> */}
        </div>
    );
}

function Product(props) {
    return (
        <div className='product'>
            <h3>Name:{props.name}</h3>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default App;
//style are at app.css in 2nd app
