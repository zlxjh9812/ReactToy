import { useState, useEffect } from "react";

function CoinTracker(){
    const[loading,setLoading] = useState(true);
    const[coins,Setcoins] = useState([]);
    let[money,setMoney] = useState(0);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
        .then((response)=>response.json())
        .then((json)=>Setcoins(json));
        setLoading(false);
    },[]);
    const onchange=(event)=>{
        console.log(event.target.value);
        setMoney(event.target.value);
    }
    return(
        <div>
            <h1>The Coin {coins.length}</h1>
            <input placeholder="How many do you have money" onChange={onchange}></input>
            {/* {money ? null :<h1>you can buy BTC {coins.quotes.USD.price/money}</h1>} */}
            {loading ? <strong>Loading...</strong> : null}
            <select>
            {coins.map((coins)=> <option>{coins.name} ({coins.symbol}) : ${money =0? 0:money/(coins.quotes.USD.price)}</option>)}
            </select>
            <ul>
                {coins.map((coins) => <li>{coins.name} ({coins.symbol}) : ${Math.round(coins.quotes.USD.price)} USD</li>)}
              
            </ul>
        </div>

    );
}
export default CoinTracker;