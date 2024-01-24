import { useTabContext } from '@mui/lab';
import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header'
import { useEffect } from 'react';
import Loader from '../components/common/Loader';
import { coinObject } from '../functions/convertObjects';
import List from '../Dashboard/List'
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { coinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LinChart';
import { convertDate } from '../functions/convertDate';

const CoinPage = () => {
    const {id} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartdata] = useState([]);

    useEffect(() => {
     if(id){
      getData();
     }   
    }, [id])

    async function getData(){
      const Data = await getCoinData(id);
      if(Data){
        coinObject(setCoinData, Data);
        const prices = await coinPrices(id, days);
        console.log("sadya aythu")
        setLoading(false);
        setChartdata({
          labels: prices.slice(0,20).map((ele)=> convertDate(ele[0])),
          datasets: [
            {
              data: prices.map((ele)=>(ele[1])),
              borderColor: "#3a80e9",
              backgroundColor:"transparent",
              fill:true,
              backgroundColor:"rgba(58,128,233,0.1)",
              borderColor:"#3a80e9",
              pointRadius: 0,
              tension: 0.25,
              borderWidth:2,
            },
          ],
        });
      }
      

    }
    
  return (
    <div>
        <Header/>
        {
            isLoading ? 
            <Loader/>
            :
            (
              <>
              <div className='grey-wrapper'>
                <List coin={coinData}/>
              </div>  
              <div className="grey-wrapper">
                <LineChart chartData={chartData}/>
              </div>
              <CoinInfo heading={coinData.name} description={coinData.desc}/>
              </>
            )
           
        }
        
    </div>
  )
}

export default CoinPage