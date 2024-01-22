import React, { useState } from 'react'
import Header from '../components/common/Header'
import TabsComponent from '../Dashboard/Tabs'
import { useEffect } from 'react';
import axios from "axios"
import SearchBar from '../Dashboard/Search';



const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response)=>{
      setCoins(response.data)
    })
    .catch(error=>console.log(error))
  },[])


    var filteredCoins = coins.filter((coin)=>(
    (coin.name).toLowerCase().includes(search.toLowerCase()) ||
    (coin.name).toLowerCase().includes(search.toLowerCase()) 
    ))
 
 
  console.log(search)
  return (
    <div>
      <Header/>
      <SearchBar search={search} setSearch={setSearch}/>
      <TabsComponent coins={filteredCoins}/>
    </div>
  )
}

export default Dashboard