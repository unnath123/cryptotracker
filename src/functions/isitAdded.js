export const isitAdded = (id) =>{
    let Wlist = JSON.parse(localStorage.getItem("watchList"))
    if(Wlist){
        if(Wlist.includes(id))
        return true;
    else
        return false
    }
    
    return false
   
}