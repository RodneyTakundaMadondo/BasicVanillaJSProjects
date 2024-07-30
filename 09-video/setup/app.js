// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
let videoCont = document.querySelector(".video-container")
let btn = document.querySelector(".switch-btn");
let preLoader = document.querySelector(".preloader");
btn.addEventListener("click",(e)=>{
    if(!e.currentTarget.classList.contains("slide")){
        e.currentTarget.classList.add("slide");
        videoCont.pause();
    }else{
        e.currentTarget.classList.remove("slide");
        videoCont.play()
    }
})

window.addEventListener("load",()=>{
    preLoader.classList.add("hide-preloader");
})