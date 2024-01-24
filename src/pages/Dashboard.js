import React, { useState } from 'react'
import Header from '../components/common/Header'
import TabsComponent from '../Dashboard/Tabs'
import { useEffect } from 'react';
import axios from "axios"
import SearchBar from '../Dashboard/Search';
import PaginationComponent from '../Dashboard/Pagination';
import Loader from '../components/common/Loader';
import BacktoTop from '../components/common/BacktoTop';



const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response)=>{
      setCoins(response.data)
      setPaginatedCoins(response.data.slice(0, 10));
      setLoading(()=>false)
    })
    .catch(error=>console.log(error))
  },[])


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
    <BacktoTop/>
    {isLoading ? (
      <Loader />
    ) : (
      <div style={{ minHeight: "90vh" }}>
        <Header />
        <SearchBar search={search} setSearch={setSearch} />
        <TabsComponent
          coins={search ? filteredCoins : paginatedCoins}
          setSearch={setSearch}
        />
        {!search && (
          <PaginationComponent
            pageNumber={pageNumber}
            handleChange={handlePageChange}
          />
        )}
      </div>
    )}
    {/* <Footer /> */}
  </>
);
}

export default Dashboard