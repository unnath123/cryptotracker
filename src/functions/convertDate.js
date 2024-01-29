export const convertDate = (date)=>{
    var date = new Date(date);
    return date.getDate() + "/" + (date.getMonth() + 1);
}