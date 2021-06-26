import React, { useEffect, useState }   from 'react';
import './App.css';
import axios from 'axios'

const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [coins , setCoins] = useState([])
  useEffect(()=>{
    axios.get(apiUrl)
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(console.error) 
  },[]);
  return (
    <div className="App">
      <div classNamw="search">
        <h1 classNamw="text">Search Currency</h1>
        <form>
          <input type="text" className="input" placeholder="Search" />
        </form>
      </div>
    </div>
  );
}

export default App;
