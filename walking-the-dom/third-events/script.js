//onclick
/*let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    let a = 10;
    let b = 20;
    console.log(a+b);
}*/

//mouse over
/*let box = document.querySelector("#box");
box.onmouseover = () => {
    let a = 10;
    let b = 20;
    console.log(a*b);
}*/

//eventlistner
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("button clicked!");
});