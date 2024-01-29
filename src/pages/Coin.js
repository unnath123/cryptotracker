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
import SelectDays from '../components/Coin/SelectDays';
import { SetCharDatafunc } from '../functions/SetCharDatafunc';
import ToggleButtons from '../components/Coin/PriceType';

const CoinPage = () => {
    const {id} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartdata] = useState([]);
    const [priceType, setPriceType] = useState("prices")

    useEffect(() => {
     if(id){
      getData();
     }   
    }, [id])

    async function getData(){
      const Data = await getCoinData(id);
      if(Data){
        coinObject(setCoinData, Data);
        const prices = await coinPrices(id, days, priceType);
        SetCharDatafunc(setChartdata, prices);
        setLoading(false);
      }
    }
    
    async function handleDaysChange(e){
      setLoading(true)
      setDays(e.target.value);
      const prices = await coinPrices(id, e.target.value, priceType);
      SetCharDatafunc(setChartdata, prices);
      setLoading(false);
    }

    const handlePriceTypeChange = async (e, hosaType) => {
      setLoading(true)
      setPriceType(hosaType);
      const prices = await coinPrices(id, days, e.target.value);
      if(prices.length>0){
        SetCharDatafunc(setChartdata, prices);
        setLoading(false);
      }
      
  };

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
                <SelectDays days={days} handleDaysChange={handleDaysChange} />
                <ToggleButtons priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                <LineChart chartData={chartData} priceType={priceType}/>
              </div>
              <CoinInfo heading={coinData.name} description={coinData.desc}/>
              </>
            )
        } 
    </div>
  )
}

export default CoinPage