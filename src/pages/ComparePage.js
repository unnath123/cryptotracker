import React,{useState, useEffect} from 'react'
import Header from '../components/common/Header'
import SelectCoins from '../components/Compare'
import SelectDays from '../components/Coin/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import Loader from '../components/common/Loader'
import {coinObject} from '../functions/convertObjects'
import { coinPrices } from '../functions/getCoinPrices';
import CoinInfo from '../components/Coin/CoinInfo';
import List from '../Dashboard/List';
import {SetCharDatafunc} from '../functions/SetCharDatafunc'
import LineChart from '../components/Coin/LinChart';
import ToggleButtons from '../components/Coin/PriceType';


const ComparePage = () => {
    const [crypto1, setCrypto1] = useState("bitcoin")
    const [crypto2, setCrypto2] = useState("tether");
    const [cryptoData1, setCryptoData1] = useState({})
    const [cryptoData2, setCryptoData2] = useState({})
    const [days, setDays] =useState(30);
    const [isLoading, setLoading] = useState(false);
    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({})

    async function getData(){
        setLoading(true);
        const data1 = await getCoinData(crypto1);
        console.log("crypto data1 I want this ",data1)
        if(data1){
            const data2 = await getCoinData(crypto2);
            coinObject(setCryptoData1, data1);
            
            if(data2){
                coinObject(setCryptoData2, data2);
                const prices1 = await coinPrices(crypto1, days, priceType);
                const prices2 = await coinPrices(crypto2, days, priceType);
                SetCharDatafunc(setChartData, prices1, prices2);
                setLoading(false);
        }
       
        }
    }

    async function handleDaysChange(e){
        setLoading(true)
        setDays(e.target.value)
        const prices1 = await coinPrices(crypto1, days, priceType);
        const prices2 = await coinPrices(crypto2, days, priceType);
        SetCharDatafunc(setChartData, prices1, prices2);
        setLoading(false)
    }

   async function handleCoinChange(e, flag){
    setLoading(true)
        if(flag){
            setCrypto2(e.target.value);
            const Data = await getCoinData(e.target.value)
            console.log("Crypto 2");
            coinObject(setCryptoData2, Data);
            // SetCharDatafunc(setChartdata, prices);
           
        }
        else{
            setCrypto1(e.target.value);
            console.log("Crypto 1") 
            const Data = await getCoinData(e.target.value)
            coinObject(setCryptoData1, Data);
            // SetCharDatafunc(setChartdata, prices);
      
        }
        setLoading(false)
    }
    useEffect(()=>{
        console.log("useEffect work agtide")
        getData();
    }, []);


  async function handlePriceTypeChange(e, newType){
        setLoading(true);
        setPriceType(newType);
        const prices1 = await coinPrices(crypto1, days, newType);
        const prices2 = await coinPrices(crypto2, days, newType);
    }

  return (
    <div>
        <Header/>
        {isLoading || !cryptoData1?.id || !cryptoData2?.id ? (
        <Loader/>
        ) 
        : (
        <>
        <div className='coins-days-flex'> 
            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange}/>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/> 
            <ToggleButtons priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
        </div>
        <div className='grey-wrapper'>
            <List coin={cryptoData1}/>
        </div>  
        <div className='grey-wrapper'>
            <List coin={cryptoData2}/>
        </div>
        <div className='grey-wrapper'>
        <LineChart chartData={chartData} priceType={"prices"} multiAxis={true}/>
        </div>
        <CoinInfo heading={cryptoData1.name} description={cryptoData1.desc}/>
        <CoinInfo heading={cryptoData2.name} description={cryptoData2.desc}/> 
        </>)
        }
    </div>
  )
}

export default ComparePage