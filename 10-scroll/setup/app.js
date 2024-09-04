$(function(){
    //fixed date
    let dateContainer = document.querySelector("#date")
let date  = new Date().getFullYear()
dateContainer.innerHTML = date;

//fixed nav toggle
let navToggle = document.querySelector(".nav-toggle");
let linksContainer = document.querySelector(".links-container");
let links = document.querySelector(".links");

$(navToggle).click(()=>{
  let containerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;
  console.log(containerHeight+ " "+linksHeight);

  if(containerHeight < linksHeight){
    linksContainer.style.height = `${linksHeight}px`
  }else{
    linksContainer.style.height = 0;
  }
})

//navbar that is position fixed
let navbar = document.querySelector("#nav");
let topLink = document.querySelector(".top-link")
$(window).on("scroll",()=>{
    let scrollHeight = window.scrollY;
    let navbarHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navbarHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight>500){
       $(topLink).addClass("show-link")
    }else{
        $(topLink).removeClass("show-link")
    }
})


let scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach((links)=>{
  links.addEventListener("click",(e)=>{
    e.preventDefault()
    // const id  = e.currentTarget.getAttribute("href").replace("#","");
    // const element = document.getElementById(id);
    // const navheight = navbar.getBoundingClientRect().height;
    // const containerHeight = linksContainer.getBoundingClientRect().height;
    // const fixedNav= navbar.classList.contains("fixed-nav");

    // let position = element.offsetTop - navheight;
    // if(!fixedNav){
    //   position = position - navheight
    // }
    // if(navheight>82){
    //   position+= containerHeight;
    // }
    // window.scrollTo({
    //   left:0,
    //   top:position,
    // });
    // linksContainer.style.height = 0;
  })
})



















})