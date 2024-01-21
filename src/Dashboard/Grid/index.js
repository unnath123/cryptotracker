import React from 'react'
import style from './style.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

const Grid = ({coin}) => {
  return (
    <div className='grid-container'>
        <div className="info-flex">
            <img src={coin.image} className='coin-logo' />
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </div>
        <div className='chip-flex'>{
            (coin.price_change_percentage_24h)>=0 ? 
            <div className="chip-container">
                <div className='price-chip-positive flex-prop'>
                    {Number(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
                <div className='chip-icon-up flex-prop'><TrendingUpRoundedIcon/></div>
            </div>
            :
            <div className="chip-container">
                <div className='price-chip-negative flex-prop'>
                    {Number(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
                <div className='chip-icon-down flex-prop'><TrendingDownRoundedIcon/></div>
            </div>
        }   
        
        </div>
        <div className='coin-price-info'>
        {
            (coin.price_change_percentage_24h)>=0 ?
            <h3 style={{color:"var(--green)"}}>Rs {Number(coin.current_price).toLocaleString()}</h3>:
            <h3 style={{color:"var(--red"}}>Rs {Number(coin.current_price).toLocaleString()}</h3>
        }
        <p>Total volume: {Number(coin.total_volume).toLocaleString()}</p>
        <p>Market cap: Rs{Number(coin.market_cap).toLocaleString()}</p>
        </div>
    </div>
  )
}

export default Grid