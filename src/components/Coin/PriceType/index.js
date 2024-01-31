import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from 'react'
import style from './style.css'

export default function ToggleButtons({priceType, handlePriceTypeChange}) {

  return (
    <div className='toggle-prices'>
        <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="text alignment"
      sx={{
        "& .Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "var(--blue)",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue)",
        },
      }}
    >
      <ToggleButton className="toggle-btn" value="prices" aria-label="left aligned">Price</ToggleButton>
      <ToggleButton className="toggle-btn" value="market_caps" aria-label="centered">Market_Cap</ToggleButton>
      <ToggleButton className="toggle-btn" value="total_volumes" aria-label="right aligned">Total_Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}