export const removefromWlist = (id) =>{
    let wlist = JSON.parse(localStorage.getItem("watchList"));
    if(wlist){
        console.log("id",id)
        console.log("Removed two");
        console.log(wlist)
        let newArr = wlist.filter((ele)=>ele!=id)
        console.log(newArr)
        localStorage.setItem("watchList", JSON.stringify(newArr))
    }
    else{
        console.log("error ")
    }
}