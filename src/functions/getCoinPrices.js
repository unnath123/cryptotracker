import axios from 'axios'

export const coinPrices = (id,days) =>{
  const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`)
    .then(response=>{
        return response.data.prices
    // console.log("pricess",response.data)
    // setLoading(false);
    })
    .catch(error=>console.log(error))

    return myData
} 