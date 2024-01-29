import { MenuItem, Select } from "@mui/material";
import { useState,useEffect } from "react";
import "./style.css";
import { get100Coins } from "../../functions/get100Coins";
import { AllInbox } from "@mui/icons-material";

function SelectCoins({crypto1, crypto2, handleCoinChange }) {
    // const [crypto1, setCrypto1] = useState("ethereum");
    // const [crypto2, setCrypto2] = useState("tether");

    const [allCoins, setAllCoins] = useState([])

    async function getData(){
        const myCoins =await get100Coins();
        console.log(myCoins)
        setAllCoins(myCoins);
    }

    useEffect(() => {
        getData();
    }, [])
    

  return (
    <div className="compare-flex">
      <p>Coins 1</p>
      <Select
        value={crypto1}
        onChange={(e)=>handleCoinChange(e, false)}
        sx={{
          fontSize:'0.8rem',
          height: "2rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        {allCoins.filter((item)=>item.id!=crypto2).map((ele, i)=>(
            <MenuItem key={i} value={ele.id}>{ele.name}</MenuItem>
        ))}
      </Select>

      <p>Coins 2</p>
      <Select
        value={crypto2}
        onChange={(e)=>handleCoinChange(e, true)}
        sx={{
          fontSize:'0.8rem',
          height: "2rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        {allCoins.filter((item)=>item.id!=crypto1).map((ele, i)=>(
            <MenuItem key={i} value={ele.id}>{ele.name}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectCoins;