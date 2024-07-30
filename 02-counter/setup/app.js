let btns = document.querySelectorAll(".btn");
let value = document.querySelector(".value");
let count =0;
btns.forEach((btn)=>(
    btn.addEventListener("click",(e)=>{
        let btnFocus =e.currentTarget.classList;
      if(btnFocus.contains("decrease")){
        count--;
        value.textContent= count;
      }else if(btnFocus.contains("reset")){
        count=0;
        value.textContent= count;
      }else if(btnFocus.contains("increase")){
        count++;
        value.textContent=count;
      }
      if(count>0){
        value.style.color = "green";
      }else if(count<0){
        value.style.color="red";
      }else if(count ==0){
        value.style.color ="black";
      }
    })
))