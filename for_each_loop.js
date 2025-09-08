let arr = [36, 65, 28, 57, 73];

/*arr.forEach(function printVal(val){
    console.log(val);
});*/

/*arr.forEach((val) => {
    console.log(val);
});*/

let func = (val) => {
    console.log(val);
}
arr.forEach(func);