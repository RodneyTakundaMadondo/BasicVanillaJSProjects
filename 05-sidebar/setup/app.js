let toggleSBar = document.querySelector(".sidebar-toggle");
let closeBtn = document.querySelector(".close-btn");
let sidebar = document.querySelector(".sidebar");
toggleSBar.addEventListener("click",()=>{
  sidebar.classList.toggle("show-sidebar");
})
closeBtn.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar");
})