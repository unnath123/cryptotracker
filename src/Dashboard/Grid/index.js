import React, {useState} from 'react'
import style from './style.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarsIcon from '@mui/icons-material/Stars';
import {Link} from 'react-router-dom'
import { addToWatchList } from '../../functions/addToWatchList';
import { isitAdded } from '../../functions/isitAdded';
import { removefromWlist } from '../../functions/removeFromWatchList';

const Grid = ({coin}) => {
    const [isColored, setColored] = useState(isitAdded(coin.id));
    
//     function handleStarClickAdd(event){
//     event.preventDefault();
//     setColor(true)
//     // console.log("star clicked");
//     event.stopPropagation();
//     addToWatchList(coin.id);
//   };

//     function handleStarClickRemove(event){
//     event.preventDefault();
//     setColor(false)
//     // console.log("star clicked");
//     event.stopPropagation();
//     removefromWlist(coin.id);
//     }  

function handleClick(e){
    e.preventDefault();
    e.stopPropagation();
    if(isitAdded(coin.id)){
        removefromWlist(coin.id);
        console.log("Removed one" )
        setColored(false)
    }
    else{
        addToWatchList(coin.id);
        setColored(true);
    }
}

  return (
    <Link to={`/coin/${coin.id}`}>
    <div className='grid-container'>
        <div className="info-flex">
            <div className="info-flex-onee">
                <img src={coin.image} className='coin-logo' />
                <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>
            <div onClick={handleClick} className='star-icon-container' style={(coin.price_change_percentage_24h)>=0 ? {border:"3px solid var(--green)"} : {border:"3px solid var(--red)"}}>
                <StarRateIcon style={isColored ? {color:"var(--blue)"}:{color:"var(--white)"}}  className='star-icon'/>
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
    </Link>
  )
}

export default Grid

//isColored? handleStarClickRemove : handleStarClickAdd 