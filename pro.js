// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.top = "0";
  } else {
    header.style.top = "-150px";
  }
}

// Active Change
let header = document.getElementById("navbar")
let btns= header.getElementsByClassName("btn")

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active"
  });
  
}



 // Nav Link

 let homes = document.getElementById("homes")
 let service = document.getElementById("service")
 let abouts = document.getElementById("abouts")
 let contacts = document.getElementById("contacts")

 homes.addEventListener("click", function () {
  location.href = "#home"
 })

 service.addEventListener("click", function () {
  location.href = "#services"
 })

 abouts.addEventListener("click", function () {
  location.href = "#about"
 })


 contacts.addEventListener("click", function () {
  location.href = "#contact"
 })

 let btnss= document.getElementById("button")

 btnss.addEventListener("click", function () {
  location.href= "#about"
 })

//Dark Mode

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark");
}


