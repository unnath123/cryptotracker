import axios from 'axios'

export const coinPrices = (id, days, priceType) =>{
  const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`)
    .then(response=>{
        return response.data[priceType]
    })
    .catch(error=>console.log(error))

    return myData
} 