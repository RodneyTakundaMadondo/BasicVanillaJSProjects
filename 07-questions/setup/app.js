//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question)=>{
   const btn = question.querySelector(".question-btn");
   btn.addEventListener("click", ()=>{
    questions.forEach((items)=>{
        if(items != question){
    items.classList.remove("show-text");
        }
    })
    question.classList.toggle("show-text");
   })
})


//traversing the dom
// let questionBtn = document.querySelectorAll(".question-btn");
// questionBtn.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//            let parent = e.currentTarget.parentElement.parentElement;
//            parent.classList.toggle("show-text")
//     })
// })