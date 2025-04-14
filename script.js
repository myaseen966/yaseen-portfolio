const hamburger = document.querySelector(".hamburger");

const mbilMenu = document.querySelector(".nav-list ul");

const menuItem = document.querySelectorAll(".nav-list ul li a");

const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mbilMenu.classList.toggle("active");
});

menuItem.forEach((item)=>{
    item.addEventListener("click", ()=>{
        hamburger.classList.toggle("active");
        mbilMenu.classList.toggle("active");
    });
});

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});
