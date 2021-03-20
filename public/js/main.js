var rootElement = document.documentElement
var ham_icon = document.getElementById("ham-icon")
const gallery = document.getElementById('gallery')

function jumpSocials() {
    document.getElementById("look_here").scrollIntoView({ behavior: 'smooth' })
}

function myFunction() {
    var nav = document.getElementById("nav")
    nav.classList.add("resp")
}

var slider = document.getElementById('slider')
// gallery.addEventListener('click', onSliderClick)


// showHandler0.setAttribute('style', "display: block;")
// showHandler1.setAttribute('style', "display: none;")
// showHandler2.setAttribute('style', "display: none;")

var increment = 0
function onSliderClick() {
    var selector = gallery.children[increment]
    selector.setAttribute('style', "display: none;")
    if (selector.hasAttribute('style', 'display: none')) {
        console.log('style')
        selector.setAttribute('style', "display: block;")

    }
}

var houseJoin = document.getElementById("join_house")
var houseJoin1 = document.getElementById("join_btn")

houseJoin1.addEventListener('click', () => {
    houseJoin.setAttribute('style', 'display: block')
})
// function onClick() {
//     console.log(increment)
//     if (increment <= 2) {
//         var showHandler = document.getElementById(`gallery${increment}`)
//         showHandler.setAttribute('style', "display: none;")
//         increment++
//         console.log(showHandler.attributes)

//     } else {
//         increment = 0
//         var showHandler = document.getElementById(`gallery${increment}`)
//         showHandler.setAttribute('style', "display: none;")
//         if (showHandler.attributes.length === 2) {
//             console.log('style')
//             showHandler.setAttribute('style', "display: block;")
//             increment++
//         }

//     }
// }