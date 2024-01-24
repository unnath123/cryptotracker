import axios from 'axios';

export const getCoinData = (id) =>{
   const mData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response)=>{
        return response.data
        // console.log(response);
        // coinObject(setCoinData, response.data)
    })
    .catch(error=>console.log(error));

    return mData;
}