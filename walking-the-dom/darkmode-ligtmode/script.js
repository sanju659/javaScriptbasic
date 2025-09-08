let btn = document.querySelector("#btn");
let txt = document.querySelector("#txt");
let bgColor = "light";
btn.addEventListener("click", () => {
    // let bgColor = "light";
    if(bgColor === "light"){
        // console.log(bgColor);
        bgColor = "dark";
        // console.log("change "+bgColor);
        document.body.style.backgroundColor = "black";
        txt.style.color = "white";

    }else{
        // console.log(bgColor);
        bgColor = "light";
        // console.log("change "+bgColor);
        document.body.style.backgroundColor = "white";
        txt.style.color = "black";
    }
});