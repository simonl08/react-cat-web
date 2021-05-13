import './App.css';
import React, { useState, useEffect} from "react"
import faker from "faker"
import { CatList } from './components/CatList';
import { Cart } from './components/Cart';
import { CartProvider } from './components/CartContext';

// const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
    handleFetch();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
// Main render (what is outputted)
const handleFetch = async () => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=8&page=1&order=Desc?mime_types=jpg,png`
  );
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    console.log(data)
    let element = data[i];
    element["name"] = faker.name.firstName()
    element["price"] = Number(faker.commerce.price())
  }

  setData(data);
};

  if (loading) return <h1>Loading ...</h1>
  return (
      <CartProvider>
        <div className="title">
          <h2>Cats4Lyf</h2>
        </div>
        <div className="cartContainer">
          <Cart />
        </div>
          <CatList list={data}/> 
      </CartProvider>
  )
}

export default App;


