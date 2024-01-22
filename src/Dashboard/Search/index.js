import React from 'react'
import style from './style.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchBar = ({search, setSearch}) => {
    // const [] = useState("")
  return (
    <div className='search-flex'>
        <SearchIcon/>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar