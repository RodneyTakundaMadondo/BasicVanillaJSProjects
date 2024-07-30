const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click",()=>{
    //first we define hexColor to store the #
    let hexColor = "#";
    //loop to run 6 times to populate hexColor with stuff to make our color
    for(let i=1;i<=6;i++){
        hexColor = hexColor+ hex[getRandomNumber()]
    };
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
 //defining our random Number generator to get us clean random numbers to iterate our colors array
 function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
 }