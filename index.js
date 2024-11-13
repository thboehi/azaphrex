let bg = document.getElementById("background")
let text = document.getElementById("title")
let effect = document.getElementById("effect")
let sub = document.getElementById("hero-sub")

window.addEventListener('scroll', () => {
    let value = window.scrollY

    bg.style.marginTop = value * 0.3 + "px"
    text.style.marginTop = value * -0.4 + "px"
    effect.style.marginTop = value * -0.4 + "px"
    sub.style.marginBottom = value * 0.2 + "px"
    sub.style.opacity = 1 - (value / 500)
})



window.onkeydown = function(e) {
    let key = e.keyCode
    let distortion = new Audio('./assets/sounds/distortion-bass.mp3')
    let megabass = new Audio('./assets/sounds/mega-bass.mp3')
    let stab = new Audio('./assets/sounds/stab.mp3')

    switch (key) {
        case 37:
            e.preventDefault()
            stab.play()
            break
        case 38:
            e.preventDefault()
            distortion.play()
            break
        case 40:
            e.preventDefault()
            megabass.play()
            break
        default:
            break 
    }
    
}

let iframe = document.getElementById("ytb-iframe")
let maskConfig = (element) => {
    iframe.classList.toggle("nomask")
    if (iframe.classList.contains("nomask")) {
        element.innerText = "Afficher le masque"
    } else {
        element.innerText = "Retirer le masque"
    }
}