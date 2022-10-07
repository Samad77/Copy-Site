let setOnLocalStorage = (time) => {
    // localStorage.setItem(time, 1);

    let getItemFromStorage = localStorage.getItem(time);
    console.log(getItemFromStorage)
    if(getItemFromStorage){

        let newQuantity = parseInt(getItemFromStorage) + 1;
        localStorage.setItem(time, newQuantity)
    }

    else{
        localStorage.setItem(time, 1)
    }
}

export {setOnLocalStorage}