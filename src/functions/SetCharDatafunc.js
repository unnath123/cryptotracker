import { convertDate } from "./convertDate";

export const  SetCharDatafunc = (setChartdata, prices1, prices2) => {

  if(prices2){
    setChartdata({
      labels: prices1.map((ele)=> convertDate(ele[0])),
      datasets: [
        {
          label: "Crypto123",
          data: prices1.map((ele)=>(ele[1])),
          borderColor: "#3a80e9",
          backgroundColor:"transparent",
          fill:true,
          backgroundColor:"rgba(58,128,233,0.1)",
          borderColor:"#3a80e9",
          pointRadius: 0,
          tension: 0.25,
          borderWidth:2,
          yAxisID: 'y',
        },
        {
          label: "Crypto2",
          data: prices2.map((ele)=>(ele[1])),
          borderColor: "#3a80e9",
          backgroundColor:"transparent",
          fill:true,
          backgroundColor:"rgba(58,128,233,0.1)",
          borderColor:"#61c96f",
          pointRadius: 0,
          tension: 0.25,
          borderWidth:2,
          yAxisID: 'y2',
        },
      ],
    });
  }
else{
  setChartdata({
    labels: prices1.map((ele)=> convertDate(ele[0])),
    datasets: [
      {
        label: "Crypto1",
        data: prices1.map((ele)=>(ele[1])),
        borderColor: "#3a80e9",
        backgroundColor:"transparent",
        fill:true,
        backgroundColor:"rgba(58,128,233,0.1)",
        borderColor:"#3a80e9",
        pointRadius: 0,
        tension: 0.25,
        borderWidth:2,
      },
    ],
  });
}
   
}   