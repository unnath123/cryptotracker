

export const addToWatchList = (id) => {
    if (localStorage.getItem("watchList")) {
        let arr = JSON.parse(localStorage.getItem("watchList"));
        // console.log(arr);
        arr.push(id);
        localStorage.setItem("watchList", JSON.stringify(arr));
    } else {
        let newArr = [id];
        localStorage.setItem("watchList", JSON.stringify(newArr));
    }
}