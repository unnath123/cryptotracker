import React, { useState } from 'react'
import Header from '../components/common/Header'
import TabsComponent from '../Dashboard/Tabs'
import { useEffect } from 'react';
import axios from "axios"


const Dashboard = () => {
  const [coins, setCoins] = useState([1,2,3,4]);

  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response)=>{
      setCoins(response.data)
    })
    .catch(error=>console.log(error))
  },[])
  return (
    <div>
      <Header/>
      <TabsComponent coins={coins}/>
    </div>
  )
}

export default Dashboard