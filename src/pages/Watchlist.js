import React, { useState } from 'react'
import Header from '../components/common/Header'
import TabsComponent from '../Dashboard/Tabs'
import { useEffect } from 'react';
import axios from "axios"
import SearchBar from '../Dashboard/Search';
import PaginationComponent from '../Dashboard/Pagination';
import Loader from '../components/common/Loader';
import BacktoTop from '../components/common/BacktoTop';
import { get100Coins } from '../functions/get100Coins';

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const watchlist = JSON.parse(localStorage.getItem("watchList"));

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("watchList"))){
        getData();
    }
  },[watchlist]);

  async function getData(){
    let myCoins = await get100Coins();
    let watchList = JSON.parse(localStorage.getItem("watchList"))
    myCoins = myCoins.filter((ele)=>watchList.includes(ele.id))
    console.log(myCoins)
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0,10))
      setLoading(()=>false);
    }
  }

    var filteredCoins = coins.filter((coin)=>(
    (coin.name).toLowerCase().includes(search.toLowerCase()) ||
    (coin.name).toLowerCase().includes(search.toLowerCase()) 
    ));

    const handlePageChange = (event, value) => {
      setPageNumber(value);
      var startingIndex = (value - 1) * 10;
      setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
    };


 
  return (
    <>
    {watchlist ? 
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <div style={{ minHeight: "90vh" }}>
        <Header />
        <SearchBar search={search} setSearch={setSearch} />
        <TabsComponent
          coins={search ? filteredCoins : paginatedCoins}
          setSearch={setSearch}  colorflag={true}
        />
        {!search && (
          <PaginationComponent
            pageNumber={pageNumber}
            handleChange={handlePageChange}
          />
        )}
      </div>
    )}
    </> : 
    <div><h1>No coins to display in WatchList</h1></div> 
    }

  </>
);
}


export default Dashboard