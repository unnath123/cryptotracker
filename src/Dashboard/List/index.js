import React,{useState} from "react";
import style from "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from '@mui/material/Tooltip';
import { convertNumbers } from "../../functions/ConvertNumber";
import {Link} from 'react-router-dom'
import StarRateIcon from '@mui/icons-material/StarRate';
import { addToWatchList } from '../../functions/addToWatchList';
import { isitAdded } from '../../functions/isitAdded';
import { removefromWlist } from '../../functions/removeFromWatchList';

const List = ({ coin }) => {
  const [isColored, setColored] = useState(isitAdded(coin.id));

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
      <tr className="list-row">
        <Tooltip title="logo">
        <td className="td-coin-image">
          <img src={coin.image} className="coin-logo" />
        </td>
        </Tooltip>

        <td>
          <div className="td-name-col">
            <p className="td-coin-symbol">{coin.symbol}</p>
            <p className="td-coin-name">{coin.name}</p>
          </div>
        </td>
        {/* <td className="chip-flex"> */}
          {coin.price_change_percentage_24h >= 0 ? (
            <Tooltip title="net increase"> 
            <td className="chip-container">
              <div className="price-chip-positive p-c-p flex-prop">
                {Number(coin.price_change_percentage_24h).toFixed(2)}%
              </div>
              <div className="chip-icon-up td-icon flex-prop">
                <TrendingUpRoundedIcon />
              </div>
            </td></Tooltip>
          ) : (
            <Tooltip title="net decrease">
            <td className="chip-container">
              <div className="price-chip-negative p-c-p flex-prop">
                {Number(coin.price_change_percentage_24h).toFixed(2)}%
              </div>
              <div className="chip-icon-down td-icon flex-prop">
                <TrendingDownRoundedIcon />
              </div>
            </td></Tooltip>
          )}
        {/* </td> */}
        {/* <td className="coin-price-info"> */}
        <Tooltip title="Current Price">
            <td>
            {coin.price_change_percentage_24h >= 0 ? (
            <h3 className='td-left-align' style={{ color: "var(--green)" }}>
              ₹{Number(coin.current_price).toLocaleString()}
            </h3>
          ) : (
            <h3 className='td-left-align' style={{ color: "var(--red" }}>
              ₹{Number(coin.current_price).toLocaleString()}
            </h3>
          )}
            </td>
          </Tooltip>
          <Tooltip title="Total volume"><td className="total-volume"><p className="td-mkt-vlm">{Number(coin.total_volume).toLocaleString()}</p></td></Tooltip>
          <Tooltip title="Market cap"><td className="td-mkt-cap-desktop market-cap"><p className="td-mkt-vlm">₹{Number(coin.market_cap).toLocaleString()}</p></td></Tooltip>
          <Tooltip title="Market cap"><td className="td-mkt-cap-mobile market-cap"><p className="td-mkt-vlm">₹{convertNumbers(coin.market_cap)}</p></td></Tooltip>
          <Tooltip>
            <td className="star-container-list">
            <div onClick={handleClick} className='star-icon-container-list' style={(coin.price_change_percentage_24h)>=0 ? {border:"3px solid var(--green)"} : {border:"3px solid var(--red)"}}>
                <StarRateIcon style={isColored ? {color:"var(--blue)"}:{color:"var(--white)"}}  className='star-icon-list'/>
            </div>
            </td>
            </Tooltip>
        {/* </td> */}
      </tr>
   </Link>
  );
};

export default List;
