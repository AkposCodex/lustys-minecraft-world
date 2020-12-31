// var scrollToTopBtn = document.getElementById("socials")

var rootElement = document.documentElement

var ham_icon = document.getElementById("ham-icon")

// scrollToTopBtn.addEventListener("click", jumpSocials)

ham_icon.addEventListener("click", myFunction)

function jumpSocials(){
    document.getElementById("look_here").scrollIntoView({behavior: 'smooth'})
}

function myFunction() {
   var nav = document.getElementById("nav")
   nav.classList.add("resp")
  }

var showcase
var showHandler = document.getElementById("showcase")
showHtml()

function showHtml(){
    showHandler.innerHTML = "<img src='showcase/2020-02.png' alt='Fuck'>"
}
